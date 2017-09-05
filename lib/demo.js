// const demoListItems = demoList.querySelector('li');
const addTodoButton = window.$l('#add-todo');

function addTodo() {
  const ul = window.$l('ul');
  const li = window.$l.create('li');
  const p = window.$l.create('p');
  const input = window.$l('input');
  p.html(input.array[0].value);
  li.addClass('todo-item');
  li.append(p);


  return p.html() === "" ? alert('Field can\'t be blank') : ul.append(li);
}


function demoRemove(){
 window.$l(event.target).parent().remove();
}

const removeAllTodos = () => {
  window.$l('ul').empty();
};


window.$l(() => {
  console.log('loaded');
  window.$l('#add-todo').on('click', addTodo);
  window.$l('#remove-todos').on('click', removeAllTodos);
 // $l('p').on('click', function (){
 //   alert('monies');
 // });
});
