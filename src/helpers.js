export let createNode = (element) => {
    return document.createElement(element); // Create the type of element you pass in the parameters
};
export let append = (parent, el) => {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
};
export let saveValue = (e) => {
    let id = e.id;
    let val = e.value;
    localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override .
};

//get the saved value function - return the value from localStorage.
export let getSavedValue = (id) => {
    if (!localStorage.getItem(id)) {
        return "";
    }
    return localStorage.getItem(id);
};
export let saveValueToSession = (id,elem) => {
    let val = elem.id;
    sessionStorage.setItem(id, val);
};
export let getSavedValueFromSession = (id) => {
    if (!sessionStorage.getItem(id)) {
        return "";
    }
    return sessionStorage.getItem(id);
};
export let redirect = (location) => {
    window.open(location);
};