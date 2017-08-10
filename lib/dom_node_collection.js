
class DOMNodeCollection {
  constructor(array) {
    this.array = array;
  }

  empty() {
    this.html("");
  }

  remove() {

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

  find() {

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

  }
}

module.exports = DOMNodeCollection;
