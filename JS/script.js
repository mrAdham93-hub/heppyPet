// const animItems = document.querySelectorAll('.active')

// if (animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll)
//     function animOnScroll() {
//         for (let index = 0; index < animItems.length; index++) {
//             const animItem = animItems[index];
//             const animItemHeight = animItems.offsetHeight
//             const animItemOffset = offset(animItem).top
//             const animStart = 4

//             let animItemPoint = window.innerHeight -animItemHeight / animStart
//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight -window.innerHeight / animStart
//             }
//              if((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)){

//                 animItem.classList.add('active')
//              }else{
//                 animItem.classList.remove('active')
//              }

//         }
//     }

//     function offset(el) {
//         const rect = el.getBoundingClientRect(),
//             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop
//         return {top: rect.top + scrollTop, left: rect.left + scrollLeft}

//     }
//     //
// }
// animOnScroll();

// function dividerNumber(number) {

//         const numbers = []

//         for (let i = 1; i < number; i++) {
//            if (number % i === 0 ){
//                  numbers.push(i)
//            }
//         }

//         return numbers
// }

// console.log(dividerNumber(87))

// let a = 4
// let b = 6
// [a, b]

let data = [
  {
    id: 1,
    name: "John",
    age: 26,
  },
  {
    id: 2,
    name: "Doe",
    age: 23,
  },
];
function toDo() {
  let person = [];

  function addToDo() {

    person.push(...data, {id: 3, name: "Max", age: 29});
    
    return person
  }
  function del() {
      let perData = person.pop()
      return perData
  }
  
  function info() {
      return person

  }

  return {
    added: addToDo,
    delete: del,
    inf: info
  
  };
}

let add = toDo();
console.log(add.added());
console.log(add.delete());
console.log(add.inf());

// function makeConter() {
//     let count = 0
//     return function () {
//         return count++
//     }
// }

// let counter = makeConter()

// console.log(counter());
