//Getting world countries from restcountries.eu API

fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => initialize(data))
        .catch(err => console.log("Error: ", err));
        function initialize(data){
                //console.log(data);
                let countriesStr = data.map(a => a.name);
                //console.log(countriesStr);
                var c = document.getElementById("country");
                Array.from(countriesStr).forEach(function(list){
                  let opt = new Option(list, list);
                  c.appendChild(opt);
                })
        }

//Simple form validation without using any any frameworks, plug-ins or libraries

const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const contact = document.getElementById("contactNumber")
const addressInput1 = document.getElementById("addressInput1")
const town = document.getElementById("town")
const postcode = document.getElementById("postcode")
const countryInput = document.getElementById("countryInput")
const description = document.getElementById("description")
const form = document.getElementById("form")
const firstNameErrorInfo = document.getElementById("firstName-error-label")
const lastNameErrorInfo = document.getElementById("lastName-error-label")
const emailErrorInfo = document.getElementById("email-error-label")
const contactErrorInfo = document.getElementById("contact-number-error-label")
const addressInput1ErrorInfo = document.getElementById("addressInput1-error-label")
const townErrorInfo = document.getElementById("town-error-label")
const postcodeErrorInfo = document.getElementById("postcode-error-label")
const countryInputErrorInfo = document.getElementById("country-error-label")
const descriptionErrorInfo = document.getElementById("description-error-label")
const inputs = document.querySelectorAll("input[type=text]");

form.addEventListener("submit", (e) => {
  
  if (firstName.value === "" || firstName.value == null){
    e.preventDefault();
    firstNameErrorInfo.innerText = "First Name is required";
    firstNameErrorInfo.style.color = "rgb(219, 44, 44)";

  } else {
    firstNameErrorInfo.innerText = "First Name";
    firstNameErrorInfo.style.color = "rgb(0,0,0)"
  }
  if (lastName.value === "" || lastName.value == null){
    e.preventDefault();
    lastNameErrorInfo.innerText = "Last Name is required";
    lastNameErrorInfo.style.color = "rgb(219, 44, 44)";
  } else {
    lastNameErrorInfo.innerText = "Last Name";
    lastNameErrorInfo.style.color = "rgb(0,0,0)";
  }
  if (email.value === "" || email.value == null){
    e.preventDefault();
    emailErrorInfo.innerText = "Email Address is required";
    emailErrorInfo.style.color = "rgb(219, 44, 44)";
  } else {
    emailErrorInfo.innerText = "Email";
    emailErrorInfo.style.color = "rgb(0,0,0)";
  }
  if (contact.value === "" || contact.value == null){
    e.preventDefault();
    contactErrorInfo.innerText = "Contact Number is required";
    contactErrorInfo.style.color = "rgb(219, 44, 44)";  
  } else {
    contactErrorInfo.innerText = "Contact Number";
    contactErrorInfo.style.color = "rgb(0,0,0)";
  }

  if (addressInput1.value === "" || addressInput1.value == null){
    e.preventDefault();
    addressInput1ErrorInfo.innerText = "First Address Line is required";
    addressInput1ErrorInfo.style.color = "rgb(219, 44, 44)";
  } else {
    addressInput1ErrorInfo.innerText = "Address Line 1";
    addressInput1ErrorInfo.style.color = "rgb(0,0,0)";
  }
  if (town.value === "" || town.value == null){
    e.preventDefault();
    townErrorInfo.innerText = "Town is required";
    townErrorInfo.style.color = "rgb(219, 44, 44)";
  } else {
    townErrorInfo.innerText = "Town";
    townErrorInfo.style.color = "rgb(0,0,0)";
  }
  if (postcode.value === "" || postcode.value == null){
    e.preventDefault();
    postcodeErrorInfo.innerText = "Postcode is required";
    postcodeErrorInfo.style.color = "rgb(219, 44, 44)";
  } else {
    postcodeErrorInfo.innerText = "Postcode";
    postcodeErrorInfo.style.color = "rgb(0,0,0)";
  }
  if (countryInput.value === "" || countryInput.value == null){
    e.preventDefault();
    countryInputErrorInfo.innerText = "Country is required";
    countryInputErrorInfo.style.color = "rgb(219, 44, 44)";
  } else {
    countryInputErrorInfo.innerText = "Postcode";
    countryInputErrorInfo.style.color = "rgb(0,0,0)";
  }

  if (description.value === "" || description.value == null){
    e.preventDefault();
    descriptionErrorInfo.innerText = "Description is required";
    descriptionErrorInfo.style.color = "rgb(219, 44, 44)";
  } else {
    descriptionErrorInfo.innerText = "Description";
    descriptionErrorInfo.style.color = "rgb(0,0,0)";
  }

})

const textArea = document.querySelector('#description');
const count = document.querySelector('#description-word-count');

function getWordCount (field) {
  const value = field.value.trim();
  if (!value) return 0;
  return value.split(/\s+/).length;
}

function getCharacterCount (field) {
  return field.value.length;
}

function handleInput () {
  count.textContent = `
    You have written ${getWordCount(this)} words
    and ${getCharacterCount(this)} characters out of ${1000 - getCharacterCount(this)}.
  `;
}
textArea.addEventListener("input", handleInput);

function clearAll() {
  document.getElementById("description-word-count").innerHTML = "You have written 0 words and 0 characters out of 1000.";
}
const fileOutput = document.getElementById('fileOutput');
      if (window.FileList && window.File) {
        document.getElementById('fileSelect').addEventListener('change', event => {
          fileOutput.innerHTML = "";
          for (const file of event.target.files) {
            const o = document.createElement('o');
            const name = file.name ? file.name : 'NOT SUPPORTED';
            o.textContent = `${name}`;
            fileOutput.appendChild(o);
          }
        }); 
      }