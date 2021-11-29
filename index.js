// function fn(){
//   var a = 1
//   function fn2(){
//     console.info('a',a)
//   }
//   return fn2
// }
// var fn1 = fn()
// fn1()

// function fun(n,o){
//   console.log(o)
//   return {
//     fun:function(m){
//       return fun(m,n)
//     }
//   }
// }
// var a = fun(0)// undefined
// a.fun(1)//0
// a.fun(2)//1
// a.fun(3)//2

// var b = fun(0).fun(1).fun(2).fun(3)//undefined,

// var c = fun(0).fun(1) //undefined,0
// c.fun(2)
// c.fun(3)

// function Super(){

// }
// Super.prototype.hello = function(){
//   console.info('hello')
// }

// function Sub(){

// }

// Sub.prototype = new Super()
// Sub.prototype.constructor = Sub

// var sub = new Sub()
// sub.hello()

// setTimeout(function(){
//   console.info('setTimeout')
// },2000)
// alert('alert')
// console.info('hello')

console.info('indexthis--->',this)
var worker = new Worker('worker.js')
worker.onmessage = function(event){
  console.log('index-->',event)
}
worker.postMessage('hello')