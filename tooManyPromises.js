const posts = [
    { title: 'Post One' },
    { title: 'Post Two' },
  ];
  
  let lastActivityTime = new Date();
  
  function getPosts() {
    setTimeout(() => {
      let output = '';
      posts.forEach((post) => {
        output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
    }, 1000);
  }
  
  function createPost(post) {
      
    return new Promise((resolve) => {
      setTimeout(() => {
        posts.push(post);
        lastActivityTime = new Date();
        resolve();
      }, 2000);
    });
       
  }
  
  
  function deleteLastPost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (posts.length > 0) {
          const deletedPost = posts.pop();
          resolve(deletedPost);
        } else {
          reject('No posts to delete.');
        }
      }, 1000);
    });
  }
  
  function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(lastActivityTime);
      }, 1000);
    });
  }
  
  function main() {
    createPost({ title: 'Post Three'})
      .then(() => updateLastUserActivityTime())
      .then((lastActivityTime) => {
        console.log('Posts:', posts);
        console.log('Last Activity Time:', lastActivityTime);
        return deleteLastPost();
      })
      .then((deletedPost) => {
        console.log('Deleted Post:', deletedPost);
        console.log('New Posts:', posts);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  main();
  
