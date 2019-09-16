import style from "./_scss/main.scss";
let getSeries = (e) => {
    console.log(e.value);
    const targetName=e.value;
    return fetch(`http://api.tvmaze.com/search/shows?q=${targetName}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(JSON.stringify(myJson));
        });
};
document.addEventListener("DOMContentLoaded", function() {
    let element = document.getElementById("mainInput")
    element.addEventListener("change", ()=>{getSeries(element)})
});



