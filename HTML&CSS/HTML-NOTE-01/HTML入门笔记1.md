# HTML入门笔记1

HTML是由Tim Berners lee 和他的同事 Daniel W.Connolly于1990年发明的一种标记式语言


HTML的起手式：vs code 中通过 !+tab 快捷打出
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA.Compatible" content="ie=edge"
<title>Document</title>
</head>
<body>
</body>
</html>
```

```
<!DOCTYPE> 是一个文档类型，声明位于文档中的最前面的位置，处于 <html> 标签之前。
<!DOCTYPE> 声明不是一个 HTML 标签；它是用来告知 Web 浏览器页面使用了哪种 HTML 版本。

<html lang="en">  "lang"的意思就是“language”  en代表英语，中国大陆简体中文是zh-CN

<meta charset="UTF-8"> 是文件的字符编码

<meta http-equiv="X-UA.Compatible" content="ie=edge">    告诉IE使用最新内核

<meta name="viewport" content="width=device-width, initial-scale=1.0"> 禁止缩放

<title>Document</title>   标题
```

###      常用的表示章节的标签：
* h1~h6    表示标题，数字越大字体越小
* section   表示章节
* article     表示文章
* p             表示段落
* header    表示顶部（头部）
* footer     表示尾部（脚部）
* main       表示主要内容
* aside      表示旁支内容
* div          划分区块




### 全局属性：所有标签都有的属性
* class                       定义元素的类名
* contenteditable        可编辑内容
* hidden                     隐藏元素
* id                            规定元素的唯一，但不是绝对唯一的，因为命名重复不会报错，非不得已情况尽量不用id
* style                          样式
* tabindex            用tab键去选中下一个元素,可以通过赋值来决定下一个元素的出现顺序，0表示最后一个，1以上数字越大越往后，-1表示不要被tabindex找到
* title                        显示完整文本内容



### 常用的内容标签
* a      创建点击可进入网址的文本
* pre     在有多个空格或回车的文本外包上一个pre标签，空格和回车都会可用了
* code   展示代码专用的标签，最大特点是字体等宽，仅限英文，通常和pre标签配合使用
* em     表示强调的文本，具体表现为字体为斜体
* strong  表示文本的重要，表现为字体加粗
* quote    内联元素，表示行内引用
* blockquote   块级元素，表示隔行引用