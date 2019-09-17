import style from "./_scss/main.scss";
import {append, createNode, getSavedValue} from "./helpers";
let element = document.getElementById("selectedSeriesPage")
let selectedArr = JSON.parse(getSavedValue("selectedArr"));
let createElements = (arr) => {
    arr.map((id) => {
        return fetch(`http://api.tvmaze.com/shows/${id}`)
            .then(function (response) {
                return response.json()
            })
            .then(function (myObj) {
                let li = createNode('li');
                let span = createNode('span');
                let img = createNode('img');
                img.src = myObj.image['medium'];
                span.innerText = myObj.name;
                append(li,img);
                append(li, span);
                append(element, li);
                console.log(myObj)
            });

    });
};
createElements(selectedArr)
console.log(selectedArr);