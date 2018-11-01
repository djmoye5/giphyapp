// READ the giphy API docs: https://developers.giphy.com/
// select elements and create variables
var giphy_endpoint = 'http://api.giphy.com/v1/gifs/search'
var API_KEY = "AcI1zjz9DCsed8lv7B8q0fJKkeJ6wEpl";
var searchForm = document.querySelector("#search-form");
var searchInput = searchForm.querySelector("input");
var results = document.querySelector(".results");

// += means add to
// = means replace
// ="" means empty out
// define our functions
// parameters are variables that are used within a function and map out how the information is used inside the function
function getGifs(){
    results.innerHTML = "";
    // searchInput.value is my search bar value
    // console.log(searchInput.value);
    fetch(`${giphy_endpoint}?api_key=${API_KEY}&q=${searchInput.value}`)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
        // data.data[0].images.preview_gif.url
      console.log(data);
      for(var i=0; i<data.data.length; i++){
      results.innerHTML += `
      <img class="image" src="${data.data[i].images.preview_gif.url}">
      `
      }
    })
    .catch(function(err){
        console.log("There was an error!");
    })
}



// add event listeners and call functions

searchForm.addEventListener('submit', function(event){
    event.preventDefault();
    getGifs();
})



