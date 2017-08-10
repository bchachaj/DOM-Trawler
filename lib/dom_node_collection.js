
class DOMNodeCollection {
  constructor(array) {
    this.array = array;
  }

  empty() {
    this.html("");
  }

  remove() {

  }

  attr(lelp, help) {
    // if help it means we're changing all the lelp attributes
    // else we are just reading them
    const nodeAttributes = [];
    this.array.forEach((el) =>{
      nodeAttributes.push(el.attributes.getNamedItem(lelp));
    });
    return nodeAttributes;
  }

  addClass() {

  }

  removeClass() {

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

  }

  parent() {

  }
}

module.exports = DOMNodeCollection;
