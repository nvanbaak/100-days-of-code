const fs = require('fs');
const path = require('path');
const inq = require('inquirer');

const localpath = path.normalize("./");

startup();

function startup() {
    inq.prompt([
        {
            message: "Summarize your progress today:",
            type:"input",
            name:"progress"
        } , {
            message:"Thoughts?",
            type:"input",
            name:"thoughts"
        }
    ]).then( res => {

        

    })
}








