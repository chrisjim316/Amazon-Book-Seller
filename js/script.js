/* making sure collapse works */
$(document).on('click.bs.collapse.data-api touchstart.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) { 
});

function searchForBooks() {
  // Declare variables
  var filter, bookList, title;
  var search = $('#search');

  filter = search.val().toUpperCase();
  bookList = document.getElementsByClassName("well");
  //console.log(bookList);

  //clear previous results to search for a second time.
  if (search.val() == ""){
    for(var i = 0; i < bookList.length; i++) { 
      bookList[i].style.display = "";
    }
  }
  
  search.keypress(function (e) {
    /* when enter key is pressed */
    if (e.which == 13) {
      return false; //prevent refreshing the page every time enter key is pressed. 
    }
  });
  
  // Loop through all list items, and hide those who don't match the search query
  for (var i = 0; i < bookList.length; i++) {
    title = bookList[i].innerText;
    if (title.toUpperCase().indexOf(filter) == -1) {
      bookList[i].style.display = "none";
    }
  }
}
