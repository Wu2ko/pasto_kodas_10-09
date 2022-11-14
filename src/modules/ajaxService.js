const ajaxService = (term)=>{
    const url = "https://api.postit.lt/?term="
    const key = "j4loc5l3xiYUkomGMQdQ"
    return fetch(`${url}${term}&key=${key}`)
        .then(response =>response.json())
}

export default ajaxService