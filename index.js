function getFirstSelector(selector){
  var result = document.querySelector(selector);
  return result
}

function nestedTarget(){
  var result = document.getElementById('nested').target
  var result1 = result.getElementsByClassName('target')
  return result
}
