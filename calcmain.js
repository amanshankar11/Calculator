// let myButton = document.querySelector("#change");
// let myHeading = document.querySelector("h1");

// function setUserName() {
//     const myName = prompt("Please enter your name:");
//     localStorage.setItem("name", myName);
//     myHeading.textContent = `${myName} Calculator`;
// }

// if (!localStorage.getItem("name")) {
//     setUserName();
//   } else {
//     const storedName = localStorage.getItem("name");
//     myHeading.textContent = `${storedName} Calculator`;
// }

// myButton.addEventListener("click", () => {
//     setUserName();
//   });

// //   document.addEventListener("DOMContentLoaded", () => {
// //     const num1Input = document.getElementById("num1");
// //     const num2Input = document.getElementById("num2");
// //     const operationsSelect = document.getElementById("operations");
// //     const calculateButton = document.querySelector("#result button");
// //     const resetButton = document.querySelector("#reset button");

// //     // Function to perform the calculation
// //     const calculate = () => {
// //         const num1 = parseFloat(num1Input.value);
// //         const num2 = parseFloat(num2Input.value);
// //         const operation = operationsSelect.value;

// //         if (isNaN(num1) || isNaN(num2)) {
// //             alert("Please enter valid numbers in both fields.");
// //             return;
// //         }

// //         let result;

// //         switch (operation) {
// //             case "Addtion":
// //                 result = num1 + num2;
// //                 break;
// //             case "Subtraction":
// //                 result = num1 - num2;
// //                 break;
// //             case "Multiply":
// //                 result = num1 * num2;
// //                 break;
// //             case "Division":
// //                 if (num2 === 0) {
// //                     alert("Division by zero is not allowed.");
// //                     return;
// //                 }
// //                 result = num1 / num2;
// //                 break;
// //             case "Remainder":
// //                 if (num2 === 0) {
// //                     alert("Division by zero is not allowed.");
// //                     return;
// //                 }
// //                 result = num1 % num2;
// //                 break;
// //             default:
// //                 alert("Please select a valid operation.");
// //                 return;
// //         }

// //         calculateButton.innerHTML="The result is "+result;
// //     };

// //     // Reset functionality
// //     const resetFields = () => {
// //         num1Input.value = "";
// //         num2Input.value = "";
// //         operationsSelect.value = "none";
// //     };

// //     // Event listeners
// //     calculateButton.addEventListener("click", calculate);
// //     resetButton.addEventListener("click", resetFields);
// // });

// document.addEventListener("DOMContentLoaded", () => {
//     const num1Input = document.getElementById("num1");
//     const num2Input = document.getElementById("num2");
//     const operationsSelect = document.getElementById("operations");
//     const calculateButton = document.querySelector("#result button");
//     const resetButton = document.querySelector("#reset button");

//     // Create a result display area
//     const resultDisplay = document.createElement("div");
//     resultDisplay.id = "result-display";
//     resultDisplay.style.marginTop = "20px";
//     resultDisplay.style.fontSize = "18px";
//     document.querySelector(".calculator").appendChild(resultDisplay);

//     // Function to perform the calculation
//     const calculate = () => {
//         const num1 = parseFloat(num1Input.value);
//         const num2 = parseFloat(num2Input.value);
//         const operation = operationsSelect.value;

//         if (isNaN(num1) || isNaN(num2)) {
//             resultDisplay.textContent = "Please enter valid numbers in both fields.";
//             return;
//         }

//         let result;

//         switch (operation) {
//             case "Addtion":
//                 result = num1 + num2;
//                 break;
//             case "Subtraction":
//                 result = num1 - num2;
//                 break;
//             case "Multiply":
//                 result = num1 * num2;
//                 break;
//             case "Division":
//                 if (num2 === 0) {
//                     resultDisplay.textContent = "Division by zero is not allowed.";
//                     return;
//                 }
//                 result = num1 / num2;
//                 break;
//             case "Remainder":
//                 if (num2 === 0) {
//                     resultDisplay.textContent = "Division by zero is not allowed.";
//                     return;
//                 }
//                 result = num1 % num2;
//                 break;
//             default:
//                 resultDisplay.textContent = "Please select a valid operation.";
//                 return;
//         }

//         resultDisplay.textContent = `The result is: ${result}`;
//     };

//     // Reset functionality
//     const resetFields = () => {
//         num1Input.value = "";
//         num2Input.value = "";
//         operationsSelect.value = "none";
//         resultDisplay.textContent = "";
//     };

//     // Event listeners
//     calculateButton.addEventListener("click", calculate);
//     resetButton.addEventListener("click", resetFields);
// });

// //////

// JavaScript for Calculator functionality and Change User logic

document.addEventListener("DOMContentLoaded", () => {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const operationsSelect = document.getElementById("operations");
    const calculateButton = document.querySelector("#result button");
    const resetButton = document.querySelector("#reset button");
    const changeUserButton = document.getElementById("change");
    const myHeading = document.querySelector("h1");

    // Create a result display area
    const resultDisplay = document.createElement("div");
    resultDisplay.id = "result-display";
    resultDisplay.style.marginTop = "20px";
    resultDisplay.style.fontSize = "18px";
    document.querySelector(".calculator").appendChild(resultDisplay);

    // Function to perform the calculation
    const calculate = () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operation = operationsSelect.value;

        if (isNaN(num1) || isNaN(num2)) {
            resultDisplay.textContent = "Please enter valid numbers in both fields.";
            return;
        }

        let result;

        switch (operation) {
            case "Addtion":
                result = num1 + num2;
                break;
            case "Subtraction":
                result = num1 - num2;
                break;
            case "Multiply":
                result = num1 * num2;
                break;
            case "Division":
                if (num2 === 0) {
                    resultDisplay.textContent = "Division by zero is not allowed.";
                    return;
                }
                result = num1 / num2;
                break;
            case "Remainder":
                if (num2 === 0) {
                    resultDisplay.textContent = "Division by zero is not allowed.";
                    return;
                }
                result = num1 % num2;
                break;
            default:
                resultDisplay.textContent = "Please select a valid operation.";
                return;
        }

        resultDisplay.textContent = `The result is: ${result}`;
    };

    // Reset functionality
    const resetFields = () => {
        num1Input.value = "";
        num2Input.value = "";
        operationsSelect.value = "none";
        resultDisplay.textContent = "";
    };

    // Change User functionality
    const setUserName = () => {
        const myName = prompt("Please enter your name:");
        if (myName) {
            localStorage.setItem("name", myName);
            myHeading.textContent = `${myName}'s Calculator`;
        }
    };

    // Check for stored user name on load
    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `${storedName}'s Calculator`;
    }

    // Event listeners
    calculateButton.addEventListener("click", calculate);
    resetButton.addEventListener("click", resetFields);
    changeUserButton.addEventListener("click", setUserName);
});
