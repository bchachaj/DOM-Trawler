const addTodoButton = window.$l('#add-todo');


function addTodo() {
  const ul = window.$l('ul');
  const li = window.$l.create('li');
  const p = window.$l.create('p');
  const input = window.$l('input');
  let innerValue = input.array[0].value;
  p.html(innerValue);
  input.array[0].value = '';
  li.addClass('todo-item');
  li.append(p);
  li.append(addSelfDestruct());
  window.$l('.todo-delete').on('click', demoRemove);

  return p.html() === "" ? alert('Field can\'t be blank') : ul.append(li);
}

function addSelfDestruct(){
  const done = window.$l.create('button');
  done.addClass('todo-delete');
  done.html('x');
  done.on('click', () => demoRemove());
  return done;
}

const demoRemove = function(){
 window.$l(event.target).parent().remove();
};



// function testAjax(handleData) {
//
//   window.$l({
//     url: 'https://api.chucknorris.io/jokes/random',
//     method: 'GET',
//     success: function(data) {
//       handleData(data);
//     }
//   });
// }
//
// var promise  = testAjax;

// const testThis = promise.success(function(data) {
//   alert(data);
// });

const removeAllTodos = () => {
  window.$l('ul').empty();
};

window.$l('.todo-delete').on('click', function(){
  console.log('tubular');
});


const displayCode = (input) => {
  window.$l('.demo-code').html(`${input.toString()}`);
};
//bind listeners


window.$l(() => {
  window.$l('#add-todo').on('click', addTodo);
  window.$l('#add-todo').on('click', () => {
    displayCode(window.$l.create);
  });
  window.$l('#remove-todos').on('click', removeAllTodos);
  window.$l('#remove-todos').on('click', () => {
    displayCode(window.$l('#remove-todos').empty);
  });
  $('ul').on('click', '.todo-delete', demoRemove);
  $('ul').on('click', '.todo-delete', () => {
    displayCode(window.$l('ul').remove);
  });

  window.$l('.ajax-button').on('click', () => {
    console.log('nice');
  });

});
