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
//example of bubbling events
const textBox = document.querySelector('.text-content')
textBox.addEventListener('click', (e)=>{
    //e.target.style.backgroundColor = 'yellow';
    console.log('whole div clicked')
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


//------------------------------------------------------------------
//setting all anchor tags to preventDefault
const allNav = document.querySelectorAll('a')
for(let i=0;i<allNav.length;i++){
    allNav[i].addEventListener('click',(e)=>{
        e.preventDefault()
    })
}
