import inquirer from "inquirer";

let myBalance = 200000;
let myPin = 1122;



let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "please enter your pin number",
    type: "number",
  },
]);



if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);



  console.log(operationAns);



  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "please enter your amount",
        type: "number",
      },
    ]);



    // =, -=, +=
    myBalance -= amountAns.amount;
    console.log("your remaining balance is:" + myBalance);
  } else if (operationAns.operation === "check balance") {
    console.log("your balance is:" + myBalance);
  }


  
} else {
  console.log("incorrect pin number.");
}
