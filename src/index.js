import style from "./_scss/main.scss";
import {createNode} from "./helpers";
import {append} from "./helpers";
import {saveValue} from "./helpers";
import {getSavedValue} from "./helpers";
import {saveValueToSession} from "./helpers";
import {redirect} from "./helpers";

let currentValue ='';
let currentResponse = {};
let element = document.getElementById("mainInput");
element.value = getSavedValue('mainInput');
const ul = document.getElementById('seriesList');
let getSeries = (e) => {
    const targetName=e.value;
    saveValue(e);
    return fetch(`http://api.tvmaze.com/search/shows?q=${targetName}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            ul.innerHTML="";
            return myJson.map((serial) => {
                let li = createNode('li');
                let span = createNode('span');
                let img = createNode('img');
                let a = createNode('a');
                a.href="/seriesPage.html";
                li.id = `show${serial.show.id}`;
                li.addEventListener("click", () => {saveValueToSession('selectedSeries',li)});
                img.src = serial.show.image['medium'];
                span.innerText = `${serial.show.name}`;
                // span.addEventListener('click', () => {redirect("/seriesPage")});
                append(a, span);
                append(li, a);
                append(li,img);
                append(ul, li);
            })
        });
};
document.addEventListener("DOMContentLoaded", function() {
    element.addEventListener("input", ()=>{getSeries(element)})
});




