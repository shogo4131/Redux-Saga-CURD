'use strict';

/**
 * 登録ボタン押下
 * @returns {VoidFunction}
 */
const clickAddTodo = () => {
  const todo = document.querySelector('.js-addTask-value').value.trim();

  if (!todo) return alert('todoを入力してください');

  const ul = document.querySelector('.js-addTask-target');
  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteButton = document.createElement('button');

  li.className = 'list-item';
  span.className = 'todo-item';
  span.textContent = todo;

  deleteButton.textContent = '削除';
  deleteButton.addEventListener('click', () => clickDeleteTodo(li));

  li.appendChild(span);
  li.appendChild(deleteButton);
  ul.appendChild(li);

  document.querySelector('.js-addTask-value').value = '';
};

/**
 * 削除ボタン押下
 * @param {string} list
 * @returns {VoidFunction}
 */
const clickDeleteTodo = (list) => list.remove();
