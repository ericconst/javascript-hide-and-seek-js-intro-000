function getFirstSelector(selector){
  var result = document.querySelector(selector);
  return result
}

function nestedTarget(){
  var result = document.getElementById('nested')
  return result.querySelector('.target')
}
