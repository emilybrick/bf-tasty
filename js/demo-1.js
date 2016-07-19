// .js-search-clear
// .js-filter-input
// .js-filter
//.js-filter-bar


var $searchClear = document.querySelector(".js-search-clear");
var $filterInput = document.querySelector(".js-filter-input");
var $filters = document.querySelectorAll(".js-filter");
var _selected_filter;
// filter clicked, input value changes to filter's name
$filters.forEach(function ($f){
  $f.onclick = function(){
    // makes sure only one filter is selected at a time
    if(_selected_filter){
      _selected_filter.classList.remove("js-filter-selected")
    }
    _selected_filter = $f;
    _selected_filter.classList.add("js-filter-selected")
    $filterInput.value = $f.innerText;
    document.getElementById('mock-result-img').src = "images/" + $f.innerText + ".png";
    $searchClear.classList.remove("xs-hide")
  }
})

// this block handles clicks on the clear icon
$searchClear.onclick = function () {
  $searchClear.classList.add("xs-hide");
  if (_selected_filter){
    _selected_filter.classList.remove("js-filter-selected");
  }
  $filterInput.value = "";
  document.getElementById('mock-result-img').src = "images/all-tasty.png";
}

// this block handles input changes
$filterInput.onkeyup = function (){
  if($filterInput.value === ""){
    $searchClear.classList.add("xs-hide");
  }
  else{
    if(_selected_filter){
      _selected_filter.classList.remove("js-filter-selected")
    }
    $searchClear.classList.remove("xs-hide");
  }
  
}
