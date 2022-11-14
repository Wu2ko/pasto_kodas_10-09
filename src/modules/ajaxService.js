const ajaxService = (term)=>{
    const url = "https://www.omdbapi.com/?t="
    const key = "e16ebede"
    return fetch(`${url}${term}&apikey=${key}`)
        .then(response =>response.json())
        
}

export default ajaxService

