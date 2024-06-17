import inquirer from "inquirer";

const Quiz: {
    Question_1:string;
    Question_2:string;
    Question_3:string;
    Question_4:string;
    Question_5:string;
} = await inquirer.prompt([
    {
        name:"Question_1",
        type:"list",
        message:"Q1. What is your name ?",
        choices:["Ali","Azib","Abbas","Subhan"]
    },
    {
        name:"Question_2",
        type:"list",
        message:"Q2. What is  name Father Name ?",
        choices:["Ahmed","Muhammad Ahmed","Ali","Noman"]
    },
    {
        name:"Question_3",
        type:"list",
        message:"Q3. What is Favarite Tv Programm ?",
        choices:["Cartoon","Drama","Cricket","Flim"]
    },
    {
        name:"Question_4",
        type:"list",
        message:"Q4. Do you have any Sibling ?",
        choices:["Yes","No","One","Two"]
    },
    {
        name:"Question_5",
        type:"list",
        message:"Q5. How old are you ?",
        choices:["14","15","16","18"]
    },
])

let score : number = 0;

switch(Quiz.Question_1){
    case "Subhan":
    console.log("1. Correct !")
    ++score;
    break;
    default:
    console.log("1. Incorrect !")

}
switch(Quiz.Question_2){
    case "Muhammad Ahmed":
    console.log("2. Correct !")
    ++score;
    break;
    default:
    console.log("2. Incorrect !")

}
switch(Quiz.Question_3){
    case "Cricket":
    console.log("3. Correct !")
    ++score;
    break;
    default:
    console.log("3. Incorrect !")

}
switch(Quiz.Question_4){
    case "Two":
    console.log("4. Correct !")
    ++score;
    break;
    default:
    console.log("4. Incorrect !")

}
switch(Quiz.Question_5){
    case "18":
    console.log("5. Correct !")
    ++score;
    break;
    default:
    console.log("5. Incorrect !")

}

console.log(`Score : ${score}`)