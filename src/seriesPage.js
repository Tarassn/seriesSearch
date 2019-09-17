import {append, createNode, getSavedValueFromSession, redirect, saveValue, saveValueToSession} from "./helpers";
let selectedId = getSavedValueFromSession('selectedSeries').slice(4);
console.log(selectedId);
let getSeriesFromSession = (id) => {
    return fetch(`http://api.tvmaze.com/shows/${id}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(receivedObj) {
            console.log(receivedObj);
            // let span = createNode('span');
            // let img = createNode('img');
            // img.src = receivedObj.image['medium'];
            // span.innerText = `${receivedObj.name}`;
            // append(li, span);
            // append(li,img);
            // append(ul, li);
        });
};
getSeriesFromSession(selectedId);