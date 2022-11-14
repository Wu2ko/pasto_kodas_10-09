import ajaxService from "./ajaxService";

const searchCode = () => {
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const searchTerm = document.querySelector('.term').value;




    console.log(searchTerm);


    let searchResponse;
    ajaxService(searchTerm)
      .then(result => searchResponse = result)
      .then(() => console.log(searchResponse))
      .then(() => {
        /////////check if movie found
        if (searchResponse.Error) {
          document.querySelector('.term').value = "";
          window.alert("Movie not found, please try again.")
          /////////////missing poster could be replaced with generic img here
          if (searchResponse.Poster.value == "N/A") {
            console.log("*********no poster*********")//
          }
        }///////////continue if found
        else {
          document.querySelector('.resultTitle').value = searchResponse.Title
          document.querySelector('.resultRelease').value = searchResponse.Released
          //if full date unavailable
          if (searchResponse.Released == "N/A") {
            document.querySelector('.resultRelease').value = searchResponse.Year
            console.log("*********no full date*********")
          }///////////
          document.querySelector('.resultRuntime').value = searchResponse.Runtime
          document.querySelector('.resultGenre').value = searchResponse.Genre
          document.querySelector(".resultPoster").src = searchResponse.Poster

          // document.querySelector('.resultFull').value = searchResponse.Genre


          for (let key in searchResponse) {
            console.log(`${key}:${searchResponse[key]}`)
///from mdn
            const fragment = document.querySelector('.resultFull');
            const li = fragment.appendChild(document.createElement('div'));
            li.className = `${key} col-4 flex mb-3 keyForCss form-control`;
            li.textContent = `${key}: ${searchResponse[key]}`;
            
            document.body.appendChild(fragment);


          }

        }

      })



  })
}

export default searchCode