#! /usr/bin/env node
//declare above path for publishing project "called SHABANG", it is an executable file

//import inquirer from library   
import inquirer from "inquirer";

//declare variable naming "answer" variable type const
const answer = await inquirer.prompt([
    //declare first object naming "fisrtNumber"
    {message:"Enter first number.", type:"number", name:"firstNumber"},

    //declare first object naming "secondNumber"
    {message:"Enter second number.", type:"number", name:"secondNumber"},

    //declare performing operation object naming "Operator" with list and choice names
    {message:"Please select one of the operator to performing action.", type:"list", name:"operator", choices:["Addition","Subtraction","Multiplication","Division"]},
]);


//conditional statement

//first statement if operator equal to addition
if (answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);

//second statement if operator equal to subtraction
}else if (answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);

//third statement if operator equal to multiplication Division
}else if (answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);

//fourth statement if operator equal to Division
}else if (answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);

//five statement if number is not valid    
}else{
    console.log("Please select valid numbers.");
}