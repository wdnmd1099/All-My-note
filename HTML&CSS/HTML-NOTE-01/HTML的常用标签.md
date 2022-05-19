# a标签的用法

  超链接，创建一个点击能跳转到指定网址的文本
```html
<a href="//XXX"></a>
```

  可以用target指定在哪一个窗口打开，默认是_self 在当前页面打开 
  _blank是在新窗口打开，_parent 是在上一层页面打开 _top是在最顶层页
  面打开


  href的取值，在输入网址时用//+地址的形式，不用http或https
  ```html
<a href="//baidu.com"></a>
```


  可以用它的伪协议
  * 运行js代码，javascript:代码;  
  
  * 发邮件，mailto：邮件
  
  * 直接打电话，tel：号码


  可以用id作为元素的锚点，以后点击a标签可以直接显示id所指定的元素
  


···································································································································································································


  # table标签的用法
  * 写表格

  table标签里只能有三个标签
  thead tbody tfoot，分别代表头部，数据，脚部
  tr=table row   table里的一行
  td=table data  table里的数据


具体写法：
```html
<table>
        <thead>
            <tr>
                <td>头1</td>
                <td>头2</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>数据1</td>
                <td>数据2</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>脚1</td>
                <td>脚2</td>
            </tr>
        </tfoot>
    </table>
```
可以再给它加上表格的线，
先给 tr,td加border
```
tr,td{
            border:1px solid blue;
         }
```
再在table写上：
```
table{
             table-layout: fixed;
             width: 300px;
             border-collapse: collapse;
             border-spacing: 0;
         }
```
border-collapse: collapse;   这行是合并边距，把border间的距离缩为0


border-spacing: 0;   这行是设置border的边距，如果想合并的话就写0

table-layout:auto和fixed  两种方式


auto 是按内容多少来决定行宽


fixed是固定行宽

···································································································································································································



# img标签的用法
img标签的作用是：发出一个get请求，展示一个图片


属性：

1.
alt后面加的是图片如果加载失败后，显示的文字，可以让用户知道自己在加载什么图片时加载失败了，如果什么都不写，用户只会显示为一张裂开的图片，以表示有图片加载失败，但不知道是什么图片，就会很奇怪

2.
width&height
只设置宽或高，另一个会自适应，以维持图片不变形
这个是它的属性，不是css的内容，所以可以直接写不用加style

3.
src就是图片地址，可以是网络地址，可以是相对或绝对路径


事件：

onload/onerror
检测图片有没有加载成功，onload是成功，onerror是失败，如果失败了，可以进行挽回措施，放404的图片
可以给img赋予id来进行测试用



img的响应式：



img的响应式就是为了适应手机端
使图片适应手机的使用

加上：
```
  *{
             margin: 0;
             padding: 0;
             box-sizing: border-box;
         }


  img{
             max-width: 100%;
         }

```
图片就可以适应手机端了






---------------------------
# from标签

作用：
发get或post请求，然后刷新页面
默认是get请求
可以用method改变请求方式

应用场景可以是在用户提交输入框的内容时，请求到后台给的地址，然后刷新页面


action是请求的地址
<form action="/XXX"   method="POST" ></form>

autocomplete 选择是否开启建议填充的功能，
比如在登录的时候要写用户名，如果开启autocomplete的话，它可以调用你用过的用户名历史给你选择。


target 就是要刷新哪个页面
也以提交输入框的数据为例，如果用户点击提交，你可以选择提交后刷新哪个页面
提交的地址依然是action的地址，刷新的页面是target指定的页面


-------------------------------------------
# input的各种用法
作用：让用户输入内容
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="POST" autocomplete="on" target="abc">
       输入用户名的 <input type="text" name="username" >
       <hr>
       输入单行纯文本的<input type="text" >
    <hr>
        选择颜色<input type="color" >
        <hr>    
        输入密码的<input type="password" name="" id="">
        <hr>
        单选属性的<input type="radio" name="gander"> 男
        <input type="text" name="gander"> 女
        <hr>
        多选的
        <input type="checkbox" name="hobby">rap  
        <input type="checkbox" name="hobby">唱  
        <input type="checkbox" name="hobby">跳  
        <hr>
        单文件传输<input type="file">
        多选文件传输<input type="file" multiple>
        <hr>
        隐藏的输入框，一般给js或其他脚本输入的<input type="hidden">
        <hr>
        多行文本输入
        style里的是为了控制不让输入框被拖动
        <textarea style="resize:none; height: 300px;  width: 300px;">
        </textarea>
        <hr>
        这里写一个可以拖动的
        <textarea></textarea>
        <hr>
        伸缩式选择框
        <select>
            <option value="">- 请选择 -</option>
            <option value="1">星期一</option>
            <option value="2">星期二</option>
        </select>
    </form>
</body>
</html>
```



