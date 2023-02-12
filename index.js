const main = document.querySelector("main#main");
main.parentNode.removeChild(main);

const newHeader = document.createElement("h1");


newHeader.id = "victory";

const name = "Hawke";
newHeader.textContent = `${name} is the champion`;


document.body.appendChild(newHeader);
