/**
 * async await
 */
const getApi = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const users = await res.json();
  console.log(users);
};

// getApi();

const getUsers = () => {
  fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
    return console.log(res.json());
  });
};

getUsers();
