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

window.$l.extend = function(...args) {
  let obj = args[0];
  args.slice(1).forEach((el) => {
    for(let i in el) {
      obj[i] = el[i];
    }
  });
  return obj;
};

window.$l.ajax = function(options) {
  let defaults = {
    success: '',
    error: '',
    url: '',
    type: '',
    data: '',
    contentType: ''
  };
  $l.extend(defaults, options);

  const xhr = new XMLHttpRequest();

  xhr.open(defaults.type, defaults.url);

  xhr.onload = function() {
    console.log(xhr.status); // for status info
    if(xhr.status === 200) {
      defaults.success();
    } else {
      defaults.error();
    }
    console.info(xhr.responseType); //the type of data that was returned
    console.warn(xhr.response); //the ac
  };

  xhr.send();

};


 $l(() => {

  // $l('p').on('click', function (){
  //   alert('monies');
  // });
 });
