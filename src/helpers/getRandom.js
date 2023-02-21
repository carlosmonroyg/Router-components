const getRandomInt = () => {
  return new Promise((resolve) => {
    const rndInt = Math.floor(Math.random() * 20) + 1;
    console.log(rndInt,"esto llega al random")
    setTimeout(() => {
      resolve(rndInt);
    }, 1000);
  });
};
export {getRandomInt} 
