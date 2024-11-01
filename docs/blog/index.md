# JavaScript原生+Python实现文件分片上传

## JavaScript代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 引入spark-md5.js计算文件MD5值 -->
    <script src="https://cdn.bootcss.com/spark-md5/3.0.0/spark-md5.js" type="text/javascript"></script>
    <title>Document</title>
</head>
<body>
    <input type="file" name="file">
    <script>
        // 设置每次断点上传的文件大小
        const SIZE = 10 * 1024 * 1024;

        // 文件断点分片方法
        function getChunk(file) {
            const fileChunkList = [];
            let i = 0;
            while (i < file.size) {
                fileChunkList.push({ file: file.slice(i, i + SIZE) });
                i += SIZE;
            }
            return fileChunkList;
        }

        // 发起文件分片上传请求
        function upload(data) {
            return new Promise(resolve => {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', "http://127.0.0.1:8000/file/");
                xhr.send(data);
                xhr.onreadystatechange = (e) => {
                    if (xhr.readyState === 4) {
                        if (xhr.status >= 200 && xhr.status <= 300) {
                            resolve({
                                result: JSON.parse(xhr.responseText)
                            });
                        } else if (xhr.status >= 400) {
                            resolve({
                                result: xhr.status
                            });
                        }
                    }
                };
            });
        }

        // 文件分片上传完毕执行文件合并代码
        function merge(data) {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', "http://127.0.0.1:8000/merge/");
            xhr.send(data);
            xhr.onreadystatechange = (e) => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status <= 300) {
                        console.log(JSON.parse(xhr.responseText));
                    } else if (xhr.status >= 400) {
                        console.log(xhr.status);
                    }
                }
            };
        }

        // 获取input对象
        const input = document.querySelector("input");

        // 监听文件变化
        input.addEventListener("change", function (e) {
            let file = e.target.files[0];

            // 接下来为了获取文件md5
            const fileReader = new FileReader();
            fileReader.readAsBinaryString(file);
            fileReader.onload = async e => {
                const md5 = SparkMD5.hashBinary(e.target.result);
                const chunkList = getChunk(file);
                const formDataList = chunkList.map(async (item, index) => {
                    const formData = new FormData();
                    formData.append("chunk", item.file);
                    formData.append("index", index);
                    formData.append("md5", md5);
                    formData.append("name", file.name);
                    await upload(formData);
                    console.log("分块执行时间" + new Date().getTime());
                });

                Promise.all(formDataList).then(e => {
                    console.log("合并执行时间" + new Date().getTime());
                    const mergeData = new FormData();
                    mergeData.append("md5", md5);
                    mergeData.append("name", file.name);
                    mergeData.append("index", formDataList.length);
                    merge(mergeData);
                });
            };
        });
    </script>
</body>
</html>
```

## Python代码

```python
from django.http import JsonResponse
import os
import time

def merge(request):
    md5 = request.POST.get("md5")
    name = request.POST.get("name")
    index = request.POST.get("index")
    print(index)
    file_name = f"{md5}-{name}"
    print(file_name)
    print(f"文件合并{time.time()}")
    temp_file = open(f"./static/{file_name}", 'wb+')
    for i in range(0, int(index)):
        with open(f"./static/{file_name}-{i}", "rb+") as f:
            temp_file.write(f.read())
    temp_file.close()
    return JsonResponse({'code': 200, 'msg': '文件合并成功'})

def file(request):
    index = request.POST.get("index")
    md5 = request.POST.get("md5")
    name = request.POST.get("name")
    file_name = f"{md5}-{name}-{index}"
    if os.path.exists("./static/" + file_name):
        return JsonResponse({'code': 200, 'msg': '上传成功'})
    with open("./static/" + file_name, "wb+") as destination:
        for chunk in request.FILES["chunk"].chunks():
            destination.write(chunk)
    print(f"文件上传{time.time()}")
    return JsonResponse({'code': 200, 'msg': '上传成功'})
```


