function getFirstSelector(selector){
  var result = document.querySelector(selector);
  return result
}

function nestedTarget(){
  var result = document.getElementById('nested').querySelector('.target')
  return result
}

function increaseRankBy(n){
  const main = document.querySelectorAll('.ranked-list li');
  for (let i=0; i< main.length ; i++){
    var x = parseInt(main[i].innerHTML, 10)
    x = x + n
    main[i].innerHTML = x
  }
}

parseInt(`${main[i].innerHTML}`, 10) + n;
