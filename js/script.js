$(document).on('click.bs.collapse.data-api touchstart.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) { 
});

var io = new IntersectionObserver(
    entries => {
        console.log(entries);
    },
    {
       
    }
);
io.observe(element);

function searchForBooks() {
  // Declare variables
  var filter, bookList, title;
  var search = $('#search');

  filter = search.val().toUpperCase();
  bookList = document.getElementsByClassName("well");
  console.log(bookList);

  //clear previous results to search for a second time.
  if (search.val() == ""){
    for(var i = 0; i < bookList.length; i++) {
      bookList[i].style.display = "";
    }
  }
  
  // Loop through all list items, and hide those who don't match the search query
  for (var i = 0; i < bookList.length; i++) {
    title = bookList[i].innerText;
    if (title.toUpperCase().indexOf(filter) >= 0) {
      console.log(bookList[i]);
    } else {
      bookList[i].style.display = "none";
    }
  }
}
