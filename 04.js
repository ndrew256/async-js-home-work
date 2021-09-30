// 4.
// You need to handle getPosts() function with Promise
// Now you need to handle getPosts() function with async/await
// receive posts and show in console, don't forget about error handling :)

function getPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts");
}

function handleGetPostsWithPromise() {
  getPosts().then((res) => {
    if (res.status === 200) {
      return res.json();
    }
    else throw new Error ("Posts can't be fetched! Try again...");
  }).then((res) => console.log(res))
  .catch((error) => console.log(`Uncaught ${error}`));
}

//handleGetPostsWithPromise()

async function handleGetPostsWithAsyncAwait() {
  try {
    let res = await getPosts();
      if (res.status === 200){
        let posts = await res.json();
        console.log(posts);
      }
      else throw new Error ("Posts can't be fetched! Try again...");
  } catch (error) {
    console.log(`Uncaught ${error}`);
  }
}

//handleGetPostsWithAsyncAwait();