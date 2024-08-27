




let next = document.getElementById("next");
let prev = document.getElementById("prev");

let steps = Array.from(document.getElementsByClassName("step"));


let container = document.getElementsByClassName("container")[0];
let frontLine = document.getElementsByClassName("progress-bar-front")[0];
let backLine = document.getElementsByClassName("progress-bar-back")[0];

let counter = 0;

next.onclick = function () {

    if (counter < 4)
        counter++;

    ManageClicking();
    console.log(counter);
    UpdateStep(true);

    // increase the back line with 25%
    frontLine.style.width = `${counter * 25}%`;
}

prev.onclick = function () {
    UpdateStep(false);
    if (counter > 0)
        counter--;
    ManageClicking();

    frontLine.style.width = `${counter * 25}%`;
}

function ManageClicking() {
    const updateButtonState = (button, condition) => {
        button.disabled = condition;
        button.style.backgroundColor = condition ? "lightgray" : "slateblue";
    };
    updateButtonState(prev, counter === 0);
    updateButtonState(next, counter === 4);


}

function UpdateStep(addOrRemove) {
    steps.forEach(function (ele, index) {

        if (index === counter) {
            // add
            if (addOrRemove === true) {
                ele.classList.add("checked");

                ele.removeChild(ele.firstElementChild);

                let newIcon = document.createElement("i");

                newIcon.className = "fas fa-check";
                ele.insertBefore(newIcon, ele.firstChild);

                let small = document.createElement("small");
                if(counter === 4)
                    small.textContent = `final`;
                else    
                small.textContent = `Step ${counter}`;

                ele.appendChild(small);
            }
            else{
                ele.removeChild(ele.firstElementChild);
                let newIcon = document.createElement("i");

                newIcon.className = "fas fa-times";
                ele.insertBefore(newIcon, ele.firstChild);
                // remove
                ele.removeChild(ele.lastElementChild);
                ele.classList.remove("checked");
            }
        }
    });
}


