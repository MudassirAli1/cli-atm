#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 2580;
// Pin 
let pinCode = await inquirer.prompt([{
        name: "pin",
        messege: "Enter your pin code",
        type: "number",
    }]);
if (pinCode.pin === myPin) {
    console.log(`Valid Pin Code!`);
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            messege: "Please Select the Option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash", "deposits"],
        }
    ]);
    // withdraw 
    if (operationAnswer.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                messege: "enter your amount",
                type: "number",
            }
        ]);
        if (myBalance >= amountAns.amount) {
            myBalance -= amountAns.amount;
            console.log(`Withdrawn amount: ${amountAns.amount}`);
            console.log(`Remaining balance: ${myBalance}`);
        }
        else {
            console.log(`Insufficient balance!You have only ${myBalance}`);
            // check balance
        }
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(`Your current balance: ${myBalance}`);
    }
    // fast cash
    else if (operationAnswer.operation === "fast cash") {
        let operationFast = await inquirer.prompt([
            {
                name: "fast",
                messege: "Select the amount which you want to withdraw",
                type: "list",
                choices: ["500", "1000", "2000", "3000", "4000", "5000"],
            }
        ]);
        if (operationFast.fast === "500") {
            myBalance -= operationFast.fast;
            console.log(`Your reamaining amount is ${myBalance}`);
        }
        else if (operationFast.fast === "1000") {
            myBalance -= operationFast.fast;
            console.log(`Your reamaining amount is ${myBalance}`);
        }
        else if (operationFast.fast === "2000") {
            myBalance -= operationFast.fast;
            console.log(`Your reamaining amount is ${myBalance}`);
        }
        else if (operationFast.fast === "3000") {
            myBalance -= operationFast.fast;
            console.log(`Your reamaining amount is ${myBalance}`);
        }
        else if (operationFast.fast === "4000") {
            myBalance -= operationFast.fast;
            console.log(`Your reamaining amount is ${myBalance}`);
        }
        else if (operationFast.fast === "5000") {
            myBalance -= operationFast.fast;
            console.log(`Your reamaining amount is ${myBalance}`);
        }
    }
    // deposit
    if (operationAnswer.operation === "deposits") {
        let cashDeposit = await inquirer.prompt([
            {
                name: "depositCash",
                type: "number",
                message: " Enter the Amount ....",
            },
        ]);
        myBalance += cashDeposit.depositCash;
        console.log(` You Deposited Rs: ${cashDeposit.depositCash} \n Your New Account Balance is: ${myBalance}`);
    }
}
else {
    console.log(`please enter the correct pin code`);
}
