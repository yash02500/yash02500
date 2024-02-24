// Async await assignment

console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const addButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 3000);
  });

  const getColdDrinks =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('ColdDrinks'), 3000);
  });


  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  console.log(`got the ${ticket}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "i am hungry"`);
  
  let popcorn = await getPopcorn;
  console.log(`Husband: here is ${popcorn}`);
	console.log(`Husband:we should go in now`);
  console.log(`Wife: "I dont like popcorn without butter!"`);
  
  let butter = await addButter;
  console.log(`added ${butter}`);
   
  console.log(`Husband:Anything else darling`);
  console.log(`I want cold drinks`);

  let colddrink = await getColdDrinks;
  console.log(`Husband: here is ${colddrink}`);
  console.log(`Wife: lets go we are going to miss the preivew`);
  console.log(`Husband: thanks for the reminder *grin*`);
  
  return ticket;
  
};

preMovie().then((t) => console.log(`person3 shows ${t}`));

console.log('person4 shows ticket');



// Converted code into async await of too many promises


const posts =[
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
  
  
  async function deleteLastPost() {
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
  
  async function converted() {
    try {
      await createPost({ title: 'Post Three' });
      getPosts();
      const lastActivityTime = await updateLastUserActivityTime();
      console.log('Posts:', posts);
      console.log('Last Activity Time:', lastActivityTime);
      const deletedPost = await deleteLastPost();
      console.log('Deleted Post:', deletedPost);
      console.log('New Posts:', posts);
    } catch (error) {
      console.error(error);
    }
  }
  
  converted();
  