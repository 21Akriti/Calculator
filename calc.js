const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");
const clear = document.querySelector("#clear")
const solve = document.querySelector("#solve")
console.log(buttons, input)

const updateInput = (event) => {
    input.value = input.value + event.target.innerText;
}

buttons.forEach((btn) => {
    btn.onclick = updateInput;
})

clear.onclick = () => {
    input.value = input.value.substr(0, input.value.length - 1);
}
solve.onclick = () => {
    input.value = eval(input.value)
}
