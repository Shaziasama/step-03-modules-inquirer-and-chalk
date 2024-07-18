//For example, here is a TypeScript file using ES Modules syntax, showcasing a few different options for module:

//import { valueOfPi } from "./constants.js";
 
//export const twoPi = valueOfPi * 2;
//Try
//ES2020
//import { valueOfPi } from "./constants.js";
//export const twoPi = valueOfPi * 2;
 
//Try
//CommonJS
//"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.twoPi = void 0;
//const constants_js_1 = require("./constants.js");
//exports.twoPi = constants_js_1.valueOfPi * 2;




//ECMAScript Modules in Node.js
//In the tsconfig.json set module and moduleResolution:

    //"module": "nodenext",
    //"moduleResolution": "NodeNext", 
    //"target": "es2020",     
//In the package.json add:

    //"type": "module"
//In the import use .js file extension instead of just using "./second":

    //import {b, c} from "./second.js";



    //////import inquirer from "inquirer";////////

//let answers = await inquirer.prompt([{
    //name: "age",
    //type: "number",
    //message: "Enter your Age:"}
//]);

//console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");



///////////import chalk from "chalk";////////

//let answers = await inquirer.prompt([{
    //name: "age",
    //type: "number",
    //message: "Enter your Age:"}
//]);

//console.log(chalk.blue("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));

