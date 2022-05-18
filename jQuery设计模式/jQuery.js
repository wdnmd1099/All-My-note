window.$ = window.jQuery = function(selectorOrArray) {
    let elements;
    if (typeof selectorOrArray === "string") {
        elements = document.querySelectorAll(selectorOrArray);
    } else if (selectorOrArray instanceof Array) {
      elements = selectorOrArray;
    }

    const api = {
        __proto__: jQuery.prototype,  
        elements: elements, 
        oldApi:selectorOrArray.oldApi}
    return api
  };
  
  jQuery.fn = jQuery.prototype = {
    constructor: jQuery,
   find(selector) {
    let array = [];
    for (let i = 0; i < this.elements.length; i++) {
      const elements2 = Array.from(this.elements[i].querySelectorAll(selector));
      array = array.concat(elements2);
    }
    oldApi = this; 
    return jQuery(array);
    },
    addClass(className) {
      for (let i = 0; i < this.elements.length; i++) {
        const element = this.elements[i];
        element.classList.add(className);
      }
      return this;
    },
    end() {
      return this.oldApi; 
    },
  };

