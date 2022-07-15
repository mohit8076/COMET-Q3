//Debouncing
let counter = 0;
const getData = () => {
  console.log("Fetching Data ..", counter++);
}

const debounce = function (fn, d) {
  let timer;
  return function(...args){
    if(timer) clearTimeout(timer);
    setTimeout(() => {
        fn();
    }, d);
  }
}

const betterFunction = debounce(getData, 1000);