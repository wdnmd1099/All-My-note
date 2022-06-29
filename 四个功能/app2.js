import "./app2.css"


const $div1 = $('#n1')
const $div2 = $('#n2')
console.log($div2)

$div1.on('click',()=>{
    console.log('我日')
    $div2.attr('style','background-color:rgba(0,0,0,0)')
    $div1.attr('style','background-color: rgb(253, 221, 155)')
    $('#nr1').text('内容1')
})

$div1.trigger('click')

$div2.on('click',()=>{
    console.log('我日')
    $div1.attr('style','background-color:rgba(0,0,0,0)')
    $div2.attr('style','background-color: rgb(253, 221, 155)')
    $('#nr1').text('内容2')
})