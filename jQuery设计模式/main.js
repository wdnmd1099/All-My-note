console.log('main.js已启动')



const api1 = jQuery('#test') // 等于const api1 = $('#test')   #是ID .是class
api1.addClass('数组添加')


api1.find('.child').addClass('shit')
api1.end();
api1.addClass('wuhu')
$('#test').addClass('happy')


$('<div>123123</div>').appendTo(document.body)
$('<div>dfhgfhfgf</div>').appendTo($('.tennki'))

$('.tennki').append($('<div>ssssss</div>')) 

console.log($('dgfhh').jquery)

let div1=document.createElement('div')
console.log(div1)
$('.tennki').append(div1)


