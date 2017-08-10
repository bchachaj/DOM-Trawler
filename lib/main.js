const DOMNodeCollection = require('./dom_node_collection');

window.$l = function(arg) {
  let DOMinstance;
  if(typeof arg === "string") {
    const elements = document.querySelectorAll(arg);
    const arrayIter = elements.values();
    const array = Array.prototype.slice.call(elements);
    DOMinstance = new DOMNodeCollection(array);
  }
  if(arg instanceof HTMLElement){
    const el = [arg];
    DOMinstance = new DOMNodeCollection(el);
  }

  return DOMinstance;
};
