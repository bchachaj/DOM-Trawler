const DOMNodeCollection = require('./dom_node_collection');

document.addEventListener("DOMContentLoaded", loadCallback);

loaded = false;

functionQueue = [];

function loadCallback (event) {
  functionQueue.forEach((el) => {
    el();
  });
}

window.$l = function(arg) {
  let DOMinstance;
  if(typeof arg === "string") {
    const elements = document.querySelectorAll(arg);
    const arrayIter = elements.values();
    const array = Array.prototype.slice.call(elements);
    DOMinstance = new DOMNodeCollection(array);
  } else if(arg instanceof HTMLElement){
    const el = [arg];
    DOMinstance = new DOMNodeCollection(el);
  } else if( typeof arg === "function" ){
    if(loaded) {
      arg();
    } else {
      functionQueue.push(arg);
    }
  }

  return DOMinstance;
};

 $l(() => {

  // $l('p').on('click', function (){
  //   alert('monies');
  // });
 });
