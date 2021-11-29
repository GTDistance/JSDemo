var onmessage = function(event){
  console.info('worker-->',event,this)
  setTimeout(function(){
    postMessage('小姑凉我来了')
  },5000)
}
