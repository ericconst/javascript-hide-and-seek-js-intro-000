function getFirstSelector(selector){
  var result = document.querySelector(selector);
  return result
}

function nestedTarget(){
  var result = getElementById('nested')
  result = result.target
  return result
}
