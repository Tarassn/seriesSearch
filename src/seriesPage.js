import style from "./_scss/main.scss";
import {
    append,
    createNode,
    getSavedValue,
    getSavedValueFromSession,
} from "./helpers";
let selectedId = getSavedValueFromSession('selectedSeries').slice(4);
let element = document.getElementById("mainSeriesPage");
let addToSelected = (item) => {
    let selectedArr = getSavedValue("selectedArr");
    if(selectedArr === ""){
        selectedArr = [];
        if(selectedArr.indexOf(item) === -1) {
            selectedArr.push(item);
        }
        localStorage.setItem('selectedArr', JSON.stringify(selectedArr))
    }
    else {
        selectedArr = JSON.parse(selectedArr);
        if(selectedArr.indexOf(item) === -1) {
            selectedArr.push(item);
        }
        localStorage.setItem('selectedArr', JSON.stringify(selectedArr))
    }
    console.log(selectedArr)

};
let getSeriesFromSession = (id) => {
    return fetch(`http://api.tvmaze.com/shows/${id}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(receivedObj) {
            console.log(receivedObj);
            let h3 = createNode('h3');
            let img = createNode('img');
            let p = createNode('p');
            let button = createNode('button');
            img.src = receivedObj.image['medium'];
            h3.innerText = `${receivedObj.name}`;
            button.innerText="Add to selected";
            button.addEventListener('click',() => {addToSelected(selectedId)});
            p.innerHTML = receivedObj.summary;
            append(element, h3);
            append(element, img);
            append(element, button);
            append(element, p);
        });
};
getSeriesFromSession(selectedId);