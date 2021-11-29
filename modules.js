function module(){
  const msg = 'hello'
  function addNumber (){
    console.info('maddNumber'+msg)
  }
  function mul(){
    console.info('mmul')
  }
  return {
    addNumber:addNumber,
    mul:mul
  }
}