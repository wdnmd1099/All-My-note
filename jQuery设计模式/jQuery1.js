//这是课件完全体


window.$ = window.jQuery = function(selectorOrArrayOrTemplate) {
    let elements;
    if (typeof selectorOrArrayOrTemplate === "string") {
      if (selectorOrArrayOrTemplate[0] === "<") {  //Template是可以包含所有标签的容器
        // 创建 div
        elements = [createElement(selectorOrArrayOrTemplate)];
      } else {
        // 查找 div
        elements = document.querySelectorAll(selectorOrArrayOrTemplate);
      }
    } else if (selectorOrArrayOrTemplate instanceof Array) {
      elements = selectorOrArrayOrTemplate;
    }
  
    function createElement(string) {
      const container = document.createElement("template");
      container.innerHTML = string.trim();
      return container.content.firstChild;
    }
    // api 可以操作elements
    const api = Object.create(jQuery.prototype) // 创建一个对象，这个对象的 __proto__ 为括号里面的东西
    // const api = {__proto__: jQuery.prototype}
    Object.assign(api, {
      elements: elements,
      oldApi: selectorOrArrayOrTemplate.oldApi
    })
    // api.elements = elements
    // api.oldApi = selectorOrArrayOrTemplate.oldApi
    return api
  };
  
  jQuery.fn = jQuery.prototype = {
    constructor: jQuery,
    jquery: true,
    get(index) {
      return this.elements[index];
    },
    appendTo(node) { //把某元素添加到参数指定元素后面  $('<div>123123</div>').appendTo(document.body)   或者   $('<div>dfhgfhfgf</div>').appendTo($('.tennki'))
      if (node instanceof Element) {
        this.each(el => node.appendChild(el));  //appendChild(el)  el只可以是一个元素，比如div，p，ul等等标签
      } else if (node.jquery === true) {
        this.each(el => node.get(0).appendChild(el));
      }
    },
    append(children) { //将参数指定的内容插入到匹配元素每个元素的末尾。
      if (children instanceof Element) {    //Element是指一个 元素，节点，例如 <p> 和 <div>。 https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType
        this.get(0).appendChild(children);
      } else if (children instanceof HTMLCollection) {       // HTMLCollection暂时不知道是什么，估计是Element的补充形式
        for (let i = 0; i < children.length; i++) {
          this.get(0).appendChild(children[i]);
        }
      } else if (children.jquery === true) {    //只要是jQuery构造的都为true  ，比如console.log($('dgfhh').jquery)  结果为true  
          children.each(node => this.get(0).appendChild(node));   //意思就是为了走Template构造一个div（元素），因为appendCHild只能接受一个元素，而查找出来的元素是一个数组
      }                                               //所以要用$()来放标签运行   $('.tennki').append($('<div>ssssss</div>')) 
    },
    find(selector) {
      let array = [];
      for (let i = 0; i < this.elements.length; i++) {
        const elements2 = Array.from(this.elements[i].querySelectorAll(selector));
        array = array.concat(elements2);
      }
      array.oldApi = this; 
      return jQuery(array);
    },
    each(fn) {  // 遍历函数
      for (let i = 0; i < this.elements.length; i++) {
        fn.call(null, this.elements[i], i);
      }
      return this;
    },
    parent() {
      const array = [];
      this.each(node => {
        if (array.indexOf(node.parentNode) === -1) {
          array.push(node.parentNode);
        }
      });
      return jQuery(array);
    },
    children() {
      const array = [];
      this.each(node => {
        if (array.indexOf(node.parentNode) === -1) {
          array.push(...node.children);
        }
      });
      return jQuery(array);
    },
    print() {
      console.log(this.elements);
    },
    // 闭包：函数访问外部的变量
    addClass(className) {
      for (let i = 0; i < this.elements.length; i++) {
        const element = this.elements[i];
        element.classList.add(className);
      }
      return this;
    },
    end() {
      return this.oldApi;
  }}