function getFirstSelector(selector){
  var result = document.querySelector(selector);
  return result
}

function nestedTarget(){
  var result = document.getElementById('nested').querySelector('.target')
  return result
}

function increaseRankBy(n){
  const main = document.querySelectorAll('.ranked-list');
  for (let i=0; i< main.length ; i++){
    main[i].innerHTML = main[i].innerHTML.parseInt() + n
  }
}

parseInt(`${main[i].innerHTML}`, 10) + n;