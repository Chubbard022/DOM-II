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

//turns the background color to yellow
let highlight = document.querySelector('.content-section')
highlight.addEventListener('mouseover', (e)=>{
    e.target.style.backgroundColor = 'yellow';
    e.stopPropagation()
})

let biggerNav = document.querySelector('nav')
biggerNav.addEventListener('dblclick',(e)=>{
    e.target.style.fontSize = '3rem'
    e.stopPropagation()
})

let biggetCursor = document.querySelector('p')
biggetCursor.addEventListener('mouseover',(e)=>{
    e.target.style.backgroundColor = 'purple'
    e.stopPropagation()
})
const allNav = document.querySelectorAll('a')
for(let i=0;i<allNav.length;i++){
    allNav[i].addEventListener('click',(e)=>{
        e.preventDefault()
    })
}
// allNav.forEach((item)=>{
//     item.addEventListener('click',(e)=>{
//         Console.log('I was clicked')
//     })
// })