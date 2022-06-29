import "./app1.css"

let $jia = $('#jiaHao')
let $jian = $('#jianHao')
let $chu = $('#chuHao')
let $cheng = $('#chengHao')
let n = parseInt(localStorage.getItem('n'))
$('#shuZi').text(n)


$jia.on('click',()=>{
   n+=10;
    $('#shuZi').text(n)
    localStorage.setItem('n',n)
})

$jian.on('click',()=>{
    n-=10;
    $('#shuZi').text(n)
    localStorage.setItem('n',n)
})

$chu.on('click',()=>{
    n/=2;
    $('#shuZi').text(n)
    localStorage.setItem('n',n)
})

$cheng.on('click',()=>{
    n*=2;
    $('#shuZi').text(n)
    localStorage.setItem('n',n)
})
