(function(){
  const msg = 'hello'
  function addNumber (){
    console.info('maddNumber'+msg)
  }
  function mul(){
    console.info('mmul')
  }
  window.modules2 =  {
    addNumber:addNumber,
    mul:mul
  }
})()