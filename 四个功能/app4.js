import "./app4.css"

const $Yuan = $('#Yuan')

$Yuan.on('mouseenter', ()=>{
  $Yuan.addClass('active')
}).on('mouseleave', ()=>{
  $Yuan.removeClass('active')
})