//navButton

const navButton = document.getElementsByClassName("navButton")[0];
const logotext = document.getElementById("logoText");


const headNav = document.getElementById("headNav");
const btn = document.getElementsByClassName("btn");
function addStyleTo() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
      btn[i].style.backgroundColor = "blue";
      btn[i].style.color === "#000";
      setTimeout(() => {
        btn[i].style.backgroundColor = "#CC2812";
        btn[i].style.color === " ";
      }, 200);
    });
  }
}
//show menu
function showMobilemenu() {    
  let show = document.getElementById('headNavMobile')
  if (show.style.display === 'block') {
      show.style.display = 'none'
  } else {
      show.style.display = 'block'
  }
}





// logotext.onclick = () =>{
//     if (logotext.style.color ==='#FEA800') {
//        logotext.style.backgroundColor = 'blue'
//     } else {
//         logotext.style.backgroundColor = '#FEA800'
//     }
// }

// function printMyName() {
//   console.log('Adham')
// }
// console.log('Start')
// setTimeout(
//   printMyName
// , 3000);

// const a= 5;
// function myFn() {
//   function innerFn() {
//     console.log(a)
//   }
//   innerFn()
// }

// myFn();

// let a
// let b

// function myFn() {
//   let b
//   a=5
//   b=2
//   console.log(b)
// }
// myFn()
// console.log(a)
// console.log(b)

// const dbutton = {
//   width: 230,
//   text: 'Body'
// }

// const redButton = {
//   ...dbutton,
//   color: 'red',
//   width: 300
// }

// const greenbtn = {
//   ...dbutton,
//   ...redButton,

// }

// console.log(greenbtn)

// const myName = 'Adham'
// const myCity = 'Dushanbe'

// const myInfo = `My name is ${myName} and my city is ${myCity}`

// console.log(myInfo)

// const a = 10
// const b = 42

// const c =  `a =  ` + ` b = ${b}  ` +  ` a + b = ${a + b} `

// console.log(c)

// const mul = (a,b) => a + b
// console.log(mul(2))

// const newPost = (post, addedAt= Date()) => ({
//   ...post,
//   addedAt,
// })

// const firstPost = {
//   id: 1,
//   author: 'Adham',
// }

// const posts = newPost(firstPost)

// console.log(posts)
// const fnWithError = () => {
//   throw new Error('Some error')
// }
// try {
//   fnWithError()
// } catch (error) {
//   console.error(error)
//   console.log(error.message)
// }

// console.log('Çontinue......')

// const userProfile = {
//   name: 'Adham',
//   commentsQty: 24,
//   hasSignedArgument: false,
// }

// const userInfo = ({name, commentsQty}) =>{
//   if (!commentsQty) {
//     return `User ${name} has no comments`
//   }

//   return `User ${name} has ${commentsQty} comments`
// }

// console.log(userInfo(userProfile))
// const person = {
//   name: 'Adham',
//   age: 24
// }

// if (person.name) {
//   // console.log('Name is undefined')
//   console.log(`Name is ${person.name}`)
// } else {
//   console.log(`Name is ${person.name}`)
// }
//Ternar Operetor
// const val =43

// val
// ? console.log(`Usloviya istino val is ${val}`)
// : console.log('Usloviya loj ')
