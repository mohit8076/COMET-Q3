// function Add(a,b){
//     return a+b;
// }

// let res = Add(2,3);
// console.log(res);


// function Addition(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     }
// }

// let res = Addition(2);
// let data = res(2);
// let data1 = data(2);
// console.log(data1);


// function Addition(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     }
// }

// let res = Addition(2)(3)(5);
// console.log(res);

//Practical Usecase

const list = [
    {
      id: 1,
      name: 'Steve',
      email: 'steve@example.com',
    },
    {
      id: 2,
      name: 'John',
      email: 'john@example.com',
    },
    {
      id: 3,
      name: 'Pamela',
      email: 'pam@example.com',
    },
    {
      id: 4,
      name: 'Liz',
      email: 'liz@example.com',
    },
  ];

// const noJohn = list.filter(item => item.name !== 'John');
// console.log(noJohn);

// const filterByName = (list, name) => {
//     return list.filter(item => item.name !== name);
//   }
  
//   console.log(filterByName(list, 'John'));

const filtering = (name) => (item) => item.name !== name;

const filterByName = (list, name) => {
  return list.filter(filtering(name));
}

console.log(filterByName(list, 'John'));

