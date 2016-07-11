// .js-search-clear
// .js-filter-input
// .js-filter
//.js-filter-bar


var $searchClear = document.querySelector(".js-search-clear");
var $filterInput = document.querySelector(".js-filter-input");
var $filters = document.querySelectorAll(".js-filter");


// this block adds a class once a filter is selected

var setFilterState = function (value) {
  $filters.forEach(function ($f) {
    var filterValue = $f.innerText;
    var cl = $f.classList;
    if (value === filterValue) {
      if (!cl.contains('js-filter-selected')){
        cl.add("js-filter-selected");
      }
    } else {
      cl.remove("js-filter-selected");
    }
  });
}

var searchValue = "";

// this block handles changes to the input
var handleInputChange = function() {
  searchValue = $filterInput.value;
  var cl = $searchClear.classList;
  console.log(searchValue)
  if (searchValue === "") {
    if (!cl.contains('xs-hide')){
      cl.add("xs-hide");
    }
  } else {
    cl.remove("xs-hide");
  }
  setFilterState(searchValue);
}

$filterInput.addEventListener("change", handleInputChange);
$filterInput.addEventListener("keyup", handleInputChange);

// this block handles clicks on the clear icon

var handleClearClick = function () {
  $filterInput.value = "";
  handleInputChange();
}

$searchClear.addEventListener("click", handleClearClick)

// this block handles filter click input behavior 

$filters.forEach(function ($f) {
  var filterValue = $f.innerText;

  var handleFilterClick = function () {
    $filterInput.value = filterValue;
    handleInputChange();
  }

  $f.addEventListener("click", handleFilterClick);
});


