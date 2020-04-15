




function displayResults(responseJson){

  for(let i = 0; i < responseJson.length;i++){
  
    $('#results-list').append(
      `<li><h3>${responseJson[i].name}</li></h3>
      <li><h3>${responseJson[i].html_url}</li></h3>
    `)}
};



function gitApiCall(searchTerm) {
  fetch(`https://api.github.com/users/${searchTerm}/repos`)
    .then(response => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }
      // DISPLAY ERRORS if the server connection works but the json data is broken
      throw new Error(response.statusText);
    })
    .then(responseJson => 
      displayResults(responseJson))
   .catch(error => console.log('Something went wrong. Try again later.',error));
};

//responseJson[i].name

function clearHTML(){
  $('#results-list').html('');
}


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const searchTerm = $('#js-search-term').val();
    console.log(searchTerm);
    clearHTML();
    gitApiCall(searchTerm);
  });
}

$(watchForm);

//User enters name into form (make sure form works)
//watch for submit button
//save search input into variable
//add variable to fetch URL
//fetch
//check for error
//send results to DOM