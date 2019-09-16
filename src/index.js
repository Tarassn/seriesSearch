import style from "./_scss/main.scss";
let currentValue ='';
let currentResponse = {};
const ul = document.getElementById('seriesList');
let createNode = (element) => {
    return document.createElement(element); // Create the type of element you pass in the parameters
};
let append = (parent, el) => {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
};
let getSeries = (e) => {
    console.log(e.value);
    const targetName=e.value;
    return fetch(`http://api.tvmaze.com/search/shows?q=${targetName}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            ul.innerHTML=""
            return myJson.map((serial) => { // Map through the results and for each run the code below
                let li = createNode('li'), //  Create the elements we need
                    span = createNode('span');
                span.innerHTML = `${serial.show.name}`;
                append(li, span);
                append(ul, li);
            })
        });
};
document.addEventListener("DOMContentLoaded", function() {
    let element = document.getElementById("mainInput")
    element.addEventListener("change", ()=>{getSeries(element)})
});




