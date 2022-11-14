import ajaxService from "./ajaxService";

const searchCode = ()=> {
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();

        const searchTerm = document.querySelector('.term').value;




        console.log(searchTerm);


        let searchResponse;
        ajaxService(searchTerm)
            .then(result=>searchResponse = result)
            .then(()=>console.log(searchResponse))
            .then(()=>{

              document.querySelector('.result').value = searchResponse.data[0].post_code
            })


    })
}

export default searchCode