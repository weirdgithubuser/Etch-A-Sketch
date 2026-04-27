button = document.querySelector('.user-input-button');
input = document.querySelector('.user-input-input');
button.addEventListener('click',(event) => {
    event.preventDefault();
    if (input.value !== ""){
        if(input.value > 0 && input.value <= 60){
        let dimension = input.value;
        input.value = "";
        childDivNodeList = document.querySelectorAll(".childDiv");
        childDivNodeList.forEach((item) => {
            item.parentNode.removeChild(item);
        })
        for (let i = 0; i < dimension*dimension; i++){
        childDiv = document.createElement('div');
        childDiv.classList.add("childDiv");
        childDiv.style.width = `${((parentDiv.offsetWidth)/dimension)}px`;
        childDiv.style.height = `${((parentDiv.offsetHeight)/dimension)}px`;
        parentDiv.appendChild(childDiv);
        document.querySelectorAll(".childDiv").forEach((square) => {
        square.addEventListener("mouseenter", (event) => {
        event.target.style['background-color'] = 'hotpink';});
    })
    }}else{
        alert("Are you retarded? I just said limit = 60");
    }
}
})

parentDiv = document.querySelector("#container");
for (let i = 0; i < 16*16; i++){
    childDiv = document.createElement('div');
    childDiv.classList.add("childDiv");
    childDiv.style.width = `${((parentDiv.offsetWidth)/16)}px`;
    childDiv.style.height = `${((parentDiv.offsetHeight)/16)}px`;
    parentDiv.appendChild(childDiv);
}

document.querySelectorAll(".childDiv").forEach((square) => {
    square.addEventListener("mouseenter", (event) => {
        event.target.style['background-color'] = 'hotpink';
    });
})