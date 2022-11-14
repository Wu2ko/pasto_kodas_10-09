import form from "./form.js"

const  renderForm = ()=>{
    let formElement = document.createElement('form');
    formElement.className = 'form-inline';
    formElement.innerHTML = form();
    document.querySelector('.container .card-body').appendChild(formElement)
}
export default renderForm