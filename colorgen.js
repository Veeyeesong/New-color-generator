const hexadecimalNumberSystem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let button = document.getElementById("generate-btn")
let firstHexCode = document.getElementById("first-hex-code")
let firstColorBox = document.getElementById("first-color-box")
let secondColorBox = document.getElementById("second-color-box")
let secondHexCode = document.getElementById("second-hex-code")
let thirdColorBox = document.getElementById("third-color-box")
let thirdHexCode = document.getElementById("third-hex-code")
let fourthColorBox = document.getElementById("fourth-color box")
let fourthHexCode = document.getElementById("fourth-hex-code")


function generateRandomNumber(){
    let randomNumber =  Math.floor(Math.random() * hexadecimalNumberSystem.length)
    return randomNumber
}


button.addEventListener("click", function(){
    // for first color box
    let hexCodeForFirstBox = "#"
    for(let w = 0; w < 6; w++){
      hexCodeForFirstBox += hexadecimalNumberSystem[generateRandomNumber()]
       
    }
    firstColorBox.style.backgroundColor = hexCodeForFirstBox
    firstHexCode.textContent = hexCodeForFirstBox

    // for second color box
    let hexCodeForSecondBox = "#"
    for(let x = 0; x < 6; x++){
       hexCodeForSecondBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
    secondColorBox.style.backgroundColor = hexCodeForSecondBox
    secondHexCode.textContent = hexCodeForSecondBox

    // for third color box
    let hexCodeForThirdBox = "#"
    for(let y = 0; y < 6; y++){
        hexCodeForThirdBox += hexadecimalNumberSystem[generateRandomNumber()]
    }

    thirdColorBox.style.backgroundColor = hexCodeForThirdBox
    thirdHexCode.textContent = hexCodeForThirdBox

    // for fourth color box
    let hexCodeForFourthBox = "#"
    for(let z = 0; z < 6; z++){
        hexCodeForFourthBox += hexadecimalNumberSystem[generateRandomNumber()]
    }

    fourthColorBox.style.backgroundColor = hexCodeForFourthBox
    fourthHexCode.textContent = hexCodeForFourthBox


})

let colorBoxes = document.querySelectorAll('.color-box');
let hexCodes = document.querySelectorAll('.color-box p');
let defaultColor = "#eee";


function resetColors(){
    colorBoxes.forEach(box => {
        box.style.backgroundColor = defaultColor;
    });

    hexCodes.forEach(code =>{
        code.textContent = "HEX CODE";
    })
}

let resetBtn = document.getElementById('reset-btn');
if (resetBtn) {
    resetBtn.addEventListener('click', resetColors);
}







