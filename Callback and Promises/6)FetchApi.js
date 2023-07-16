// 6. Fetch results asynchronously.
// Write a function that asynchronously fetches data from an API
// [ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.

async function fetchApi(){
    const respone = await fetch('https://jsonplaceholder.typicode.com/todos/1 ');
    const data = await respone.json();
    console.log(data);
}

fetchApi();