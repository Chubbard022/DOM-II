// Your code goes here
// mouseover
// keydown
// wheel
// drag / drop
// load
// focus
// resize
// scroll
// select
// dblclick
//------------------------------------------------------------------
//setting all anchor tags to preventDefault
const allNav = document.querySelector('a')
for(let i=0;i<allNav.length;i++){
    allNav[i].addEventListener('click',(e)=>{
        e.preventDefault()
    })
}
//------------------------------------------------------------------
//example of bubbling events
const textBox = document.querySelector('.text-content')
textBox.addEventListener('click', (e)=>{
    //e.target.style.backgroundColor = 'yellow';
    console.log('whole div clicked')
    e.stopPropagation()
})

const innerHeader = document.querySelector('.text-content h2')
innerHeader.addEventListener('click',(e)=>{
    console.log('clicked header')
    e.stopPropagation()
})
//------------------------------------------------------------------
//(1)
let biggerNav = document.querySelector('nav')
biggerNav.addEventListener('dblclick',(e)=>{
    e.target.style.fontSize = '3rem'
    //e.stopPropagation()
})

//(2)
let biggetCursor = document.querySelector('p')
biggetCursor.addEventListener('mouseover',(e)=>{
    e.target.style.backgroundColor = 'purple'
   // e.stopPropagation()
})
//(3)
let input = document.querySelector('input')
input.addEventListener("select", (e)=>{
    e.target.style.backgroundColor = 'purple'
  })
//(4)
const header = document.querySelector('header')
header.addEventListener('mousemove',(e)=>{
   // e.target.style.backgroundColor = 'red';
})
//(5)
const textParagraph = document.querySelector('.text-content:nth-child(2) p')
textParagraph.addEventListener('wheel',(e)=>{
    e.target.style.fontSize = '3rem' 
})
//(6)
let newP = document.querySelector('.text-content p') 
//newP.onLoad(alert('paragraph has loaded'))

//(7)
input.addEventListener('focus',(e)=>{
    e.target.style.backgroundColor = 'yellow'
})
//(8)
const details = document.querySelector('details')
details.addEventListener('toggle',(e)=>{
    alert('this is a detail')
})
//(9)
let webpage = document.querySelector('.content-destination h2');
console.log(webpage)
webpage.addEventListener('mouseup',(e)=>{
    e.target.style.color = 'red'
})
//(10)
const textContent = document.querySelectorAll('.text-content');

document.addEventListener('wheel', (e)=>{
     for(let i = 0; i<textContent.length; i++){
       // textContent[i].style.background = 'red';
     }

});