// i set the right reponce of each question in an array
const responces = ["c", "a", "b"];

// i retrieve the form 
const form = document.querySelector(".quizz")
// console.log(form);

form.addEventListener("submit", gererSubmit)

function gererSubmit(evt) {
    evt.preventDefault()
    // console.log(evt);

    // i creat the result variable to put the value has been choose in this array
    const result = [];
    // i retrieve the inputs have been checked
    const radioButtons = document.querySelectorAll("input[type='radio']:checked")
    // console.log(radioButtons);

    // im comparing the value of each button with the reponce array
    radioButtons.forEach((radioButton, index) => {
        if (radioButton.value === responces[index]) {
            result.push(true)
        } else {
            result.push(false)
        }


    })
    // console.log(result);

    showResult(result)
    addingcolors(result)
}

const tittleResult = document.querySelector(".results h2")
const mark = document.querySelector(".mark")
const help = document.querySelector(".help")


function showResult(result) {
    //  i use filter method to checked if the result are false and put in a new array 
    // and its showing me the number of error using the length  
    const errorsNumber = result.filter(el => el === false).length
    // console.log(errorsNumber);

    if (errorsNumber === 0) {
        // console.log("perfect");
        tittleResult.textContent = "Great, no error"
        help.style.display = "block"
        help.textContent = "Your are a good israel cityzen"
        mark.style.display = "block"
        mark.textContent = "Score: 3/3"

    } else if (errorsNumber === 1) {

        tittleResult.textContent = "Your almost get it !"
        help.style.display = "block"
        help.textContent = "You should try again"
        mark.style.display = "block"
        mark.textContent = "Score: 2/3"
        // console.log("one error");

    } else if (errorsNumber === 2) {


        tittleResult.textContent = "You can do it"
        help.style.display = "block"
        help.textContent = "Try again"
        mark.style.display = "block"
        mark.textContent = "Score: 1/3"

        // console.log("two error");
    } else if (errorsNumber === 3) {


        tittleResult.textContent = "Oops, you did it wrong"
        help.style.display = "block"
        help.textContent = "it's ok dont worry, try again"
        mark.style.display = "block"
        mark.textContent = "Score: 0/3"
        // console.log("everything is wrong");

    } else {
        "oops an error is apearing"
    }

}

const questions = document.querySelectorAll(".question-block");
// console.log(questions);

function addingcolors(result) {

    result.forEach((ele, index) => {

        if (result[index]) {
            questions[index].style.background = "green"

        } else {
            questions[index].style.background = "red"
        }
    })
}