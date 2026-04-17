button = document.querySelector('.user-input-button');
button.addEventListener('click',(event) => {
    event.preventDefault();
})

parentDiv = document.querySelector("#container");
for (let i = 0; i < 16*16; i++){
    childDiv = document.createElement('div');
    childDiv.classList.add("childDiv");
    childDiv.style.width = `${((parentDiv.offsetWidth)/16)}px`;
    childDiv.style.height = `${((parentDiv.offsetHeight)/16)}px`;
    parentDiv.appendChild(childDiv);
}