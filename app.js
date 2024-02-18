const btn = document.querySelector('button')
const mydiv  = document.querySelectorAll("#mydiv")

const rand1  = ()=>{
    return Math.floor(Math.random()*60)+20
}
const rand2 = ()=>{
    return Math.floor(Math.random()*30)+40
}
// console.log(rand())

// const 

btn.addEventListener('click',changePosition = ()=>{
    // console.log(rand())
    // console.log(rand())
    mydiv.forEach((x)=>{
        x.style.left = `${rand1()}%`
        x.style.top = `${rand2()}%`
    })
})