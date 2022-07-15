// //shallow copy
// const a = {
//     en: 'Hello',
//     de: 'Hallo',
//     es: 'Hola',
//     pt: 'Olà'
//   }
//   let b = a
//   b.pt = 'Oi'
//   console.log(b.pt)
//   console.log(a.pt) 

// //deep copy by spread operator
// const lang = {
//     en: 'Bye',
//     de: 'Tschüss'
//   }
//   let b = {...lang}
//   b.de = 'Ciao'
//   console.log(b.de)
//   console.log(lang.de)

// //deep copy by object.assign

// const Lang1 = {
//     en: 'Bye',
//     de: 'Tschüss'
//   }
//   let b = Object.assign({}, Lang1)
//   b.de = 'Ciao'
//   console.log(b.de)
//   console.log(Lang1.de)

// // In nested array and object we would ended up as doing shallow copy while using above technique
// const category = {
//     foods: {
//       dinner: 'Pasta'
//     }
//   }
//   let b = {...category}
//   b.foods.dinner = 'Soup' // changes for both objects
//   console.log(b.foods.dinner)
//   console.log(category.foods.dinner)



//   const Cat1 = {
//     foods: {
//       dinner: 'Pasta'
//     }
//   }
//   let b = {foods: {...Cat1.foods}}
//   b.foods.dinner = 'Soup'
//   console.log(b.foods.dinner)
//   console.log(Cat1.foods.dinner)




//Stringify object and then parsing it.
  const a = {
    foods: {
      dinner: 'Pasta'
    }
  }
  let b = JSON.parse(JSON.stringify(a))
  b.foods.dinner = 'Soup'
  console.log(b.foods.dinner) // Soup
  console.log(a.foods.dinner) // Pasta