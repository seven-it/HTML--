# HTML常用知识点总结
## 目录
* [基本概念](https://github.com/seven-it/HTML-notebook#基本概念)   
* [语义化标签](https://github.com/seven-it/HTML-notebook#语义化标签) 
* [超链接](https://github.com/seven-it/HTML-notebook#超链接)
* [图片](https://github.com/seven-it/HTML-notebook#图片) 
* [表格](https://github.com/seven-it/HTML-notebook#表格) 
* [表单](https://github.com/seven-it/HTML-notebook#表单) 
* [框架](https://github.com/seven-it/HTML-notebook#框架) 
* [脚本](https://github.com/seven-it/HTML-notebook#脚本)
* [HTML5](https://github.com/seven-it/HTML-notebook#H5总结)

## 基本概念
####  简介
1. **什么是 HTML？**
- HTML 是用来描述网页的一种语言。
- HTML 指的是超文本标记语言 (Hyper Text Markup Language)
- HTML 不是一种编程语言，而是一种标记语言 (markup language)
- 标记语言是一套标记标签 (markup tag)
- HTML 使用标记标签来描述网页
- 总结 HTML是一种以标记标签来描述网页的超文本标记语言；
2. **什么是静态网页**
- 纯粹HTML（标准通用标记语言下的一个应用）格式的网页通常被称为“静态网页”，静态网页是标准的HTML文件，它的文件扩展名是.htm、.html，可以包含文本、图像、声音、FLASH动画、客户端脚本和ActiveX控件及JAVA小程序等；静态网页是相对于动态网页而言，是指没有后台数据库、不含程序和不可交互的网页。
3. **什么是动态网页**
- 动态网站并不是指具有动画功能的网站，而是指网站内容可根据不同情况动态变更的网站，一般情况下动态网站通过数据库进行架构。

####  文档结构

```
DTD(Document Type Definition)  -------------- 文档定义类型
<html>  -------------- 文本描述网页
    <head>  -------------- 文档头部标记：含脚本，样式表等等。
        <meta />   -------------- 定义文档字符集、使用语言、作者等基本信息
        <title>标题</title>  -------------- 定义文档的标题
    </head>
    <body>   -------------- 网页主体,是可见的页面内容
        <h1>Hello world</h1> -----------标题
    </body>
</html>

```
####  标签
1. **HTML 标记标签**
- 标记标签通常被称为 HTML 标签 (HTML tag)
    - HTML 标签是由尖括号包围的关键词，比如 \<html>
    - HTML 标签通常是成对出现的，比如 \<b> 和 \</b>
    - 标签对中的第一个标签是开始标签，第二个标签是结束标签
    - 开始和结束标签也被称为开放标签和闭合标签

2. **head中的标签**
* head中可插入的标签有
    * title     -----网页标题
        - 定义浏览器工具栏中的标题
        - 提供页面被添加到收藏夹时显示的标题
        - 显示在搜索引擎结果中的页面标题
    * base      ----- 标签为页面上的所有链接规定默认地址或默认目标（target）;
        * 如果a标签的href为空，那么点击之后跳转到base指定的地址
        * 如果a标签的target属性为空，那么页面跳转的位置为base指定的位置
        * [可见 html-demo文件中 base标签](https://seven-it.github.io/HTML-notebook/html-demo/base%E6%A0%87%E7%AD%BE.html)
    - link      -----一般用于引用外联样式表
        - href属性-----规定被链接文档的位置
        - rel 属性-----规定当前文档与被链接文档之间的关系
        - rel="stylesheet" ----- 表示引用的文件是个样式表
    - script    -----标签用于定义客户端脚本
    - style     -----插入内联样式表
    - meta      ----- 目前理解不够并内容较多，打算单独拿出来仔细研究，资料
    - https://segmentfault.com/a/1190000004279791
3. **HTML 元素**
- HTML 元素指的是从开始标签（start tag）到结束标签（end tag）的所有代码。
4. **HTML 属性**
- HTML 标签可以拥有属性。属性提供了有关 HTML 元素的更多的信息
- 属性总是以名称/值对的形式出现，比如：name="value"。
- 属性总是在 HTML 元素的开始标签中规定。
- HTML常用属性
    - class
    - id
    - style
    - title
    - alt
    - data-* -----自定义属性 (H5)(全兼容)

####  块与内联
- 块级元素
    - 块级元素会独占一行,默认情况下,其宽度自动填满其父元素宽度.
- 内联元素
    - 行内元素不会独占一行,相邻的行内元素会排列在同一行里,直到一行排不下,才会换行,其宽度随元素的内容而变化.
- 块级与内联的特性
    - 块级元素可以设置width,height属性.
    - 行内元素设置width,height属性无效，它的长度高度主要根据内容决定.
    - 块级元素即使设置了宽度,仍然是独占一行.
    - 块级元素可以设置margin和padding属性.
    - 行内元素的margin和padding属性，左右有效果，上下无效果
    - 块级元素对应于display:block.
    - 行内元素对应于display:inline.
    - 如果想让一个元素可以设置宽度高度，又让它以行内形式显示，我们可以设置display的值为inline-block。

## 语义化标签
#### 语义化的作用
1. 更容易被搜索引擎收录。
2. 更容易让屏幕阅读器读出网页内容。

#### 常用语义化标签
- HTML 标题  \<h1> - \<h6>
- HTML 注释  \<!-- -->
- HTML 段落  \<p>\</p>
- HTML 折行  \<br />
- 有序列表   \<ol>\</ol>
- 无序列表   \<ul>\</ul>
- 定义列表   \<dl>\</dl>
    - \<dt>\</dt> -----自定义列表项
    - \<dd>\</dd> -----自定义列表项描述
- \<pre>\</pre>：预格式化文本。保留文本固有的换行和空格。
- \<del>\</del> 定义文档中已被删除的文本。（带有中划线效果）
- \<ins>\</ins> 标签定义已经被插入文档中的文本 (带有下划线)
- \<bdo>\</bdo> 规定文本的输出方向
    - dir="ltr"  从左向右书写（正常书写方式）
    - dir="rtl"  从右向左书写 （反向书写）
- \<address>\</address> 作者、相关人士或组织的联系信息（电子邮件地址、指向联系信息页的链接）
    - 如果 \<address> 元素位于 \<body> 元素内，则它表示文档联系信息。
    - 如果 \<address> 元素位于 \<article> 元素内，则它表示文章的联系信息。
    - \<address> 标签不应该用于描述通讯地址，除非它是联系信息的一部分。
    - \<address> 元素通常连同其他信息被包含在 \<footer> 元素中。

## 超链接
#### 创建超链接
- 在html中通过 \<a> 标签来创建超链接
- 字体，图片，都可以通过a 标签进行跳转

#### \<a> 标签的两种使用方式
1. 通过使用 href 属性 - 创建指向另一个文档的链接
    - href="url" -----创建链接地址
    - target属性 -----定义被链接的文档在何处显示 
        - _blank    -----在新窗口中打开被链接文档。
        - _parent   -----在父框架集中打开被链接文档。
        - _self     -----默认。在相同的框架中打开被链接文档。
        - _top      -----在整个窗口中打开被链接文档。
        - framename -----在指定的框架中打开被链接文档。

2. 通过使用 name 属性 - 创建文档内的书签
    -  通过name创建锚点（不推荐）
        -  带name属性的标签必须是a标签，才会生效
    -  通过id创建锚点   （推荐）
        -  任何标签都可成为锚点
    -  [demo :可见 html-demo文件中 超链接](https://seven-it.github.io/HTML-notebook/html-demo/%E8%B6%85%E9%93%BE%E6%8E%A5.html)
#### 什么是超文本
- 超文本（英语：Hypertext）是一种在电脑显示器或其他电子设备，用以显示文本及与文本相关的内容，其中的文字包含有可以链接到其他字段或者文档的超链接，允许从当前阅读位置直接切换到超链接所指向的文字。
- 一图胜千言 ，通过超链接可以从当前文本跳转到其它文本，形成一个关系网
- 
![超文本示意图](https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=c6c520e490529822113e3191b6a310ae/b2de9c82d158ccbfec67a91919d8bc3eb135413d.jpg)

#### \<a> 标签的小特性
- 两个a标签是不可以相互嵌套的；
- 当两个a标签都为inline元素时 ，只有内嵌的那个a标签生效；
- 当两个a标签都为block元素时，浏览器会将其父子关系拆分为兄弟关系
- [具体demo ：可见 html-demo文件中 超链接](https://seven-it.github.io/HTML-notebook/html-demo/%E8%B6%85%E9%93%BE%E6%8E%A5.html)

## 图片
#### 图片标签 \<img />
- alt   -----规定图像的替代文本。
- src   -----规定显示图像的 URL。
- usemap -----将图像定义为客户器端图像映射。
- ismap -----将图像定义为服务器端图像映射。

#### 图像地图 \<map>\</map>
- 定义一个客户端图像映射。图像映射（image-map）指带有可点击区域的一幅图像

```
// 结构如下  
<img usemap="img" >
<map name="img" id="img ">
    <area />
</map>
```

#### \<area />
- coords -----定义可点击区域（对鼠标敏感的区域）的坐标
- href  -----定义此区域的目标 URL。
- nohref -----从图像映射排除某个区域。
- shape -----定义区域的形状
    - default -----规定全部区域。
    - rect    -----定义矩形区域    
    - circ    -----定义圆形
    - poly    -----定义多边形区域。 
- target -----规定在何处打开 href 属性指定的目标 URL。
    - 与a标签的target属性相同

#### 演示demo地址
- [html-demo文件夹中：图片.html](https://seven-it.github.io/HTML-notebook/html-demo/%E5%9B%BE%E7%89%87.html)
- [\<area>\<map>标签及在实际开发中的应用](http://www.zhangxinxu.com/wordpress/2017/05/html-area-map/)

## 表格
- 表格标签
    - \<table>   -----	定义表格 （必须）
    - \<caption> -----定义表格标题。（可选）
    - \<th>      -----定义表格的表头 （可选）
        - colspan="number" -----设置单元格可横跨的列数 
        - rowspan="number" -----规定单元格可横跨的行数。
    - \<tr>      -----定义表格的行   （常用）
    - \<td>      -----定义表格单元   （常用）
    - \<thead>   -----定义表格的页眉 （不常用）
    - \<tbody>   -----定义表格的主体 （不常用）
    - \<tfoot>   -----定义表格的页脚 （不常用）
    - \<col>     -----定义用于表格列的属性 （不常用）
    - \<colgroup>-----定义表格列的组  （不常用）
- 表格样式尽量使用css来修改
- [demo地址 ：html-demo文件 表格.html](https://seven-it.github.io/HTML-notebook/html-demo/%E8%A1%A8%E6%A0%BC.html)

## 表单
#### 表单定义
- HTML 表单用于搜集不同类型的用户输入；
- \<form> -----用于为用户输入创建 HTML 表单
    - character_set -----该属性指定表单提交时使用的字符编码
    - action  -----当提交表单时，向何处发送表单数据
    - autocomplete (H5) -----规定表单是否应该启用自动完成功能 
        - on
        - off
        - 除了 Opera，其他主流浏览器都支持 autocomplete 属性
    - enctype -----规定在将表单数据发送到服务器之前如何对其进行编码。
        - application/x-www-form-urlencoded ---默认。在发送前对所有字符进行编码（将空格转换为 "+" 符号，特殊字符转换为 ASCII HEX 值）。
        - multipart/form-data ---不对字符编码。当使用有文件上传控件的表单时，该值是必需的
        - text/plain ---将空格转换为 "+" 符号，但不编码特殊字符
    - method 方法规定如何发送表单数据
        - get
            -  特点：
                1. 明文提交,所提交的数据时可以显示在地址栏上的-安全性较低
                2. 提交数据有大小限制-最大为2KB
        - post
            - 特点：
                1. 隐式提交-所提交的内容是不会显示在地址栏上的，安全性较高
                2. 无大小限制
    - name 属性规定表单的名称 用于在 JavaScript 中引用元素，或者在表单提交之后引用表单数据
    - novalidate 属性规定当提交表单时不对表单数据（输入）进行验证
        - Internet Explorer 10、Firefox、Opera 和 Chrome 都支持 novalidate 属性
    - target 在何处打开新网页
    
#### 表单元素
- \<input> 元素
- \<select> 元素（下拉列表）
    - \<option> 元素定义待选择的选项
    - selected 属性 --定义默认显示的一项
- \<textarea> 元素 -----定义多行输入字段（文本域）
- \<button> 元素 -----定义可点击的按钮

#### 表单类型
- 输入类型：text
- 输入类型：password
- 输入类型：submit
- \<input type="radio"> 定义单选按钮。
- \<input type="checkbox"> 定义复选框。
- \<input type="button> 定义按钮。

#### 表单属性
- name
- type
- value
- readonly  -----规定输入字段为只读（不能修改）
- disabled  -----规定输入字段是禁用的 
    - 被禁用的元素是不可用和不可点击的
    - 被禁用的元素不会被提交
- maxlength -----规定输入字段允许的最大长度
    - 配合js来限制更加安全
- [demo可见 heml-demo:表单.html](https://seven-it.github.io/HTML-notebook/html-demo/%E8%A1%A8%E5%8D%95.html)

## 框架
#### HTML 框架定义
- 通过使用框架，你可以在同一个浏览器窗口中显示不止一个页面。每份HTML文档称为一个框架，并且每个框架都独立于其他的框架。
- 使用框架的坏处：
    - 开发人员必须同时跟踪更多的HTML文档
    - 很难打印整张页面
- 框架结构标签
    - 框架结构标签（\<frameset>）定义如何将窗口分割为框架
    - 每个 frameset 定义了一系列行或列
    - rows/columns 的值规定了每行或每列占据屏幕的面积  
- 注意事项
    - 使用框架时<frameset>标签不能被包含在body中，并且body标签不能在其上方

#### 框架标签（Frame）
- \<frameset>\</frameset> -----外层框架集
    - cols="25%,75%"    -----属性规定垂直方向的页面宽度,一个数值代表一个页面
    - rows="25%,75%"    -----属性规定垂直方向的页面宽度,一个数值代表一个页面
- \<frame src="frame_a.htm" /> ----- 引入相应的页面
    - noresize="noresize" 该属性可禁止用户缩放页面
- \<noframes></noframes> -----当浏览器不支持frameset时用文字代替，文字必须包含在body标签中
- [demo可见 html-demo中：框架.html](https://seven-it.github.io/HTML-notebook/html-demo/%E6%A1%86%E6%9E%B6.html)
-  [导航框架demo](https://seven-it.github.io/HTML-notebook/html-demo/a.html)

#### 内联框架 iframe
- iframe 的语法
    -  \<iframe src="URL">\</iframe>
- Iframe 属性
    -  height -----设置高度
    -  width ----- 设置宽度
    -  frameborder="0" -----删除边框
- [内联框架demo](https://seven-it.github.io/HTML-notebook/html-demo/%E5%86%85%E8%81%94%E6%A1%86%E6%9E%B6.html)    
- 使用 iframe 作为链接的目标
    - 必须设置name属性 链接到 a标签的target属性

```
<iframe src=""  frameborder="0" height="500" width="500" name="iframe_t"></iframe>
<a href="http://www.jd.com" target="iframe_t">在iframe中打开京东</a>
```

## 脚本
#### 什么是脚本语言
- 脚本语言（英语：Scripting language）是为了缩短传统的“编写、编译、链接、运行”（edit-compile-link-run）过程而创建的计算机编程语言
- 脚本语言特点
    - 解释型，非编译

#### 什么是脚本
- 遵循某种脚本语言语法，不用经过预编译即可被解释运行的文本文件；
- 一般为了解决某种重复性操作
- 例如：让某个按钮点击100次算是一个最简单的脚本；
- 目的就是为了减少更多的人力操作；
- 客户端脚本标签 \<script> 

## H5总结
#### H5语义化的标签
- \<header>\</header> -----页眉通常包括网站标志、主导航、全站链接以及搜索框
- \<article>\</article> -----包含一段文档的内容，相当于报纸，多块但不相关联的内容
- \<aside>\</aside> -----广告栏 侧边栏等于主体内容不相关的区域
- \<audio>\</audio> ----- html5音频
- \<canvas>\</canvas>        ----- html5画布
- \<footer>\</footer>        ----- 定义网站底部区域    
- \<nav>\</nav>       -----标记导航，仅对文档中重要的链接群使用
- \<video>\</video>         ----- html5视频    
- **以上标签为H5常用标签，兼容IE9+浏览器**
- \<progress>\</progress> 标示任务的进度（进程）
- **progress标签需要兼容IE10+**
- \<section>（全兼容）-----定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分

#### H5表单 兼容性稍差 不做记录
#### H5视频
- \<video>\</video>
- 视频格式
    - ogg格式支持 :Firefox,Opera,Chrome
    - MPEG 4 格式支持：IE ，Chrome ，Safari
    - WebM 格式支持：Firefox ，Opera ,Chrome
- video 属性
    - src -----要嵌入的视频地址，如果使用\<source>标签可省略 src
    - width -----视频宽度
    - height -----视频高度
    - autoplay="autoplay" -----如果出现该属性，则视频在就绪后马上播放
    - controls="controls" -----如果出现该属性，则向用户显示控件，比如播放按钮
    - loop="loop" -----如果设置该属性，则视频将循环播放
    - preload -----规定是否在页面加载后载入视频,如果设置了 autoplay 属性，则忽略该属性。
        - auto - 当页面加载后载入整个视频
        - meta - 当页面加载后只载入元数据
        - none - 当页面加载后不载入视频

#### H5音频
- audio
- 音频格式
    - Ogg Vorbis格式支持 :Firefox,Opera,Chrome
    - MP3 格式支持：IE9 ，Chrome ，Safari
    - Wav 格式支持：Firefox ，Opera ,Safari
- audio 属性
    - 除了缺少 width 与 height 外 其它都与video一样

#### 内嵌标签
    - \<source src=" " type=" " />
    - source 元素可以链接不同的音频与视频文件。浏览器将使用第一个可识别的格式

```
<audio controls="controls">
//引入不同格式文件，兼容浏览器，该写法同样适用于video
  <source src="song.ogg" type="audio/ogg">
  <source src="song.mp3" type="audio/mpeg">
Your browser does not support the audio tag.
</audio>
```
#### H5拖放  drag & drop
- 关于拖放
    - h5拖放事件是html5的新特性，目前写了几个demo只有在谷歌浏览器支持较好，在火狐与ie中多少有些问题，所以目前这个特性我们只做一些了解就好。
- 源对象与目标对象
    - 源对象：就是我们想要拖拽的那个对像，可以是图片，文本，超链接等等。
    - 目标对象：就是我们想将源对象放置的位置
- 拖放属性
    - draggable
        - true
        - false
    - 对于浏览器默认可拖动的元素可以不设置该元素，例如图片与链接；而浏览器默认不可拖动的元素则必须设置该属性为true；例如一段文本
    - [可见demo：h5拖放文本与链接](https://seven-it.github.io/HTML-notebook/html-demo/h5拖放-demo4.html)
- 拖放API
    - 拖放事件
        - h5提供了7个关于拖放的事件函数，其中3个对应着源对象，4个对应着目标对象
        - ondragstart：源对象开始被拖动 
        - ondrag：源对象被拖动过程中
        - ondragend：源对象被释放
        - ondragenter：源对象被拖入目标对象范围
        - ondragover：源对象在目标对象范围中悬停或移动
        - ondragleave：源对象离开目标对象范围时
        - ondrop：源对象被放置到目标对象中时
        - 其中前三个相对于源对象，后4个相对于目标对象
        - [demo:h5拖放事件检测](https://seven-it.github.io/HTML-notebook/html-demo/h5拖放.html)
    - 拖放中的事件对象
        - 在event对象中h5定义了一个新的对象属性
        - event.dataTransfer { }
        - 功能：用于在源对象和目标对象的事件间传递数据
    - 如何在拖动的源对象事件和目标对象事件间传递数据
        - 在event.dataTransfer这个新对象中有两个方法
        - setData(key,value);
            - 该方法用于在源对象事件中保存数据，key,val必须是string类型
        - getData(key);
            - 该方法用于在目标对象事件中读取设置好的数据，获取的值就是set方法中设置的value值
        - [demo：h5拖放demo2](https://seven-it.github.io/HTML-notebook/html-demo/h5拖放-demo2.html)
    - [demo:h5拖放demo1](https://seven-it.github.io/HTML-notebook/html-demo/h5拖放-demo1.html)
    - [demo:h5拖放demo3](https://seven-it.github.io/HTML-notebook/html-demo/h5拖放-demo3.html)
