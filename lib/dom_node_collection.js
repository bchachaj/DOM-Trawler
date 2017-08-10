
class DOMNodeCollection {
  constructor(array) {
    this.array = array;
  }

  empty() {
    this.html("");
  }

  remove(selector) {
      if(selector) {
        this.array.forEach((el) => {
          const elements = Array.prototype.slice.call(el.querySelectorAll(selector));
          elements.forEach((el2) => {
            el2.remove();
          });
        });
      } else {
        this.array.forEach((el) => {
          el.remove();
        });
      }
  }

  attr(attribute, attributeVal) {
    if (attributeVal === undefined) {
      const nodeAttributes = [];
      this.array.forEach((el) =>{
        nodeAttributes.push(el.getAttribute(attribute));
      });

      return nodeAttributes;
    } else {
      this.array.forEach((el) =>{
        el.setAttribute(attribute, attributeVal);
      });
    }
  }

  addClass(className) {
    this.array.forEach((el) =>{
      el.classList.add(className);
    });
  }

  removeClass(className) {
    this.array.forEach((el) =>{
      el.classList.remove(className);
    });
  }

  append(element) {
    if(typeof element === "string") {
      this.array.forEach((el)=>{
        el.innerHTML += element;
      });
    } else if (element instanceof HTMLElement){
      this.array.forEach((el)=>{
        el.innerHTML += element.outerHTML;
      });
    } else {
      this.array.forEach((arrayEl)=>{
        element.array.forEach((appendEl) => {
          arrayEl.innerHTML += appendEl.outerHTML;
        });
      });
    }
  }

  html(strings) {
    const firstNode = this.array[0];
    if(strings !== undefined){
      this.array.forEach((el)=>{
        el.innerHTML = strings;
      });
    } else {
      return firstNode.innerHTML;
    }

  }

  find(selector) {
    let container = [];
    this.array.forEach((el) => {
      let elements = el.querySelectorAll(selector);
      container = container.concat(Array.prototype.slice.call(elements));
    });
    return new DOMNodeCollection(container);
  }

  children() {
    const childArray = [];
    this.array.forEach((node) => {
      let childrenNodes = node.children;

      for (var i = 0; i < childrenNodes.length; i++) {
        childArray.push(childrenNodes[i]);
      }
    });
    return new DOMNodeCollection(childArray);
  }

  parent() {
    const parentArray = [];
    this.array.forEach((node) => {
      parentArray.push(node.parentNode);
    });

    return new DOMNodeCollection(parentArray);
  }

  on (type, callback) {
    this.array.forEach((el) => {
      el.addEventListener(type, callback);
      el.callback = callback;
    });
    // this.attr('callback', callback);
  }

  off(type) {
    this.array.forEach((el) => {
      el.removeEventListener(type, el.callback);
    });
  }
}

module.exports = DOMNodeCollection;
