"use strict";(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[904],{27109:function(d,n,a){a.r(n),a.d(n,{demos:function(){return o}});var t=a(67294),e=a(1765),o={}},87621:function(d,n,a){a.r(n),a.d(n,{demos:function(){return o}});var t=a(67294),e=a(17118),o={}},86008:function(d,n,a){a.r(n),a.d(n,{demos:function(){return o}});var t=a(67294),e=a(67913),o={}},43482:function(d,n,a){a.r(n),a.d(n,{demos:function(){return o}});var t=a(67294),e=a(69195),o={}},11171:function(d,n,a){a.r(n),a.d(n,{demos:function(){return o}});var t=a(67294),e=a(68537),o={}},71984:function(d,n,a){a.r(n),a.d(n,{demos:function(){return o}});var t=a(67294),e=a(93882),o={}},30747:function(d,n,a){a.r(n),a.d(n,{demos:function(){return o}});var t=a(67294),e=a(69692),o={}},4605:function(d,n,a){a.r(n),a.d(n,{demos:function(){return o}});var t=a(67294),e=a(41496),o={}},93885:function(d,n,a){a.r(n),a.d(n,{demos:function(){return o}});var t=a(67294),e=a(97023),o={}},49087:function(d,n,a){a.r(n),a.d(n,{demos:function(){return o}});var t=a(67294),e=a(96118),o={}},93463:function(d,n,a){a.r(n),a.d(n,{demos:function(){return o}});var t=a(67294),e=a(82697),o={}},8489:function(d,n,a){a.r(n),a.d(n,{demos:function(){return o}});var t=a(67294),e=a(86176),o={}},74283:function(d,n,a){a.r(n),a.d(n,{demos:function(){return o}});var t=a(67294),e=a(21462),o={}},55001:function(d,n,a){a.r(n),a.d(n,{demos:function(){return o}});var t=a(67294),e=a(17022),o={}},51355:function(d,n,a){a.r(n),a.d(n,{demos:function(){return o}});var t=a(67294),e=a(1490),o={}},90059:function(d,n,a){a.r(n),a.d(n,{demos:function(){return o}});var t=a(67294),e=a(89462),o={}},5824:function(d,n,a){a.r(n),a.d(n,{demos:function(){return o}});var t=a(67294),e=a(83626),o={}},40707:function(d,n,a){a.r(n),a.d(n,{demos:function(){return o}});var t=a(67294),e=a(95116),o={}},17323:function(d,n,a){a.r(n),a.d(n,{demos:function(){return o}});var t=a(67294),e=a(36793),o={}},92702:function(d,n,a){a.r(n),a.d(n,{demos:function(){return o}});var t=a(67294),e=a(4480),o={}},20303:function(d,n,a){a.r(n),a.d(n,{texts:function(){return e}});var t=a(1765);const e=[{value:"\u6587\u7AE0\u5728 CSDN\uFF0C\u70B9\u51FB\u4E0B\u65B9\u94FE\u63A5\u8DF3\u8F6C",paraId:0,tocIndex:0},{value:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F JSAPI \u4E0B\u5355\u652F\u4ED8 PHP \u524D\u540E\u7AEF\u6559\u7A0B",paraId:1,tocIndex:0}]},82609:function(d,n,a){a.r(n),a.d(n,{texts:function(){return e}});var t=a(17118);const e=[{value:"\u200B",paraId:0},{value:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- \u5F15\u5165spark-MD5.js\u8BA1\u7B97\u6587\u4EF6MD5\u503C -->
    <script
      src="https://cdn.bootcss.com/spark-md5/3.0.0/spark-md5.js"
      type="text/javascript"
    ><\/script>
    <title>Document</title>
  </head>
  <body>
    <input type="file" name="file" />
    <script>
      // \u8BBE\u7F6E\u6BCF\u6B21\u65AD\u70B9\u4E0A\u4F20\u7684\u6587\u4EF6\u5927\u5C0F
      const SIZE = 10 * 1024 * 1024;
      // \u6587\u4EF6\u65AD\u70B9\u5206\u7247\u65B9\u6CD5
      function getChunk(file) {
        const fileChunkList = [];
        let i = 0;
        while (i < file.size) {
          fileChunkList.push({ file: file.slice(i, i + SIZE) });
          i += SIZE;
        }
        return fileChunkList;
      }
      // \u53D1\u8D77\u6587\u4EF6\u5206\u7247\u4E0A\u4F20\u8BF7\u6C42
      function upload(data) {
        return new Promise((resolve) => {
          const xhr = new XMLHttpRequest();
          xhr.open('POST', 'http://127.0.0.1:8000/file/');
          xhr.send(data);
          xhr.onreadystatechange = (e) => {
            if (xhr.readyState === 4) {
              if (xhr.status >= 200 && xhr.status <= 300) {
                resolve({
                  result: JSON.parse(xhr.responseText),
                });
              } else if (xhr.status >= 400) {
                resolve({
                  result: xhr.status,
                });
              }
            }
          };
        });
      }
      // \u6587\u4EF6\u5206\u7247\u4E0A\u4F20\u5B8C\u6BD5\u6267\u884C\u6587\u4EF6\u5408\u5E76\u4EE3\u7801
      function merge(data) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://127.0.0.1:8000/merge/');
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
      // \u83B7\u53D6input\u5BF9\u8C61
      const input = document.querySelector('input');
      // \u76D1\u542C\u6587\u4EF6\u53D8\u5316
      input.addEventListener('change', function (e) {
        let file = e.target.files[0];
        // \u63A5\u4E0B\u6765\u4E3A\u4E86\u83B7\u53D6\u6587\u4EF6md5
        const fileReader = new FileReader();
        fileReader.readAsBinaryString(file);
        fileReader.onload = async (e) => {
          const md5 = SparkMD5.hashBinary(e.target.result);
          const chunkList = getChunk(file);
          const formDataList = chunkList.map(async (item, index) => {
            const formData = new FormData();
            formData.append('chunk', item.file);
            formData.append('index', index);
            formData.append('md5', md5);
            formData.append('name', file.name);
            await upload(formData);
            console.log('\u5206\u5757\u6267\u884C\u65F6\u95F4' + new Date().getTime());
          });
          Promise.all(formDataList).then((e) => {
            console.log('\u5408\u5E76\u6267\u884C\u65F6\u95F4' + new Date().getTime());
            const mergeData = new FormData();
            mergeData.append('md5', md5);
            mergeData.append('name', file.name);
            mergeData.append('index', formDataList.length);
            merge(mergeData);
          });
        };
      });
    <\/script>
  </body>
</html>
`,paraId:1,tocIndex:1},{value:`def merge(request):
    md5 = request.POST.get("md5")
    name = request.POST.get("name")
    index = request.POST.get("index")
    print(index)
    file_name = f"{md5}-{name}"
    print(file_name)
    print(f"\u6587\u4EF6\u5408\u5E76{time.time()}")
    temp_file = open(f"./static/{file_name}", 'wb+')
    for i in range(0, int(index)):
        with open(f"./static/{file_name}-{i}", "rb+") as f:
            temp_file.write(f.read())
    temp_file.close()
    return JsonResponse({'code': 200, 'msg': '\u6587\u4EF6\u5408\u5E76\u6210\u529F'})


def file(request):
    index = request.POST.get("index")
    md5 = request.POST.get("md5")
    name = request.POST.get("name")
    file_name = f"{md5}-{name}-{index}"
    if os.path.exists("./static/" + file_name):
        return JsonResponse({'code': 200, 'msg': '\u4E0A\u4F20\u6210\u529F'})
    with open("./static/" + file_name, "wb+") as destination:
        for chunk in request.FILES["chunk"].chunks():
            destination.write(chunk)
    print(f"\u6587\u4EF6\u4E0A\u4F20{time.time()}")
    return JsonResponse({'code': 200, 'msg': '\u4E0A\u4F20\u6210\u529F'})




\u200B
`,paraId:2,tocIndex:2}]},26845:function(d,n,a){a.r(n),a.d(n,{texts:function(){return e}});var t=a(67913);const e=[{value:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>\u5361\u7247\u53CD\u8F6C\u6548\u679C</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      .box {
        height: 400px;
        width: 300px;
        position: relative;
        transition: transform 0.6s;
        transform-style: preserve-3d;
      }

      .box div {
        top: 0;
        left: 0;
        backface-visibility: hidden;
        position: absolute;
        width: 100%;
        height: 100%;
      }

      .front {
        background-color: red;
      }

      .back {
        background-color: blue;
        transform: rotateY(180deg);
      }

      .flipped {
        transform: rotateY(180deg);
      }
    </style>
  </head>

  <body>
    <div class="box">
      <div class="front">
        <button>\u53CD\u8F6C</button>
      </div>
      <div class="back">
        <button>\u53CD\u8F6C</button>
      </div>
    </div>
    <script>
      var isReverse = false;
      let box = document.querySelector('.box');
      let buttons = document.querySelectorAll('button');
      buttons.forEach(function (button) {
        button.addEventListener('click', function () {
          if (isReverse) {
            box.classList.remove('flipped');
          } else {
            box.classList.add('flipped');
          }
          isReverse = !isReverse;
        });
      });
    <\/script>
  </body>
</html>
`,paraId:0,tocIndex:2},{value:"transform-style: preserve-3d",paraId:1,tocIndex:4},{value:" \u662F CSS \u4E2D\u7684\u4E00\u4E2A\u5C5E\u6027\uFF0C\u7528\u4E8E\u63A7\u5236\u5143\u7D20\u7684\u5B50\u5143\u7D20\u662F\u5426\u5728\u4E09\u7EF4\u7A7A\u95F4\u4E2D\u8FDB\u884C\u53D8\u6362\u3002\u5B83\u51B3\u5B9A\u4E86\u5B50\u5143\u7D20\u7684\u53D8\u6362\u662F\u76F8\u5BF9\u4E8E\u7236\u5143\u7D20\u7684\u5E73\u9762\u8FDB\u884C\uFF08",paraId:1,tocIndex:4},{value:"flat",paraId:1,tocIndex:4},{value:"\uFF09\u8FD8\u662F\u76F8\u5BF9\u4E8E\u4E09\u7EF4\u7A7A\u95F4\u8FDB\u884C\uFF08",paraId:1,tocIndex:4},{value:"preserve-3d",paraId:1,tocIndex:4},{value:"\uFF09\u3002",paraId:1,tocIndex:4},{value:"flat",paraId:2,tocIndex:5},{value:"\uFF1A\u9ED8\u8BA4\u503C\u3002\u5B50\u5143\u7D20\u7684\u53D8\u6362\u662F\u76F8\u5BF9\u4E8E\u7236\u5143\u7D20\u7684\u5E73\u9762\u8FDB\u884C\u7684\uFF0C\u5373\u5B50\u5143\u7D20\u7684\u53D8\u6362\u4E0D\u4F1A\u5728\u4E09\u7EF4\u7A7A\u95F4\u4E2D\u8FDB\u884C\u3002",paraId:2,tocIndex:5},{value:"preserve-3d",paraId:2,tocIndex:5},{value:"\uFF1A\u5B50\u5143\u7D20\u7684\u53D8\u6362\u662F\u5728\u4E09\u7EF4\u7A7A\u95F4\u4E2D\u8FDB\u884C\u7684\uFF0C\u5373\u5B50\u5143\u7D20\u7684\u53D8\u6362\u4F1A\u4FDD\u7559\u4E09\u7EF4\u7A7A\u95F4\u4E2D\u7684\u6DF1\u5EA6\u5173\u7CFB\u3002",paraId:2,tocIndex:5},{value:"\u5047\u8BBE\u4F60\u6709\u4E00\u4E2A\u7236\u5143\u7D20\u548C\u4E00\u4E2A\u5B50\u5143\u7D20\uFF0C\u5E76\u4E14\u4F60\u5E0C\u671B\u5728\u4E09\u7EF4\u7A7A\u95F4\u4E2D\u5BF9\u5B50\u5143\u7D20\u8FDB\u884C\u53D8\u6362\uFF1A",paraId:3,tocIndex:6},{value:`<div class="parent">
  <div class="child"></div>
</div>
`,paraId:4,tocIndex:6},{value:`.parent {
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
}

.child {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50px;
  left: 50px;
  background-color: red;
  transform: rotateY(45deg);
}
`,paraId:5,tocIndex:6},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C",paraId:6,tocIndex:6},{value:".parent",paraId:6,tocIndex:6},{value:" \u5143\u7D20\u8BBE\u7F6E\u4E86 ",paraId:6,tocIndex:6},{value:"transform-style: preserve-3d",paraId:6,tocIndex:6},{value:"\uFF0C\u8FD9\u610F\u5473\u7740 ",paraId:6,tocIndex:6},{value:".child",paraId:6,tocIndex:6},{value:" \u5143\u7D20\u7684 ",paraId:6,tocIndex:6},{value:"rotateY(45deg)",paraId:6,tocIndex:6},{value:" \u53D8\u6362\u662F\u5728\u4E09\u7EF4\u7A7A\u95F4\u4E2D\u8FDB\u884C\u7684\u3002\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E ",paraId:6,tocIndex:6},{value:"transform-style: preserve-3d",paraId:6,tocIndex:6},{value:"\uFF0C",paraId:6,tocIndex:6},{value:".child",paraId:6,tocIndex:6},{value:" \u5143\u7D20\u7684\u53D8\u6362\u5C06\u76F8\u5BF9\u4E8E ",paraId:6,tocIndex:6},{value:".parent",paraId:6,tocIndex:6},{value:" \u5143\u7D20\u7684\u5E73\u9762\u8FDB\u884C\uFF0C\u6548\u679C\u4F1A\u6709\u6240\u4E0D\u540C\u3002",paraId:6,tocIndex:6},{value:"preserve-3d",paraId:7,tocIndex:7},{value:"\uFF1A\u5141\u8BB8\u5B50\u5143\u7D20\u5728\u4E09\u7EF4\u7A7A\u95F4\u4E2D\u8FDB\u884C\u53D8\u6362\uFF0C\u4FDD\u7559\u6DF1\u5EA6\u5173\u7CFB\u3002",paraId:7,tocIndex:7},{value:"flat",paraId:7,tocIndex:7},{value:"\uFF1A\u5B50\u5143\u7D20\u7684\u53D8\u6362\u662F\u76F8\u5BF9\u4E8E\u7236\u5143\u7D20\u7684\u5E73\u9762\u8FDB\u884C\u7684\uFF0C\u4E0D\u4F1A\u4FDD\u7559\u4E09\u7EF4\u7A7A\u95F4\u4E2D\u7684\u6DF1\u5EA6\u5173\u7CFB\u3002",paraId:7,tocIndex:7},{value:"3D \u53D8\u6362",paraId:8,tocIndex:8},{value:"\uFF1A\u5F53\u4F60\u9700\u8981\u5728\u4E09\u7EF4\u7A7A\u95F4\u4E2D\u5BF9\u5143\u7D20\u8FDB\u884C\u590D\u6742\u7684\u53D8\u6362\u65F6\uFF0C\u4F7F\u7528 ",paraId:8,tocIndex:8},{value:"transform-style: preserve-3d",paraId:8,tocIndex:8},{value:" \u53EF\u4EE5\u786E\u4FDD\u5B50\u5143\u7D20\u7684\u53D8\u6362\u5728\u4E09\u7EF4\u7A7A\u95F4\u4E2D\u6B63\u786E\u8FDB\u884C\u3002",paraId:8,tocIndex:8},{value:"\u5361\u7247\u7FFB\u8F6C\u6548\u679C",paraId:8,tocIndex:8},{value:"\uFF1A\u5728\u5B9E\u73B0\u5361\u7247\u7FFB\u8F6C\u6548\u679C\u65F6\uFF0C\u901A\u5E38\u4F1A\u4F7F\u7528 ",paraId:8,tocIndex:8},{value:"transform-style: preserve-3d",paraId:8,tocIndex:8},{value:" \u6765\u786E\u4FDD\u524D\u540E\u4E24\u9762\u7684\u7FFB\u8F6C\u6548\u679C\u5728\u4E09\u7EF4\u7A7A\u95F4\u4E2D\u6B63\u786E\u663E\u793A\u3002",paraId:8,tocIndex:8},{value:"transform-style: preserve-3d",paraId:9,tocIndex:9},{value:" \u662F\u4E00\u4E2A\u91CD\u8981\u7684 CSS \u5C5E\u6027\uFF0C\u7528\u4E8E\u63A7\u5236\u5143\u7D20\u7684\u5B50\u5143\u7D20\u662F\u5426\u5728\u4E09\u7EF4\u7A7A\u95F4\u4E2D\u8FDB\u884C\u53D8\u6362\u3002\u5B83\u5BF9\u4E8E\u5B9E\u73B0\u590D\u6742\u7684\u4E09\u7EF4\u53D8\u6362\u6548\u679C\u975E\u5E38\u6709\u7528\uFF0C\u7279\u522B\u662F\u5728\u9700\u8981\u4FDD\u7559\u6DF1\u5EA6\u5173\u7CFB\u7684\u60C5\u51B5\u4E0B\u3002",paraId:9,tocIndex:9},{value:"backface-visibility: hidden",paraId:10,tocIndex:10},{value:" \u662F CSS \u4E2D\u7684\u4E00\u4E2A\u5C5E\u6027\uFF0C\u7528\u4E8E\u63A7\u5236\u5143\u7D20\u7684\u80CC\u9762\u5728\u4E09\u7EF4\u53D8\u6362\u65F6\u662F\u5426\u53EF\u89C1\u3002\u8FD9\u4E2A\u5C5E\u6027\u901A\u5E38\u7528\u4E8E\u5B9E\u73B0\u4E00\u4E9B\u89C6\u89C9\u6548\u679C\uFF0C\u6BD4\u5982\u5361\u7247\u7FFB\u8F6C\u6548\u679C\u3002",paraId:10,tocIndex:10},{value:"visible",paraId:11,tocIndex:11},{value:"\uFF1A\u9ED8\u8BA4\u503C\u3002\u5143\u7D20\u7684\u80CC\u9762\u5728\u4E09\u7EF4\u53D8\u6362\u65F6\u662F\u53EF\u89C1\u7684\u3002",paraId:11,tocIndex:11},{value:"hidden",paraId:11,tocIndex:11},{value:"\uFF1A\u5143\u7D20\u7684\u80CC\u9762\u5728\u4E09\u7EF4\u53D8\u6362\u65F6\u662F\u4E0D\u53EF\u89C1\u7684\u3002",paraId:11,tocIndex:11},{value:"\u5047\u8BBE\u4F60\u6709\u4E00\u4E2A\u5361\u7247\uFF0C\u6B63\u9762\u548C\u80CC\u9762\u5206\u522B\u6709\u4E24\u4E2A\u4E0D\u540C\u7684\u5185\u5BB9\uFF0C\u4F60\u5E0C\u671B\u5728\u5361\u7247\u7FFB\u8F6C\u65F6\u53EA\u663E\u793A\u6B63\u9762\u6216\u80CC\u9762\uFF1A",paraId:12,tocIndex:12},{value:`<div class="card">
  <div class="front">\u6B63\u9762\u5185\u5BB9</div>
  <div class="back">\u80CC\u9762\u5185\u5BB9</div>
</div>
`,paraId:13,tocIndex:12},{value:`.card {
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card div {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
}

.front {
  background-color: red;
}

.back {
  background-color: blue;
  transform: rotateY(180deg);
}

.card.flipped {
  transform: rotateY(180deg);
}
`,paraId:14,tocIndex:12},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C",paraId:15,tocIndex:12},{value:".card",paraId:15,tocIndex:12},{value:" \u5143\u7D20\u5305\u542B\u4E24\u4E2A\u5B50\u5143\u7D20\uFF1A",paraId:15,tocIndex:12},{value:".front",paraId:15,tocIndex:12},{value:" \u548C ",paraId:15,tocIndex:12},{value:".back",paraId:15,tocIndex:12},{value:"\u3002",paraId:15,tocIndex:12},{value:".front",paraId:15,tocIndex:12},{value:" \u662F\u5361\u7247\u7684\u6B63\u9762\uFF0C",paraId:15,tocIndex:12},{value:".back",paraId:15,tocIndex:12},{value:" \u662F\u5361\u7247\u7684\u80CC\u9762\u3002\u901A\u8FC7\u8BBE\u7F6E ",paraId:15,tocIndex:12},{value:"backface-visibility: hidden",paraId:15,tocIndex:12},{value:"\uFF0C\u6211\u4EEC\u786E\u4FDD\u5728\u5361\u7247\u7FFB\u8F6C\u65F6\uFF0C\u6B63\u9762\u548C\u80CC\u9762\u7684\u5185\u5BB9\u4E0D\u4F1A\u4E92\u76F8\u5E72\u6270\u3002",paraId:15,tocIndex:12},{value:"visible",paraId:16,tocIndex:13},{value:"\uFF1A\u5143\u7D20\u7684\u80CC\u9762\u5728\u4E09\u7EF4\u53D8\u6362\u65F6\u662F\u53EF\u89C1\u7684\u3002",paraId:16,tocIndex:13},{value:"hidden",paraId:16,tocIndex:13},{value:"\uFF1A\u5143\u7D20\u7684\u80CC\u9762\u5728\u4E09\u7EF4\u53D8\u6362\u65F6\u662F\u4E0D\u53EF\u89C1\u7684\u3002",paraId:16,tocIndex:13},{value:"\u5361\u7247\u7FFB\u8F6C\u6548\u679C",paraId:17,tocIndex:14},{value:"\uFF1A\u5728\u5B9E\u73B0\u5361\u7247\u7FFB\u8F6C\u6548\u679C\u65F6\uFF0C\u901A\u5E38\u4F1A\u4F7F\u7528 ",paraId:17,tocIndex:14},{value:"backface-visibility: hidden",paraId:17,tocIndex:14},{value:" \u6765\u786E\u4FDD\u6B63\u9762\u548C\u80CC\u9762\u7684\u5185\u5BB9\u5728\u7FFB\u8F6C\u65F6\u4E0D\u4F1A\u4E92\u76F8\u5E72\u6270\u3002",paraId:17,tocIndex:14},{value:"3D \u53D8\u6362",paraId:17,tocIndex:14},{value:"\uFF1A\u5728\u590D\u6742\u7684 3D \u53D8\u6362\u4E2D\uFF0C\u4F7F\u7528 ",paraId:17,tocIndex:14},{value:"backface-visibility: hidden",paraId:17,tocIndex:14},{value:" \u53EF\u4EE5\u907F\u514D\u80CC\u9762\u5185\u5BB9\u5728\u4E0D\u5E94\u8BE5\u663E\u793A\u7684\u65F6\u5019\u51FA\u73B0\u3002",paraId:17,tocIndex:14},{value:"backface-visibility: hidden",paraId:18,tocIndex:15},{value:" \u662F\u4E00\u4E2A\u975E\u5E38\u6709\u7528\u7684 CSS \u5C5E\u6027\uFF0C\u7279\u522B\u662F\u5728\u5B9E\u73B0\u5361\u7247\u7FFB\u8F6C\u6548\u679C\u65F6\u3002\u5B83\u786E\u4FDD\u5143\u7D20\u7684\u80CC\u9762\u5728\u4E09\u7EF4\u53D8\u6362\u65F6\u4E0D\u53EF\u89C1\uFF0C\u4ECE\u800C\u907F\u514D\u4E86\u4E00\u4E9B\u89C6\u89C9\u4E0A\u7684\u5E72\u6270\u3002",paraId:18,tocIndex:15}]},93026:function(d,n,a){a.r(n),a.d(n,{texts:function(){return e}});var t=a(69195);const e=[{value:"\u535A\u5BA2\u4E3B\u8981\u5199\u7684\u662F\u6280\u672F\u6587\u7AE0,\u6682\u65F6\u4E0D\u66F4\u65B0\u8F6C\u8F7D\u7684\u3002",paraId:0,tocIndex:0},{value:"\u7528 html \u548C css \u7B80\u5355\u5B9E\u73B0\u5361\u7247\u53CD\u8F6C\u6548\u679C",paraId:1,tocIndex:1},{value:"javascript \u539F\u751F+django \u5B9E\u73B0\u6587\u4EF6\u65AD\u70B9\u4E0A\u4F20",paraId:2,tocIndex:1},{value:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F JSAPI \u4E0B\u5355\u652F\u4ED8 PHP \u524D\u540E\u7AEF\u6559\u7A0B",paraId:3,tocIndex:1}]},51446:function(d,n,a){a.r(n),a.d(n,{texts:function(){return e}});var t=a(68537);const e=[{value:`
    `,paraId:0},{value:`
        `,paraId:0},{value:`
            `,paraId:0},{value:`
                \u{1F4F1}
            `,paraId:0},{value:`
            `,paraId:0},{value:`
            `,paraId:0},{value:"\u4F7F\u7528\u73B0\u4EE3\u6280\u672F\u6808\u5F00\u53D1\u8DE8\u5E73\u53F0\u79FB\u52A8\u5E94\u7528\uFF0C\u63D0\u4F9B\u6D41\u7545\u7684\u7528\u6237\u4F53\u9A8C\u3002",paraId:1,tocIndex:1},{value:`
            `,paraId:0},{value:`
                `,paraId:0},{value:"\u4E86\u89E3\u66F4\u591A",paraId:0},{value:`
                `,paraId:0},{value:"2023-10-15",paraId:0},{value:`
            `,paraId:0},{value:`
        `,paraId:0},{value:`
        `,paraId:0},{value:`
            `,paraId:0},{value:`
                \u{1F310}
            `,paraId:0},{value:`
            `,paraId:0},{value:`
            `,paraId:0},{value:"\u521B\u5EFA\u54CD\u5E94\u5F0F\u7F51\u7AD9\uFF0C\u786E\u4FDD\u5728\u5404\u79CD\u8BBE\u5907\u4E0A\u90FD\u6709\u51FA\u8272\u7684\u663E\u793A\u6548\u679C\u3002",paraId:2,tocIndex:2},{value:`
            `,paraId:0},{value:`
                `,paraId:0},{value:"\u4E86\u89E3\u66F4\u591A",paraId:0},{value:`
                `,paraId:0},{value:"2023-09-28",paraId:0},{value:`
            `,paraId:0},{value:`
        `,paraId:0},{value:`
        `,paraId:0},{value:`
            `,paraId:0},{value:`
                \u{1F4CA}
            `,paraId:0},{value:`
            `,paraId:0},{value:`
            `,paraId:0},{value:"\u5229\u7528\u5927\u6570\u636E\u6280\u672F\u63D0\u53D6\u6709\u4EF7\u503C\u4FE1\u606F\uFF0C\u52A9\u529B\u4E1A\u52A1\u51B3\u7B56\u3002",paraId:3,tocIndex:3},{value:`
            `,paraId:0},{value:`
                `,paraId:0},{value:"\u4E86\u89E3\u66F4\u591A",paraId:0},{value:`
                `,paraId:0},{value:"2023-11-05",paraId:0},{value:`
            `,paraId:0},{value:`
        `,paraId:0},{value:`
        `,paraId:0},{value:`
            `,paraId:0},{value:`
                \u{1F512}
            `,paraId:0},{value:`
            `,paraId:0},{value:`
            `,paraId:0},{value:"\u4FDD\u62A4\u60A8\u7684\u6570\u5B57\u8D44\u4EA7\uFF0C\u9632\u6B62\u6570\u636E\u6CC4\u9732\u548C\u7F51\u7EDC\u653B\u51FB\u3002",paraId:4,tocIndex:4},{value:`
            `,paraId:0},{value:`
                `,paraId:0},{value:"\u4E86\u89E3\u66F4\u591A",paraId:0},{value:`
                `,paraId:0},{value:"2023-10-30",paraId:0},{value:`
            `,paraId:0},{value:`
        `,paraId:0},{value:`
        `,paraId:0},{value:`
            `,paraId:0},{value:`
                \u2601\uFE0F
            `,paraId:0},{value:`
            `,paraId:0},{value:`
            `,paraId:0},{value:"\u63D0\u4F9B\u53EF\u6269\u5C55\u7684\u4E91\u57FA\u7840\u8BBE\u65BD\uFF0C\u6EE1\u8DB3\u4F01\u4E1A\u4E0D\u540C\u89C4\u6A21\u7684\u9700\u6C42\u3002",paraId:5,tocIndex:5},{value:`
            `,paraId:0},{value:`
                `,paraId:0},{value:"\u4E86\u89E3\u66F4\u591A",paraId:0},{value:`
                `,paraId:0},{value:"2023-11-12",paraId:0},{value:`
            `,paraId:0},{value:`
        `,paraId:0},{value:`
    `,paraId:0},{value:`
    `,paraId:0},{value:`
        `,paraId:0},{value:`
        `,paraId:0},{value:`
        `,paraId:0},{value:`
        `,paraId:0},{value:`
        `,paraId:0},{value:`
        `,paraId:0},{value:`
        `,paraId:0},{value:`
        `,paraId:0},{value:`
        `,paraId:0},{value:`
                `,paraId:0},{value:`
                `,paraId:0},{value:`
                           `,paraId:0},{value:`
                `,paraId:0},{value:`
                `,paraId:0},{value:`
                `,paraId:0},{value:`
                `,paraId:0},{value:`
                `,paraId:0},{value:`
                `,paraId:0},{value:`
                `,paraId:0},{value:`
                `,paraId:0},{value:`
               `,paraId:0},{value:`
                `,paraId:0},{value:`
                     `,paraId:0},{value:`
                `,paraId:0},{value:`
                `,paraId:0},{value:`
                `,paraId:0},{value:`
                `,paraId:0},{value:`
                `,paraId:0},{value:`
                `,paraId:0},{value:`
                `,paraId:0},{value:`
                `,paraId:0},{value:`
                `,paraId:0},{value:`
                `,paraId:0},{value:`
             `,paraId:0},{value:`
    `,paraId:0}]},22280:function(d,n,a){a.r(n),a.d(n,{texts:function(){return e}});var t=a(93882);const e=[{value:"https://metc.aust.edu.cn/",paraId:0,tocIndex:1},{value:"\u5B89\u5FBD\u7406\u5DE5\u5927\u5B66\u73B0\u4EE3\u6559\u80B2\u6280\u672F\u90E8\u95E8\u7684\u5B98\u7F51\uFF0C\u7528\u4E8E\u5C55\u793A\u90E8\u95E8\u5DE5\u4F5C\u52A8\u6001\uFF0C\u5B66\u751F\u95EE\u9898\u89E3\u51B3\u65B9\u5F0F\u7B49\u3002",paraId:1,tocIndex:2},{value:`
    `,paraId:2},{value:`
    `,paraId:2},{value:`
    `,paraId:2},{value:`
    `,paraId:2},{value:`
     `,paraId:2},{value:`
    `,paraId:2},{value:"\u4F7F\u7528\u4F4E\u4EE3\u7801\u5E73\u53F0\u548C html\uFF0Ccss\uFF0Cjs \u72EC\u7ACB\u5B8C\u6210\u3002",paraId:3,tocIndex:4}]},61488:function(d,n,a){a.r(n),a.d(n,{texts:function(){return e}});var t=a(69692);const e=[{value:"\u4E00\u5F00\u59CB\u662F\u524D\u540C\u4E8B\u7528 uniapp \u5F00\u53D1\u7684\uFF0C\u4F46\u662F\u8FD0\u8425\u4E00\u76F4\u51FA\u73B0\u610F\u60F3\u4E0D\u5230\u7684 bug\uFF0C\u6700\u540E\u7528 Android \u91CD\u6784\u4E86\uFF0C\u5E76\u4E14\u6839\u636E\u4F9B\u5E94\u5546\u63D0\u4F9B\u7684\u5404\u79CD Sdk \u5B9E\u73B0\u4E86\u786C\u4EF6\u4E4B\u95F4\u7684\u5BF9\u63A5\u3002",paraId:0,tocIndex:3}]},29790:function(d,n,a){a.r(n),a.d(n,{texts:function(){return e}});var t=a(41496);const e=[{value:"https://www.bimoai.com/console/",paraId:0,tocIndex:1},{value:"\u7B14\u58A8 AI \u662F\u4E00\u4E2A\u96C6\u6210\u4E86\u591A\u79CD AI \u73A9\u6CD5\u7684\u5DE5\u5177\u7F51\u7AD9\uFF0C\u6DB5\u76D6\u4E86 AI \u6587\u751F\u56FE\u3001AI \u56FE\u751F\u56FE\u3001AI \u6362\u8138\u7B49\u591A\u79CD\u529F\u80FD\uFF0C\u4E3A\u7528\u6237\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5168\u65B9\u4F4D\u7684 AI \u521B\u4F5C\u5E73\u53F0\u3002",paraId:1,tocIndex:2},{value:`
    `,paraId:2},{value:`
    `,paraId:2},{value:`
    `,paraId:2},{value:`
    `,paraId:2},{value:"\u4F7F\u7528 vue \u548C\u540C\u4E8B\u5408\u4F5C\u5B8C\u6210\u3002",paraId:3,tocIndex:4}]},45263:function(d,n,a){a.r(n),a.d(n,{texts:function(){return e}});var t=a(97023);const e=[{value:"\u4E00\u5F00\u59CB\u7528 uniapp \u5F00\u53D1\u7684 App\uFF0C\u4F46\u662F\u8FD0\u8425\u6CA1\u6709\u51FA\u4EC0\u4E48\u95EE\u9898\uFF0C\u5C31\u6CA1\u6709\u7528\u539F\u751F\u91CD\u6784\uFF0C\u5728\u5F00\u53D1\u8FD9\u4E2A App \u7684\u8FC7\u7A0B\u6211\u505A\u4E86\u5F88\u591A uniapp \u539F\u751F\u63D2\u4EF6\uFF0C\u5982\u53EF\u4EE5\u8BA9 uniapp \u8FDE\u63A5\u6253\u5370\u673A\uFF0C\u4F7F\u7528\u539F\u751F\u76F8\u673A\u7B49\u3002",paraId:0,tocIndex:3},{value:`
 `,paraId:1}]},45380:function(d,n,a){a.r(n),a.d(n,{texts:function(){return e}});var t=a(96118);const e=[{value:"http://www.bimoai.com",paraId:0,tocIndex:1},{value:"\u7B14\u58A8\u5B98\u7F51\u662F\u4E00\u4E2A\u9759\u6001\u7684\u4F01\u4E1A\u5B98\u7F51\uFF0C\u65E8\u5728\u5411\u516C\u4F17\u5C55\u793A\u4F01\u4E1A\u7684\u6982\u51B5\u3001\u4E1A\u52A1\u8303\u56F4\u548C\u6838\u5FC3\u80FD\u529B\u3002\u8BE5\u7F51\u7AD9\u5DF2\u5B8C\u7F8E\u9002\u914D\u79FB\u52A8\u7AEF\u548C PC \u7AEF\uFF0C\u786E\u4FDD\u5728\u4E0D\u540C\u8BBE\u5907\u4E0A\u90FD\u80FD\u63D0\u4F9B\u4E00\u81F4\u4E14\u4F18\u8D28\u7684\u7528\u6237\u4F53\u9A8C\u3002",paraId:1,tocIndex:2},{value:`
    `,paraId:2},{value:`
    `,paraId:2},{value:`
    `,paraId:2},{value:`
    `,paraId:2},{value:"\u7528 React \u548C ScrollReveal \u52A8\u753B\u5E93\uFF0C\u72EC\u7ACB\u5B8C\u6210\u3002",paraId:3,tocIndex:4}]},84500:function(d,n,a){a.r(n),a.d(n,{texts:function(){return e}});var t=a(82697);const e=[{value:"http://zhuode.x2.ink/",paraId:0,tocIndex:1},{value:"\u8FD9\u662F\u4E00\u4E2A\u516C\u53F8\u7684\u53CC\u8BED\u95E8\u6237\u7F51\u7AD9\uFF0C\u4E3B\u8981\u7528\u4E8E\u5C55\u793A\u516C\u53F8\u7684\u4EA7\u54C1\u3001\u53D1\u5E03\u65B0\u95FB\u52A8\u6001\u3001\u53D1\u5E03\u62DB\u8058\u4FE1\u606F\uFF0C\u5E76\u5BF9\u516C\u53F8\u7684\u6982\u51B5\u8FDB\u884C\u4ECB\u7ECD\uFF0C\u5305\u62EC\u516C\u53F8\u53D1\u5C55\u5386\u7A0B\u3001\u6280\u672F\u4EBA\u5458\u3001\u5DE5\u5382\u4ECB\u7ECD\u3001\u83B7\u5F97\u7684\u4E13\u5229\u548C\u8363\u8A89\u7B49\u76F8\u5173\u8BC1\u4E66\u3002\u8BE5\u9879\u76EE\u8FD8\u63D0\u4F9B\u4E86\u7BA1\u7406\u540E\u53F0\uFF0C\u7BA1\u7406\u5458\u53EF\u4EE5\u5728\u540E\u53F0\u5BF9\u7F51\u7AD9\u5185\u5BB9\u8FDB\u884C\u7BA1\u7406\u3002",paraId:1,tocIndex:2},{value:`
    `,paraId:2},{value:`
    `,paraId:2},{value:`
    `,paraId:2},{value:`
    `,paraId:2},{value:"\u9879\u76EE\u6280\u672F\u6808\u662F Vue3+Element-plus+Django\uFF0C\u8FD9\u662F\u5927\u5B66\u671F\u95F4\u63A5\u7684\u5355\u5B50\uFF0C\u72EC\u7ACB\u5B8C\u6210\u524D\u540E\u7AEF\u6574\u4E2A\u7F51\u7AD9\u7684\u5F00\u53D1\u3002",paraId:3,tocIndex:4}]},94373:function(d,n,a){a.r(n),a.d(n,{texts:function(){return e}});var t=a(86176);const e=[{value:"\u81EA\u7136\u5802 AI \u5316\u5986\u5E08\u662F\u4E00\u6B3E\u96C6\u5408\u4E86\u591A\u79CD AI \u73A9\u6CD5\u7684\u5C0F\u7A0B\u5E8F\uFF0C\u5305\u62EC AI \u6362\u8138\u3001AI \u97F3\u4E50\u3001AI \u751F\u56FE\u7B49\u529F\u80FD\u3002\u7528\u6237\u53EF\u4EE5\u901A\u8FC7 AI \u5316\u5986\u5E08\u4E00\u952E\u751F\u6210\u5404\u79CD\u98CE\u683C\u7684\u7167\u7247\uFF0C\u4F53\u9A8C\u201C\u4F60\u672C\u6765\u5C31\u5F88\u7F8E\u201D\u7684\u72EC\u7279\u9B45\u529B\u3002",paraId:0,tocIndex:2},{value:`
    `,paraId:1},{value:`
    `,paraId:1},{value:`
    `,paraId:1},{value:`
    `,paraId:1},{value:"\u7528 uniapp \u505A\u7684\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF0C\u72EC\u7ACB\u5B8C\u6210\u3002",paraId:2,tocIndex:4}]},32009:function(d,n,a){a.r(n),a.d(n,{texts:function(){return e}});var t=a(21462);const e=[{value:"\u7531\u4E8E\u8FD9\u4E9B\u662F\u975E\u516C\u5F00\u9879\u76EE\uFF0C\u56E0\u6B64\u4E0D\u4FBF\u5C55\u793A\u9879\u76EE\u622A\u56FE\u3002",paraId:0,tocIndex:0},{value:"\u6280\u672F\u6846\u67B6",paraId:1,tocIndex:2},{value:"\uFF1AReact18\uFF0CArco-design",paraId:1,tocIndex:2},{value:"\u4F5C\u54C1\u4ECB\u7ECD",paraId:2,tocIndex:2},{value:"\uFF1A\u8FD9\u662F\u4E00\u4E2A\u52A0\u76DF\u5546\u7684\u540E\u53F0\uFF0C\u72EC\u7ACB\u5B8C\u6210\u5F00\u53D1\u3002\u6839\u636E\u52A0\u76DF\u5546\u6743\u9650\u52A8\u6001\u5C55\u793A\u8DEF\u7531\uFF0C\u6839\u636E\u8DEF\u7531\u53D8\u5316\u5C55\u793A\u6FC0\u6D3B\u83DC\u5355\u9879\u3002\u52A0\u76DF\u5546\u53EF\u4EE5\u5728\u91CC\u9762\u770B\u4E00\u4F53\u673A\u6570\u636E\uFF0C\u5E76\u4E14\u6839\u636E\u56FE\u8868\u67E5\u770B\u5B9E\u65F6\u6536\u76CA\u6570\u636E\u7B49\u7B49\u3002",paraId:2,tocIndex:2},{value:"\u6280\u672F\u6846\u67B6",paraId:3,tocIndex:3},{value:"\uFF1AReact18\uFF0CAnt Design",paraId:3,tocIndex:3},{value:"\u4F5C\u54C1\u4ECB\u7ECD",paraId:4,tocIndex:3},{value:"\uFF1A\u8FD9\u662F\u4E00\u4E2A\u516C\u53F8\u5185\u90E8\u7684\u7BA1\u7406\u5E73\u53F0\uFF0C\u63A5\u624B\u524D\u540C\u4E8B\u7684\u9879\u76EE\uFF0C\u4E3B\u8981\u67E5\u770B\u548C\u4FEE\u6539\u516C\u53F8\u5404\u79CD\u4EA7\u54C1\u6570\u636E\u7B49\u3002",paraId:4,tocIndex:3}]},78401:function(d,n,a){a.r(n),a.d(n,{texts:function(){return e}});var t=a(17022);const e=[{value:"\u4E00\u4E2A\u751F\u6210 AI \u7167\u7247\u7684\u5C0F\u7A0B\u5E8F\uFF0C\u5BF9\u63A5\u4E86\u5FAE\u4FE1\u652F\u4ED8\uFF0C\u5E76\u4E14\u7528\u6237\u53EF\u4EE5\u5728\u5C0F\u7A0B\u5E8F\u4E0A\u63D0\u4EA4\u6253\u5370\u8BA2\u5355\uFF0C\u7EBF\u4E0B\u6253\u5370\u3002",paraId:0,tocIndex:2},{value:`
    `,paraId:1},{value:`
    `,paraId:1},{value:`
    `,paraId:1},{value:`
    `,paraId:1},{value:"\u4F7F\u7528 uniapp \u72EC\u7ACB\u5F00\u53D1\u7684\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u3002",paraId:2,tocIndex:4}]},96200:function(d,n,a){a.r(n),a.d(n,{texts:function(){return e}});var t=a(1490);const e=[{value:"\u8FD9\u4E2A\u5C0F\u7A0B\u5E8F\u4E3A\u4E0A\u6D77\u4E2D\u5FC3\u63D0\u4F9B\u4E86\u4E24\u573A\u4E92\u52A8\u6D3B\u52A8\uFF0C\u5782\u76F4\u9A6C\u62C9\u677E&\u5171\u521B\u5927\u4F1A\u3002\u7528\u6237\u53EF\u4EE5\u5728\u5C0F\u7A0B\u5E8F\u4E0A\u4F20\u8138\u90E8\u6863\u6848\u7136\u540E\u901A\u8FC7 AI \u5236\u56FE\uFF0C\u6700\u540E\u7531\u5DE5\u4F5C\u4EBA\u5458\u5E2E\u52A9\u6253\u5370\u7167\u7247\u7ED9\u7528\u6237\u3002",paraId:0,tocIndex:2},{value:`
    `,paraId:1},{value:`
    `,paraId:1},{value:`
    `,paraId:1},{value:`
    `,paraId:1},{value:"\u7528 uniapp \u72EC\u7ACB\u5B8C\u6210\u7684\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u3002",paraId:2,tocIndex:4}]},54121:function(d,n,a){a.r(n),a.d(n,{texts:function(){return e}});var t=a(89462);const e=[{value:"\u767D\u86C7\u96C6\u5361\u662F\u81EA\u7136\u5802 AI \u5316\u5986\u5E08\u8054\u540D\u767D\u86C7 IP \u63A8\u51FA\u7684\u4E92\u52A8\u8425\u9500\u6D3B\u52A8\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u505A\u4EFB\u52A1\u83B7\u5F97\u62BD\u5361\u673A\u4F1A\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5C06\u5361\u7247\u8D60\u9001\u6216\u8005\u7D22\u8981\uFF0C\u5728\u62BD\u5230\u5B9A\u5236\u5361\u6216\u8005\u7075\u86C7\u7F8E\u8FD0\u72B6\u8FD8\u80FD\u5B9A\u5236\u81EA\u5DF1\u7684 AI \u5F62\u8C61\u3002",paraId:0,tocIndex:2},{value:`
    `,paraId:1},{value:`
    `,paraId:1},{value:`
    `,paraId:1},{value:`
    `,paraId:1},{value:`
    `,paraId:1},{value:`
    `,paraId:1},{value:`
    `,paraId:1},{value:`
    `,paraId:1},{value:"\u7528 uniapp \u505A\u7684\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF0C\u72EC\u7ACB\u5B8C\u6210\u3002",paraId:2,tocIndex:4}]},61591:function(d,n,a){a.r(n),a.d(n,{texts:function(){return e}});var t=a(83626);const e=[{value:"http://x2.ink/",paraId:0,tocIndex:1},{value:"\u5C0F\u4E8C\u4E91\u76D8\u662F\u56FD\u5185\u6700\u597D\u7528\u7684\u7F51\u76D8\u8D44\u6E90\u7BA1\u7406\u5DE5\u5177\u4E4B\u4E00\uFF0C\u5185\u7F6E\u6587\u4EF6\u4E91\u5B58\u50A8\u3001\u5206\u53D1\u3001\u5206\u4EAB\u3001\u4EA4\u6613\u7B49\u670D\u52A1\uFF0C\u8BA9\u60A8\u7684\u5E94\u7528\u3001\u89C6\u9891\u3001\u56FE\u7247\u3001\u538B\u7F29\u5305\u7B49\u6587\u4EF6\u968F\u65F6\u968F\u5730\u89E6\u624B\u53EF\u53CA\uFF0C\u66F4\u597D\u5730\u5206\u4EAB\u3002\u4E0E\u767E\u5EA6\u7F51\u76D8\u4E0D\u540C\uFF0C\u5C0F\u4E8C\u4E91\u76D8\u6CA1\u6709\u4E0B\u8F7D\u901F\u5EA6\u9650\u5236\uFF0C\u771F\u6B63\u5B9E\u73B0\u4E91\u52A0\u901F\uFF0C\u5177\u6709\u4F53\u9A8C\u4F73\u3001\u529F\u80FD\u5F3A\u3001\u64CD\u4F5C\u6613\u7684\u7279\u70B9\u3002\u6B64\u5916\uFF0C\u5C0F\u4E8C\u4E91\u76D8\u8FD8\u63D0\u4F9B\u591A\u6B3E\u76AE\u80A4\u9009\u62E9\uFF0C\u8BA9\u60A8\u7684\u8D44\u6E90\u5206\u4EAB\u754C\u9762\u66F4\u52A0\u65F6\u5C1A\u5927\u6C14\u3002\u5206\u4EAB\u94FE\u63A5\u77ED\u5C0F\u7CBE\u608D\uFF0C\u8FD8\u80FD\u81EA\u7531\u4F7F\u7528 API \u5B9A\u5236\u79C1\u4EBA\u8F6F\u4EF6\u5E93\u3002",paraId:1,tocIndex:2},{value:`
    `,paraId:2},{value:`
    `,paraId:2},{value:`
    `,paraId:2},{value:`
    `,paraId:2},{value:`
    `,paraId:2},{value:`
    `,paraId:2},{value:`
    `,paraId:2},{value:`
    `,paraId:2},{value:`
    `,paraId:2},{value:`
    `,paraId:2},{value:"\u4F7F\u7528 uniapp+unicloud \u5F00\u53D1\u7684 App\uFF0C\u8FD9\u4E5F\u7B97\u662F\u6211\u8FC4\u4ECA\u4E3A\u6B62\u4ED8\u51FA\u6700\u591A\u7CBE\u529B\u7684 App\uFF0C\u4F5C\u4E3A\u4E00\u4E2A\u5168\u6808\u5DE5\u7A0B\u5E08\u517C\u4EA7\u54C1\u7ECF\u7406\uFF0C\u72EC\u7ACB\u5B8C\u6210\u4E86\u5C0F\u4E8C\u4E91\u76D8\u4ECE\u6784\u601D\u3001\u5F00\u53D1\u3001\u4E0A\u7EBF\u5230\u8FD0\u8425\u7684\u6574\u4E2A\u8FC7\u7A0B\u3002\u5728\u4E00\u5E74\u5185\u521B\u9020\u4E86 8000+\u7684\u6536\u76CA\uFF0C\u8BC1\u660E\u4E86\u4EA7\u54C1\u7684\u5E02\u573A\u4EF7\u503C\u3002\u62C5\u4EFB\u5BA2\u670D\uFF0C\u6839\u636E\u7528\u6237\u7684\u9700\u6C42\u5BF9\u4EA7\u54C1\u8FDB\u884C\u66F4\u65B0\uFF0C\u786E\u4FDD\u4EA7\u54C1\u7684\u6301\u7EED\u6539\u8FDB\u548C\u7528\u6237\u6EE1\u610F\u5EA6\u3002",paraId:3,tocIndex:4}]},13015:function(d,n,a){a.r(n),a.d(n,{texts:function(){return e}});var t=a(95116);const e=[{value:"\u{1F9ED} \u6301\u7EED\u66F4\u65B0\u4E2D \u2014\u2014 \u6536\u5F55\u90A3\u4E9B\u771F\u6B63\u6709\u7528\u3001\u503C\u5F97\u6536\u85CF\u7684\u7F51\u7AD9",paraId:0,tocIndex:0},{value:`
\u{1F4A1} \u5206\u7C7B\u6E05\u6670\u3001\u56FE\u6587\u7B80\u6D01\uFF0C\u968F\u65F6\u67E5\u627E\u7075\u611F\u4E0E\u6548\u7387\u5DE5\u5177`,paraId:0,tocIndex:0},{value:"\u7F51\u7AD9",paraId:1,tocIndex:1},{value:"\u7B80\u4ECB",paraId:1,tocIndex:1},{value:"GitHub",paraId:1,tocIndex:1},{value:"\u5168\u7403\u6700\u5927\u7684\u5F00\u6E90\u793E\u533A\u4E0E\u4EE3\u7801\u6258\u7BA1\u5E73\u53F0",paraId:1,tocIndex:1},{value:"Stack Overflow",paraId:1,tocIndex:1},{value:"\u5F00\u53D1\u8005\u6280\u672F\u95EE\u7B54\u793E\u533A",paraId:1,tocIndex:1},{value:"MDN Web Docs",paraId:1,tocIndex:1},{value:"\u524D\u7AEF\u5F00\u53D1\u6587\u6863\u6743\u5A01\u6765\u6E90",paraId:1,tocIndex:1},{value:"DevDocs.io",paraId:1,tocIndex:1},{value:"\u805A\u5408\u5404\u7C7B\u7F16\u7A0B\u8BED\u8A00/API \u7684\u79BB\u7EBF\u6587\u6863\u5DE5\u5177",paraId:1,tocIndex:1},{value:"Regex101",paraId:1,tocIndex:1},{value:"\u6B63\u5219\u8868\u8FBE\u5F0F\u5B9E\u65F6\u6D4B\u8BD5\u4E0E\u89E3\u91CA\u7F51\u7AD9",paraId:1,tocIndex:1},{value:"\u7F51\u7AD9",paraId:2,tocIndex:2},{value:"\u7B80\u4ECB",paraId:2,tocIndex:2},{value:"Dribbble",paraId:2,tocIndex:2},{value:"\u5168\u7403\u8BBE\u8BA1\u5E08\u4F5C\u54C1\u5C55\u793A\u4E0E\u7075\u611F\u793E\u533A",paraId:2,tocIndex:2},{value:"Figma Community",paraId:2,tocIndex:2},{value:"\u5404\u7C7B\u8BBE\u8BA1\u6A21\u677F\u4E0E UI \u7EC4\u4EF6\u8D44\u6E90",paraId:2,tocIndex:2},{value:"Undraw",paraId:2,tocIndex:2},{value:"\u514D\u8D39\u3001\u53EF\u81EA\u5B9A\u4E49\u989C\u8272\u7684\u63D2\u753B\u5E93",paraId:2,tocIndex:2},{value:"Coolors",paraId:2,tocIndex:2},{value:"\u4E00\u952E\u751F\u6210\u914D\u8272\u65B9\u6848\u7684\u7F51\u7AD9",paraId:2,tocIndex:2},{value:"RemixIcon",paraId:2,tocIndex:2},{value:"\u514D\u8D39\u56FE\u6807\u5E93\uFF0CSVG \u652F\u6301\u4F18\u79C0",paraId:2,tocIndex:2},{value:"\u7F51\u7AD9",paraId:3,tocIndex:3},{value:"\u7B80\u4ECB",paraId:3,tocIndex:3},{value:"W3Schools",paraId:3,tocIndex:3},{value:"Web \u6280\u672F\u57FA\u7840\u5B66\u4E60\u7F51\u7AD9",paraId:3,tocIndex:3},{value:"FreeCodeCamp",paraId:3,tocIndex:3},{value:"\u514D\u8D39\u7F16\u7A0B\u8BFE\u7A0B\u5E73\u53F0",paraId:3,tocIndex:3},{value:"Coursera",paraId:3,tocIndex:3},{value:"\u5168\u7403\u5927\u5B66\u516C\u5F00\u8BFE\u5E73\u53F0",paraId:3,tocIndex:3},{value:"Notion AI",paraId:3,tocIndex:3},{value:"\u8BB0\u5F55\u4E0E\u601D\u8003\u7684\u8D85\u7EA7\u7B14\u8BB0\u5DE5\u5177",paraId:3,tocIndex:3},{value:"ChatGPT",paraId:3,tocIndex:3},{value:"\u667A\u80FD\u95EE\u7B54\u4E0E\u5B66\u4E60\u52A9\u624B",paraId:3,tocIndex:3},{value:"\u7F51\u7AD9",paraId:4,tocIndex:4},{value:"\u7B80\u4ECB",paraId:4,tocIndex:4},{value:"TinyPNG",paraId:4,tocIndex:4},{value:"\u667A\u80FD\u538B\u7F29 PNG/JPG \u56FE\u7247",paraId:4,tocIndex:4},{value:"Remove.bg",paraId:4,tocIndex:4},{value:"\u81EA\u52A8\u53BB\u9664\u56FE\u7247\u80CC\u666F",paraId:4,tocIndex:4},{value:"123apps",paraId:4,tocIndex:4},{value:"\u5728\u7EBF\u97F3\u9891\u3001\u89C6\u9891\u3001PDF \u5DE5\u5177\u96C6\u5408",paraId:4,tocIndex:4},{value:"IlovePDF",paraId:4,tocIndex:4},{value:"PDF \u7F16\u8F91\u4E0E\u8F6C\u6362\u5DE5\u5177\u96C6",paraId:4,tocIndex:4},{value:"Canva",paraId:4,tocIndex:4},{value:"\u5728\u7EBF\u8BBE\u8BA1\u5DE5\u5177\uFF0C\u9002\u5408\u5FEB\u901F\u5236\u4F5C\u5C01\u9762\u4E0E\u56FE\u6587",paraId:4,tocIndex:4},{value:"\u7F51\u7AD9",paraId:5,tocIndex:5},{value:"\u7B80\u4ECB",paraId:5,tocIndex:5},{value:"\u77E5\u4E4E",paraId:5,tocIndex:5},{value:"\u77E5\u8BC6\u5206\u4EAB\u4E0E\u95EE\u7B54\u793E\u533A",paraId:5,tocIndex:5},{value:"Medium",paraId:5,tocIndex:5},{value:"\u5168\u7403\u9AD8\u8D28\u91CF\u6280\u672F\u4E0E\u89C2\u70B9\u535A\u5BA2",paraId:5,tocIndex:5},{value:"\u5C11\u6570\u6D3E",paraId:5,tocIndex:5},{value:"\u805A\u7126\u6548\u7387\u5DE5\u5177\u4E0E\u751F\u6D3B\u65B9\u5F0F",paraId:5,tocIndex:5},{value:"\u6398\u91D1",paraId:5,tocIndex:5},{value:"\u4E2D\u56FD\u5F00\u53D1\u8005\u793E\u533A\u4E0E\u5B66\u4E60\u5E73\u53F0",paraId:5,tocIndex:5},{value:"CSDN",paraId:5,tocIndex:5},{value:"\u6280\u672F\u6587\u7AE0\u4E0E\u6559\u7A0B\u8D44\u6E90\u7F51\u7AD9",paraId:5,tocIndex:5},{value:"\u7F51\u7AD9",paraId:6,tocIndex:6},{value:"\u7B80\u4ECB",paraId:6,tocIndex:6},{value:"Bilibili",paraId:6,tocIndex:6},{value:"\u4E8C\u6B21\u5143\u4E0E\u77E5\u8BC6\u7C7B\u89C6\u9891\u793E\u533A",paraId:6,tocIndex:6},{value:"Pixabay",paraId:6,tocIndex:6},{value:"\u514D\u8D39\u9AD8\u8D28\u91CF\u56FE\u7247\u4E0E\u89C6\u9891\u7D20\u6750",paraId:6,tocIndex:6},{value:"Mixkit",paraId:6,tocIndex:6},{value:"\u514D\u8D39\u53EF\u5546\u7528\u89C6\u9891\u7247\u6BB5\u4E0E\u97F3\u4E50\u7D20\u6750",paraId:6,tocIndex:6},{value:"MyInstants",paraId:6,tocIndex:6},{value:"\u97F3\u6548\u6309\u94AE\u5408\u96C6\uFF08\u8D85\u597D\u73A9 \u{1F606}\uFF09",paraId:6,tocIndex:6},{value:"Radio Garden",paraId:6,tocIndex:6},{value:"\u5168\u7403\u7535\u53F0\u5730\u56FE\u5F0F\u63A2\u7D22\u7F51\u7AD9",paraId:6,tocIndex:6},{value:"\u65E5\u671F",paraId:7,tocIndex:7},{value:"\u66F4\u65B0\u5185\u5BB9",paraId:7,tocIndex:7},{value:"2025-10-26",paraId:7,tocIndex:7},{value:"\u521B\u5EFA\u6587\u6863\uFF0C\u6DFB\u52A0\u5F00\u53D1\u3001\u8BBE\u8BA1\u3001\u5B66\u4E60\u7C7B\u7F51\u7AD9",paraId:7,tocIndex:7},{value:"2025-11-02",paraId:7,tocIndex:7},{value:"\u65B0\u589E\u5DE5\u5177\u4E0E\u5A31\u4E50\u7C7B\u6536\u85CF",paraId:7,tocIndex:7},{value:"\u{1F4AC} \u5EFA\u8BAE\uFF1A",paraId:8,tocIndex:8},{value:"\u6536\u85CF\u65F6\u5199\u4E0B\u4F60\u4E3A\u4EC0\u4E48\u559C\u6B22\u8FD9\u4E2A\u7F51\u7AD9\uFF08\u65B9\u4FBF\u65E5\u540E\u56DE\u987E\uFF09",paraId:9,tocIndex:8},{value:"\u53EF\u4EE5\u7528\u6807\u7B7E\u7CFB\u7EDF\uFF08#\u5DE5\u5177 #\u8BBE\u8BA1 #\u5B66\u4E60\uFF09\u505A\u5FEB\u901F\u68C0\u7D22",paraId:9,tocIndex:8},{value:"\u5982\u679C\u914D\u5408 GitHub Pages \u6216 Notion\uFF0C\u53EF\u4EE5\u751F\u6210\u5728\u7EBF\u5BFC\u822A\u9875 \u2728",paraId:9,tocIndex:8},{value:"\u{1F9E9} ",paraId:10,tocIndex:8},{value:"\u4E0B\u4E00\u6B65\u8BA1\u5212\uFF1A",paraId:10,tocIndex:8},{value:" \u589E\u52A0\u201CAI \u5DE5\u5177\u201D\u4E13\u680F",paraId:11,tocIndex:8},{value:" \u6BCF\u6708\u66F4\u65B0\u4E00\u6B21\u63A8\u8350",paraId:11,tocIndex:8},{value:" \u52A0\u5165\u622A\u56FE\u5C55\u793A\u4E0E\u7F51\u7AD9 favicon",paraId:11,tocIndex:8}]},93963:function(d,n,a){a.r(n),a.d(n,{texts:function(){return e}});var t=a(36793);const e=[{value:"\u5C0F\u5B66\u9636\u6BB5",paraId:0,tocIndex:1},{value:"\uFF1A",paraId:0,tocIndex:1},{value:"\u8FD8\u662F\u4E2A\u4EC0\u4E48\u90FD\u4E0D\u61C2\u7684\u5C0F\u5B66\u751F \u{1F921}\u3002",paraId:1,tocIndex:1},{value:"\u521D\u4E2D\u9636\u6BB5",paraId:2,tocIndex:1},{value:"\uFF1A",paraId:2,tocIndex:1},{value:"\u521D\u4E8C\u4E0B\u5B66\u671F\u624D\u62E5\u6709\u4E86\u667A\u80FD\u624B\u673A \u{1F605}\uFF0C\u548C\u5927\u90E8\u5206\u4EBA\u4E00\u6837\uFF0C\u559C\u6B22\u73A9 QQ\uFF0C\u5E76\u4E14\u52A0\u4E86\u5F88\u591A QQ \u7FA4\u3002",paraId:3,tocIndex:1},{value:"\u4E00\u6B21\u5076\u7136\u7684\u673A\u4F1A\uFF0C\u8FDB\u5165\u4E86\u4E00\u4E2A\u5206\u4EAB\u7834\u89E3\u8F6F\u4EF6\u7684\u7FA4\uFF0C\u4E8E\u662F\u5C31\u5BF9\u6316\u6398\u7834\u89E3\u8F6F\u4EF6\u548C\u4E2A\u4EBA\u5F00\u53D1\u7684 App \u4EA7\u751F\u4E86\u6D53\u539A\u7684\u5174\u8DA3 \u{1F60D}\u3002",paraId:3,tocIndex:1},{value:"\u540E\u6765\u521B\u5EFA\u4E86\u81EA\u5DF1\u7684\u8F6F\u4EF6\u5206\u4EAB\u7FA4\uFF0C\u6709\u4E00\u5343\u591A\u4EBA \u{1F60E}\uFF0C\u53C8\u662F\u4E00\u6B21\u5076\u7136\u7684\u673A\u4F1A\uFF0C\u63A5\u89E6\u4E86\u846B\u82A6\u4FA0\uFF08\u547D\u8FD0\u7684\u8F6C\u6298\u70B9\uFF09\u3002",paraId:3,tocIndex:1},{value:"\u846B\u82A6\u4FA0\u4E0A\u9762\u6709\u5F88\u591A\u6C11\u95F4\u5927\u795E\uFF0C\u5728\u793E\u533A\u5206\u4EAB\u7834\u89E3\u8F6F\u4EF6\uFF0C\u548C\u81EA\u5DF1\u5F00\u53D1\u7684 App\uFF0C\u6211\u90A3\u6BB5\u65F6\u95F4\u8FD8\u53EA\u662F\u8F6F\u4EF6\u7684\u642C\u8FD0\u5DE5\u3002",paraId:3,tocIndex:1},{value:"\u5728\u846B\u82A6\u4FA0\u793E\u533A\u51B2\u6D6A\u7684\u65F6\u5019\u5076\u7136\u53D1\u73B0\u4E00\u4E2A\u6C11\u95F4\u5927\u795E\u5728\u6559\u5C0F\u767D\u5982\u4F55\u505A\u8F6F\u4EF6\uFF0C\u90A3\u65F6\u5019\u6211\u89C9\u5F97\u4EC5\u4EC5\u505A\u4E2A\u8F6F\u4EF6\u642C\u8FD0\u5DE5\u4E0D\u662F\u6211\u7684\u76EE\u6807\uFF0C\u6211\u4E5F\u60F3\u5F00\u53D1\u4E00\u4E2A\u5C5E\u4E8E\u81EA\u5DF1\u7684\u8F6F\u4EF6",paraId:3,tocIndex:1},{value:"\u4E00\u5F00\u59CB\u8BA4\u4E3A App \u5FC5\u987B\u6709\u7535\u8111\u624D\u80FD\u505A\uFF0C\u5F53\u65F6\u6CA1\u90A3\u6761\u4EF6\uFF0C\u4F46\u662F\u6211\u53D1\u73B0\u793E\u533A\u4E0A\u5F88\u591A\u4EBA\u90FD\u662F\u7528 AIDE \u548C iApp \u505A\u7684\u8F6F\u4EF6\uFF0C\u8FD9\u5C31\u662F\u4E24\u4E2A\u624B\u673A\u7F16\u7A0B\u8F6F\u4EF6\uFF0C\u4F46\u662F AIDE \u7528\u7684 java \u8BED\u8A00\uFF08\u5F53\u65F6\u8981\u4E0D\u662F\u56E0\u4E3A\u4E2D\u8003\u6211\u771F\u53BB\u5B66 java \u4E86\uFF09\uFF0C\u4E5F\u5C31\u662F\u624B\u673A\u7248\u7684 AndroidStudio\uFF0C\u6709\u4E00\u5B9A\u7684\u95E8\u69DB\u3002\u4E8E\u662F\u6211\u9009\u62E9\u4E86\u5BF9\u5C0F\u767D\u975E\u5E38\u53CB\u597D\u7684 iApp\uFF08\u4F30\u8BA1\u5F88\u591A\u7A0B\u5E8F\u5458\u90FD\u6CA1\u542C\u8BF4\u8FC7\uFF09\u3002",paraId:3,tocIndex:1},{value:"\u56E0\u4E3A\u4E2D\u8003\u7684\u539F\u56E0\uFF0C\u5F53\u65F6\u4E5F\u6CA1\u600E\u4E48\u7814\u7A76 iApp\uFF0C\u53EA\u662F\u7B80\u5355\u7684\u6539\u522B\u4EBA\u7684\u6E90\u7801\u3002\u5F53\u9875\u9762\u4E0A\u51FA\u73B0 Hello, World!\u7B2C\u4E00\u4E2A Button \u53EF\u4EE5\u88AB\u70B9\u51FB\u5E76\u4E14\u8DF3\u8F6C\u65F6\u5019\uFF0C\u6211\u5C31\u6B64\u627E\u5230\u4E86\u5C5E\u4E8E\u6211\u7684\u65B0\u4E16\u754C \u{1F60D}\u3002",paraId:3,tocIndex:1},{value:"\u9AD8\u4E2D\u9636\u6BB5",paraId:4,tocIndex:1},{value:"\uFF1A",paraId:4,tocIndex:1},{value:"\u6574\u4E2A\u9AD8\u4E2D\u4E09\u5E74\uFF0C\u6211\u90FD\u5728\u7F16\u7EC7\u6211\u7684\u8F6F\u4EF6\u5E1D\u56FD\uFF0C\u6700\u540E\u56E0\u4E3A\u9AD8\u8003\u803D\u6401\u4E86\u3002",paraId:5,tocIndex:1},{value:"\u6211\u7684\u7B2C\u4E00\u4E2A App \u53EB\u201C\u95EA\u7535\u76D2\u5B50\u201D\uFF0C\u8FD9\u662F\u4E00\u4E2A\u624B\u673A\u5DE5\u5177\u7BB1\uFF0C\u4F46\u662F\u8FD9\u4E2A App \u662F\u6211\u590D\u5236\u7C98\u8D34\u5F88\u591A\u522B\u4EBA\u7684\u6E90\u7801\u5F97\u6765\u7684\uFF0C\u4E0D\u8FC7\u4E5F\u6709\u5F88\u591A\u4EBA\u7528\uFF0C\u770B\u5230\u522B\u4EBA\u7528\u81EA\u5DF1\u505A\u7684\u8F6F\u4EF6\u6210\u5C31\u611F\u6EE1\u6EE1\u3002\u6211\u7684\u7B2C\u4E8C\u6B3E App \u53EB\u201C\u53E3\u888B\u6E90\u7801\u201D\uFF0C\u8FD9\u4E2A\u53EF\u4EE5\u79F0\u5F97\u4E0A\u662F\u201C\u81EA\u4E3B\u7814\u53D1\u201D\uFF0C\u867D\u7136\u4E5F CV \u4E86\u522B\u4EBA\u7684\u4EE3\u7801\uFF0C\u8FD9\u4E2A\u8F6F\u4EF6\u662F\u4E00\u4E2A\u6E90\u7801\u5546\u5E97\uFF0C\u6211\u4ECE\u7F51\u4E0A\u6536\u96C6\u6E90\u7801\uFF0C\u7136\u540E\u6302\u5728\u4E0A\u9762\uFF0C\u7528\u6237\u9700\u8981\u5F00\u901A\u4F1A\u5458\u4E0B\u8F7D\uFF0C\u8FD9\u4E2A\u8F6F\u4EF6\u4ECE\u8FD0\u8425\u5230\u4E0B\u7EBF\u7ED9\u6211\u5E26\u6765\u4E86\u4E09\u5343\u591A\u7684\u6536\u76CA\u3002\u540C\u65F6\u671F\u8FD8\u4E0A\u7EBF\u4E86\u201C\u53E3\u888B\u5E94\u7528\u201D\uFF0C\u8FD9\u662F\u4E00\u4E2A\u8F6F\u4EF6\u751F\u6210\u5668\uFF0C\u201C\u5E94\u7528\u5E84\u56ED\u201D\uFF0C\u8FD9\u662F\u4E00\u4E2A\u8F6F\u4EF6\u5546\u5E97\u3002\u4E4B\u540E\u5C31\u5230\u4E86\u9AD8\u4E09\uFF0C\u5728\u6B64\u9636\u6BB5\u8F6F\u4EF6\u5F00\u53D1\u505C\u6EDE\u4E86\uFF0C\u201C\u5E1D\u56FD\u201D\u5D29\u584C\u4E86\u3002",paraId:5,tocIndex:1},{value:"\u503C\u5F97\u4E00\u63D0\u7684\u662F\uFF0C\u5728\u6B64\u6211\u5F00\u53D1 App \u7528\u7684\u4E00\u76F4\u90FD\u662F iApp\uFF0C\u90A3\u65F6\u5019\u8FD8\u4E0D\u61C2 html\uFF0Cjava \u7B49\u7B49\uFF0C\u4F46\u662F iApp \u662F\u7ED9\u6211\u672A\u6765\u7684 Android \u5B66\u4E60\u6253\u4E0B\u4E86\u5F88\u5927\u7684\u57FA\u7840\u3002",paraId:5,tocIndex:1},{value:"\u5927\u5B66\u9636\u6BB5",paraId:6,tocIndex:1},{value:"\uFF1A",paraId:6,tocIndex:1},{value:"\u9AD8\u8003\u540E\u7684\u6691\u5047\uFF0C\u60F3\u8981\u7CFB\u7EDF\u6027\u7684\u5B66\u4E60\u7F16\u7A0B\uFF0C\u5728 b \u7AD9\u770B\u4E86\u9ED1\u9A6C\u7A0B\u5E8F\u5458\uFF0Cpink \u8001\u5E08\u4E5F\u5C31\u662F\u6211\u7684\u524D\u7AEF\u542F\u8499\u8001\u5E08\uFF08\u7EDD\u5927\u90E8\u5206\u524D\u7AEF\u7684\u542F\u8499\u8001\u5E08\uFF09\u3002",paraId:7,tocIndex:1},{value:"\u5728\u5F00\u5B66\u524D\u5B66\u4F1A\u4E86\u505A\u4E00\u4E9B\u7B80\u5355\u7684\u7F51\u9875\uFF0C\u4F46\u662F\u8FD8\u4E0D\u662F\u5F88\u719F\u7EC3\uFF0C\u90A3\u65F6\u5019\u8FD8\u5BF9\u540E\u7AEF\u4E00\u7A8D\u4E0D\u901A\uFF0C\u540E\u6765\u4E3A\u4E86\u80FD\u5B9E\u73B0\u63A5\u53E3\u5BF9\u63A5\uFF0C\u53BB\u56FE\u4E66\u9986\u501F\u4E86\u672C php \u5F00\u53D1\u6559\u7A0B\u7684\u4E66\uFF08\u56E0\u4E3A\u6211\u5728\u73A9 iApp \u65F6\u5019\uFF0C\u5F88\u591A\u4EBA\u7528\u7684\u90FD\u662F php \u505A\u540E\u53F0\uFF09\u3002\u4F46\u662F\u540E\u6765\u63A5\u89E6\u5927\u5B66\u8BFE\u7A0B\u4E86\u89E3\u7684\u66F4\u591A\u4E4B\u540E\uFF0C\u611F\u89C9 php \u4EE5\u540E\u4F1A\u88AB\u6DD8\u6C70\uFF0C\u5C31\u518D\u4E5F\u6CA1\u6709\u78B0\u8FC7\u3002",paraId:7,tocIndex:1},{value:"\u6574\u4E2A\u5927\u4E00\u6211\u4E00\u6709\u7A7A\u5C31\u6253\u5F00 b \u7AD9\u5B66\u524D\u7AEF\uFF0C\u4ECE\u524D\u7AEF\u4E09\u4EF6\u5957\u5230 nodejs\uFF0Cvue\uFF0C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF0C\u6700\u540E\u5230 javaweb\uFF0C\u8FD9\u4E9B\u548C\u6211\u7684\u5927\u4E00\u751F\u6D3B\u4EA4\u7EC7\u5728\u4E86\u4E00\u8D77\u3002",paraId:7,tocIndex:1},{value:"\u5927\u4E00\u7684\u6691\u5047\uFF0C\u8DDF\u7740\u8F85\u5BFC\u5458\u6210\u7ACB\u4E86\u6211\u4EEC\u5B66\u6821\u7684\u7F51\u7EDC\u79D1\u6280\u5DE5\u4F5C\u5BA4\uFF0C\u5F53\u65F6\u548C\u5927\u4E8C\u7684\u5B66\u957F\u4E00\u8D77\u5F00\u53D1\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u201C\u4E0E\u7406\u6613\u8D77\u201D\uFF0C\u6211\u505A\u524D\u7AEF\uFF0C\u4ED6\u505A\u540E\u7AEF\uFF0C\u8FD9\u662F\u4E00\u4E2A\u6821\u56ED\u670D\u52A1\u5E73\u53F0\uFF0C\u6700\u540E\u83B7\u5F97\u4E86\u300A2023 \u5E74\u5168\u56FD\u9AD8\u6821\u6613\u73ED\u6280\u672F\u521B\u65B0\u5927\u4F1A\u81EA\u4E3B\u7814\u53D1\u8BC4\u6BD4\u4E09\u7B49\u5956\u300B\u3002",paraId:7,tocIndex:1},{value:"\u7531\u4E8E\u8DDF\u5B66\u957F\u7684\u5408\u4F5C\uFF0C\u4ED6\u7528\u7684\u662F springboot\uFF0C\u4E8E\u662F\u6211\u4E5F\u5728\u5927\u4E8C\u5F00\u59CB\u5B66\u4E60 springboot\uFF0C\u4F9D\u65E7\u662F b \u7AD9\u81EA\u5B66\uFF0C\u5B66\u7684\u5DEE\u4E0D\u591A\u4E4B\u540E\uFF0C\u6211\u63A5\u624B\u4E86\u4E00\u4E2A\u5316\u5DE5\u5B66\u9662\u540C\u5B66\u7684\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u9879\u76EE\uFF0C\u7528\u6240\u5B66\u7684\u77E5\u8BC6\u5E2E\u4ED6\u7EF4\u62A4\u4E86\u4E00\u5B66\u671F\u3002",paraId:7,tocIndex:1},{value:"\u5728\u5927\u4E8C\u4E0B\u7684\u65F6\u5019\u6211\u5F00\u53D1\u4E86\u4E00\u4E2A App\uFF0C\u53EB\u201C\u5C0F\u4E8C\u4E91\u76D8\u201D\uFF0C\u8FD9\u662F\u4E00\u4E2A\u65B9\u4FBF\u7528\u6237\u5206\u4EAB\u6587\u4EF6\u7684\u7F51\u76D8\uFF0C\u7B2C\u4E00\u5929\u4E0A\u7EBF\u6CE8\u518C\u91CF 500+\uFF0C\u975E\u5E38\u53D7\u6B22\u8FCE\uFF0C\u4E5F\u8BF4\u660E\u7740\u6211\u7684 idea \u662F\u6B63\u786E\u7684\u3002\u4E0D\u8FC7\u5F53\u65F6\u6709\u4E86\u524D\u8F66\u4E4B\u9274\uFF0C\u4E4B\u524D\u5F00\u53D1 App \u603B\u662F\u88AB Doss \u653B\u51FB\uFF0C\u6240\u4EE5\u8FD9\u6B21\u6211\u9009\u62E9\u4E86\u7528 uniapp+unicloud \u5F00\u53D1\uFF0C\u6CA1\u6709\u7528\u5230\u4F20\u7EDF\u7684\u540E\u7AEF\u5F00\u53D1\u3002\u8FD9\u4E2A App \u4E8E\u5F53\u5E74\u7684 10 \u6708\u4EFD\u4E0B\u7EBF\u4E86\uFF0C\u56E0\u4E3A\u7528\u6237\u5728\u6211\u7F51\u76D8\u603B\u662F\u5B58\u4E00\u4E9B\u8FDD\u89C4\u7684\u4E1C\u897F\uFF0C\u88AB\u8001\u5BB6\u7F51\u4FE1\u529E\u8981\u6C42\u5173\u95ED\u4E86\u3002\u6700\u7EC8\u8FD9\u4E2A App \u7528\u6237\u505C\u7559\u5728\u4E00\u4E07\u591A\u4EBA\uFF0C\u7ED9\u6211\u5E26\u6765\u516B\u5343\u591A\u7684\u6536\u76CA\u3002",paraId:7,tocIndex:1},{value:"\u4E4B\u540E\u5728\u5927\u4E09\u5F00\u59CB\u5B66\u4E60 Python\uFF0C\u4E3B\u8981\u96C6\u4E2D\u5728\u722C\u866B\u6280\u672F\u4E0A\uFF0C\u5E76\u5728\u5F53\u5E74 11 \u6708\u4EFD\u63A5\u4E86\u4E00\u4E2A Python \u722C\u866B\u7684\u517C\u804C\u9879\u76EE\uFF0C\u6301\u7EED\u4E86\u5F88\u957F\u65F6\u95F4\u3002\u5927\u4E09\u4E0B\u5B66\u671F\u4E13\u6CE8\u4E8E\u627E\u5B9E\u4E60\uFF0C\u987A\u4FBF\u52A0\u5165\u4E86\u5B66\u6821\u7684\u73B0\u4EE3\u6559\u80B2\u6280\u672F\u90E8\u95E8\uFF0C\u6211\u4F7F\u7528\u4F4E\u4EE3\u7801\u5E73\u53F0\uFF0C\u914D\u5408\u7740\u6211\u5B66\u7684\u524D\u7AEF\u77E5\u8BC6\uFF0C\u7ED9\u90E8\u95E8\u5F00\u53D1\u4E86\u4E00\u4E2A",paraId:7,tocIndex:1},{value:"\u90E8\u95E8\u5B98\u7F51",paraId:7,tocIndex:1},{value:"\u5E76\u4E0A\u7EBF\uFF0C\u5F97\u5230\u4E86\u8001\u5E08\u7684\u8BA4\u53EF\u3002\u5728\u6B64\u671F\u95F4\u5B66\u4E60\u4E86 Django \u6846\u67B6\uFF0C\u6B64\u65F6\u6B64\u523B\u6211\u5BF9\u6211\u672A\u6765\u7684\u65B9\u5411\u8FD8\u6CA1\u6709\u660E\u786E\u7684\u89C4\u5212\u3002\u6BCF\u4E2A\u8BED\u8A00\u90FD\u5B66\u4E00\u70B9\uFF0C\u5BFC\u81F4\u6CA1\u6709\u7CBE\u901A\u7684\u3002",paraId:7,tocIndex:1},{value:"\u5F53\u5E74 7 \u6708\u4EFD\u5165\u804C\u4E00\u5BB6\u516C\u53F8\u62C5\u4EFB\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\u3002\u7531\u4E8E\u516C\u53F8\u6280\u672F\u6808\u6D89\u53CA React\uFF0C\u6211\u5728\u516D\u6708\u4EFD\u7A81\u51FB\u5B66\u4E60\u4E86 React\uFF0C\u5E76\u5728\u5165\u804C\u540E\u8FC5\u901F\u9002\u5E94\u4E86\u65B0\u7684\u6280\u672F\u73AF\u5883\u3002\u5728\u516C\u53F8\u671F\u95F4\uFF0C\u524D\u7AEF\u6280\u672F\u5F97\u5230\u98DE\u901F\u63D0\u5347\uFF0C\u5E76\u6210\u529F\u7528 React \u5F00\u53D1\u4E86\u4E00\u4E2A\u5B98\u7F51\u3002",paraId:7,tocIndex:1},{value:"\u5B9E\u4E60\u671F\u95F4\u7531\u4E8E\u516C\u53F8\u540E\u7AEF\u6280\u672F\u6808\u4F7F\u7528 Go \u8BED\u8A00\uFF0C\u6211\u4E5F\u5F00\u59CB\u5B66\u4E60 Go\uFF0C\u81F3\u6B64\u6211\u5BF9\u6211\u672A\u6765\u7684\u89C4\u5212\u5927\u81F4\u6709\u4E86\u65B9\u5411\uFF0C\u4F46\u662F\u8FD8\u6CA1\u6709\u660E\u786E\uFF0C\u5C31\u662F\u524D\u7AEF+Go \u5F00\u53D1\u5DE5\u7A0B\u5E08\u3002",paraId:7,tocIndex:1},{value:"\u5DE5\u4F5C\u9636\u6BB5",paraId:8,tocIndex:1},{value:"\uFF1A",paraId:8,tocIndex:1},{value:"\u6BD5\u4E1A\u4E4B\u540E\uFF0C\u6211\u8FD8\u662F\u7559\u5728\u4E86\u8FD9\u5BB6\u516C\u53F8\uFF0C\u6B63\u5F0F\u5165\u804C\u540E\uFF0C\u516C\u53F8\u6B63\u5728\u505A\u4E00\u4F53\u673A App \u662F\u7528 uniapp \u5F00\u53D1\u7684\uFF0C\u8D1F\u8D23\u8FD9\u4E2A\u9879\u76EE\u7684\u540C\u4E8B\u79BB\u804C\u4E86\uFF0C\u6211\u5C31\u63A5\u624B\u4E86\u8FD9\u4E2A\u9879\u76EE\u3002\u6211\u7528 uniapp \u7EF4\u62A4\u4E86\u51E0\u4E2A\u7248\u672C\uFF0C\u4F46\u662F\u5728 10 \u6708\u4EFD\u65F6\u5019\uFF0C\u5728\u65B0\u7684\u4E00\u4F53\u673A\u4E0A\u9047\u5230\u4E86\u4E00\u4E2A\u9006\u5929\u7684 bug\uFF0Cuniapp \u505A\u7684 App \u66F4\u65B0\u4E4B\u540E\uFF0C\u673A\u5668\u91CD\u542F\u5185\u5BB9\u5C45\u7136\u53D1\u751F\u4E86\u7248\u672C\u56DE\u9000\uFF0C\u4F46\u662F\u7248\u672C\u53F7\u662F\u6CA1\u95EE\u9898\u7684\uFF0C\u6211\u5F53\u65F6\u4E3A\u4E86\u89E3\u51B3\uFF0C\u6D4F\u89C8\u4E86\u5F88\u591A\u6587\u7AE0\uFF0C\u6700\u540E\u786E\u5B9A\uFF0C\u8FD9\u662F uniapp \u6846\u67B6\u7684 bug\uFF0C\u5E76\u4E14 uniapp \u5F00\u53D1\u7684 App \u7ECF\u5E38\u5728\u4E00\u4F53\u673A\u95EA\u9000\u3002\u65E0\u5948\u6211\u5728\u56FD\u5E86\u8282\uFF0C\u8FB9\u5B66 Android \u8FB9\u7528\u539F\u751F\u91CD\u6784\u4E86\u8FD9\u4E2A\u9879\u76EE\uFF08\u6211\u4E4B\u524D\u867D\u7136\u5B66\u8FC7\u4E00\u6BB5\u65F6\u95F4 Android\uFF0C\u4F46\u662F\u4ECE\u6765\u6CA1\u505A\u8FC7\u9879\u76EE\uFF0C\u4E4B\u6240\u4EE5\u4E0A\u624B\u8FD9\u4E48\u5FEB\uFF0C\u662F\u56E0\u4E3A\u524D\u9762\u63D0\u5230\u7684 iApp \u7ED9\u6211\u6253\u4E0B\u4E86\u57FA\u7840\uFF09\u3002\u6700\u7EC8\u6311\u706F\u591C\u6218\uFF0C\u8282\u540E\u4E0A\u7EBF\u4E86\u65B0\u7684 App\uFF0C\u540E\u7EED\u8FD0\u8425\u90FD\u5F88\u7A33\u5B9A\u3002\u8FD9\u4E2A\u65B0\u7684 App \u6211\u4F7F\u7528\u7EAF java \u5F00\u53D1\u7684\uFF0C\u7531\u4E8E\u65F6\u95F4\u7D27\u8FEB\u6211\u5E76\u6CA1\u6709\u7528 Kotlin\u3002\u4E4B\u540E\u6211\u518D\u6DF1\u5165\u5B66\u4E60 Kotlin\u3002\u6B64\u65F6\u6211\u5BF9\u672A\u6765\u6709\u4E86\u660E\u786E\u7684\u89C4\u5212\uFF0C\u90A3\u5C31\u662F\u524D\u7AEF\uFF0CAndroid\uFF0CGo \u5DE5\u7A0B\u5E08\u4E3A\u4E3B\u3002\u6211\u53EA\u5728\u8FD9\u4E09\u95E8\u6280\u672F\u4E0A\u82B1\u8D39\u5FC3\u601D\uFF0C\u5176\u4ED6\u8BED\u8A00\u4E0D\u518D\u6DF1\u5165\u5B66\u4E60(\u5BF9\u4E86\u8FD8\u6709 Python)\u3002",paraId:9,tocIndex:1}]},9158:function(d,n,a){a.r(n),a.d(n,{texts:function(){return e}});var t=a(4480);const e=[{value:"\u59D3\u540D",paraId:0,tocIndex:1},{value:": \u6768\u6210\u6797",paraId:0,tocIndex:1},{value:"\u5E74\u9F84",paraId:0,tocIndex:1},{value:": 22 \u5C81",paraId:0,tocIndex:1},{value:"\u90AE\u7BB1",paraId:0,tocIndex:1},{value:": ",paraId:0,tocIndex:1},{value:"97400220@qq.com",paraId:0,tocIndex:1},{value:"\u6BD5\u4E1A\u9662\u6821",paraId:0,tocIndex:1},{value:": \u5B89\u5FBD\u7406\u5DE5\u5927\u5B66\uFF08\u672C\u79D1\uFF09",paraId:0,tocIndex:1},{value:"\u6240\u5B66\u4E13\u4E1A",paraId:0,tocIndex:1},{value:": \u6570\u5B57\u5A92\u4F53\u6280\u672F",paraId:0,tocIndex:1},{value:"\u83B7\u5F97\u8BC1\u4E66",paraId:0,tocIndex:1},{value:": \u5927\u5B66\u82F1\u8BED\u56DB\u7EA7\uFF0C\u5927\u5B66\u65E5\u8BED\u56DB\u7EA7",paraId:0,tocIndex:1},{value:"\xA0\xA0\xA0\xA0\xA0\xA0\u5177\u6709\u4E30\u5BCC\u7684\u540E\u7AEF\u5F00\u53D1\u7ECF\u9A8C\uFF0C\u719F\u7EC3\u638C\u63E1 Python\u3001Java \u548C Go \u8BED\u8A00\u3002\u64C5\u957F\u4F7F\u7528 Django\u3001Flask\u3001SpringBoot\u3001Gin\u3001Echo \u7B49\u6846\u67B6\u8FDB\u884C Web \u5F00\u53D1\u3002\u5177\u5907\u4F7F\u7528\u722C\u866B\u7ECF\u9A8C\uFF0C\u80FD\u591F\u4F7F\u7528 Python \u5904\u7406\u5404\u79CD\u6587\u6863\u683C\u5F0F\uFF0C\u5982 docx\u3002\u5177\u5907\u826F\u597D\u7684\u4EE3\u7801\u89C4\u8303\u548C\u56E2\u961F\u534F\u4F5C\u80FD\u529B\uFF0C\u81F4\u529B\u4E8E\u6784\u5EFA\u9AD8\u6548\u3001\u53EF\u6269\u5C55\u7684\u540E\u7AEF\u7CFB\u7EDF\u3002\u5728\u56E2\u961F\u5408\u4F5C\u4E2D\uFF0C\u6211\u719F\u7EC3\u4F7F\u7528 Git \u8FDB\u884C\u7248\u672C\u63A7\u5236\u548C\u4EE3\u7801\u7BA1\u7406\uFF0C\u786E\u4FDD\u9879\u76EE\u7684\u987A\u5229\u63A8\u8FDB\u548C\u4EE3\u7801\u7684\u6301\u7EED\u96C6\u6210\u3002\u6211\u7684\u5B66\u4E60\u80FD\u529B\u5F3A\uFF0C\u613F\u610F\u63A5\u7EB3\u65B0\u4E8B\u7269\uFF0C\u5E76\u80FD\u591F\u5FEB\u901F\u9002\u5E94\u65B0\u6280\u672F\u548C\u5DE5\u5177\u3002\u6211\u6CE8\u91CD\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u548C\u53EF\u7EF4\u62A4\u6027\uFF0C\u59CB\u7EC8\u4FDD\u6301\u5BF9\u6280\u672F\u7684\u70ED\u60C5\u548C\u8FFD\u6C42\uFF0C\u81F4\u529B\u4E8E\u4E0D\u65AD\u63D0\u5347\u81EA\u5DF1\u7684\u6280\u672F\u6C34\u5E73\u548C\u89E3\u51B3\u95EE\u9898\u7684\u80FD\u529B\u3002",paraId:1,tocIndex:2},{value:"\u524D\u7AEF",paraId:2,tocIndex:3},{value:": \u638C\u63E1 Vue\uFF0CReact\uFF0Cuniapp \u7B49\u4E3B\u6D41\u6846\u67B6\u7B49\u4F7F\u7528\uFF0C\u6709\u624E\u5B9E\u7684 HTML\uFF0CCSS\uFF0CJavaScript \u57FA\u7840\uFF0C\u719F\u7EC3\u4F7F\u7528 ES6+ \u65B0\u589E\u8BED\u6CD5\uFF0C\u7406\u89E3\u539F\u578B\uFF0C\u95ED\u5305\uFF0C\u5F02\u6B65\u7B49\u6982\u5FF5\uFF0C\u719F\u7EC3\u4F7F\u7528 nodejs\uFF0CTypeScript \u7B49\u6280\u672F\u3002",paraId:2,tocIndex:3},{value:"Android",paraId:2,tocIndex:3},{value:": \u5F85\u8865\u5145",paraId:2,tocIndex:3},{value:"Go",paraId:2,tocIndex:3},{value:": \u5F85\u8865\u5145",paraId:2,tocIndex:3},{value:"Python",paraId:2,tocIndex:3},{value:": \u5F85\u8865\u5145",paraId:2,tocIndex:3},{value:"Mysql",paraId:2,tocIndex:3},{value:": \u5F85\u8865\u5145",paraId:2,tocIndex:3},{value:"2023 \u5E74 11 \u6708-2024 \u5E74 6 \u6708",paraId:3,tocIndex:5},{value:"\u4F7F\u7528 Python \u722C\u866B\u5BF9\u76EE\u6807\u7F51\u7AD9\u6570\u636E\u8FDB\u884C\u722C\u53D6\uFF0C\u5E76\u5C06\u5904\u7406\u540E\u7684\u6570\u636E\u5B58\u50A8\u5728\u6570\u636E\u5E93\u4E2D\u3002",paraId:4,tocIndex:5},{value:"\u4F7F\u7528 Selenium \u5B9E\u73B0\u81EA\u52A8\u5316\u722C\u53D6\u7F51\u7AD9\u6570\u636E\u3002",paraId:4,tocIndex:5},{value:"\u4F7F\u7528 Python \u5B9E\u73B0\u5BF9 Word \u6587\u6863\u548C\u56FE\u7247\u7684\u76F8\u5173\u64CD\u4F5C\u3002",paraId:4,tocIndex:5},{value:"\u4F7F\u7528 Flask \u6846\u67B6\u5236\u4F5C API \u63A5\u53E3\u3002",paraId:4,tocIndex:5},{value:"2024 \u5E74 10 \u6708-\u81F3\u4ECA",paraId:5,tocIndex:6},{value:"\u4E3B\u8981\u8D1F\u8D23\u5F00\u53D1\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF0C\u7F51\u9875\uFF0CApp \u7B49\u524D\u7AEF\u5DE5\u4F5C\u3002",paraId:6,tocIndex:6},{value:"\u4F7F\u7528 android \u72EC\u7ACB\u5B8C\u6210\u4E00\u4F53\u673A App \u7684\u5F00\u53D1\u4E0E\u7EF4\u62A4\u3002",paraId:6,tocIndex:6},{value:"\u4F7F\u7528 uniapp\uFF0Cvue\uFF0Creact \u7B49\u6846\u67B6\u5B8C\u6210\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF0C\u7F51\u9875\u7684\u5F00\u53D1\u4E0E\u7EF4\u62A4\u3002",paraId:6,tocIndex:6},{value:"\u4F7F\u7528 mysql\uFF0Clinux \u7B49\u6280\u672F\u5BF9\u6D4B\u8BD5\u5DE5\u4F5C\u7684\u652F\u6301\u3002",paraId:6,tocIndex:6},{value:"\u5177\u5907\u624E\u5B9E\u7684\u7F16\u7A0B\u57FA\u7840\u548C\u4E30\u5BCC\u7684\u9879\u76EE\u7ECF\u9A8C\uFF0C\u80FD\u591F\u5FEB\u901F\u9002\u5E94\u65B0\u7684\u6280\u672F\u73AF\u5883\u3002\u6CE8\u91CD\u4EE3\u7801\u8D28\u91CF\u548C\u7CFB\u7EDF\u6027\u80FD\uFF0C\u5177\u5907\u826F\u597D\u7684\u56E2\u961F\u5408\u4F5C\u7CBE\u795E\u548C\u6C9F\u901A\u80FD\u529B\u3002\u6301\u7EED\u5B66\u4E60\u65B0\u6280\u672F\uFF0C\u81F4\u529B\u4E8E\u6210\u4E3A\u4E00\u540D\u4F18\u79C0\u7684\u8F6F\u4EF6\u5DE5\u7A0B\u5E08\u3002",paraId:7,tocIndex:7},{value:"\u611F\u8C22\u60A8\u7684\u65F6\u95F4\uFF0C\u671F\u5F85\u4E0E\u60A8\u7684\u5408\u4F5C\uFF01",paraId:8,tocIndex:7}]}}]);
