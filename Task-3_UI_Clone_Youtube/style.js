function searchVideo() {
  let input = document.getElementById("searchInput").value;

  if(input === "") {
    alert("Please enter something to search");
  } else {
    alert("You searched for: " + input);
  }
}