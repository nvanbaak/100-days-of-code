const fs = require('fs');
const path = require('path');
const inq = require('inquirer');
const moment = require('moment');
const { type } = require('os');

const localpath = path.normalize("./");

startup();

function startup() {
    // Get basic log info
    inq.prompt([
        {
            message: "Summarize your progress today:",
            type:"input",
            name:"progress"
        } , {
            message:"Thoughts?",
            type:"input",
            name:"thoughts"
        } , {
            message:"Provide a link to your work:",
            type:"input",
            name:"linkHTML"
        } , {
            message:"How should this link be named?",
            type:"input",
            name:"linkName"
        }
    ]).then( res => {

        // Calculate date information
        let now = moment();
        let then = moment([2021, 0, 26]);
        let dayCounter = now.diff(then, 'days') + 1

        // Turn our information into a formatted string
        let outputStr = `\n\n### Day ${dayCounter}: ${now.format('MMMM D, YYYY')}`;
        outputStr += `\n\n**Progress:** ${res.progress}`;
        outputStr += `\n\n**Thoughts:** ${res.thoughts}`;
        outputStr += `\n\n**Link to Work:** [${res.linkName}](${res.linkHTML})`

        // See if we need more features before writing to file
        featureLoop(outputStr);

    })
}

function featureLoop(outputStr) {

    // Ask if we need to add more links
    inq.prompt([
        {
            message:"Would you like to add another link?",
            type:'confirm',
            name:'addLink'
        }
    ]).then( res => {

        if (res.addLink) {

            inq.prompt([
                {
                    message:"Provide a link to your work:",
                    type:"input",
                    name:"linkHTML"
                } , {
                    message:"How should this link be named?",
                    type:"input",
                    name:"linkName"
                }
            ]).then( res => {

                outputStr += `\n[${res.linkName}](${res.linkHTML})`;

                featureLoop(outputStr);

            })
        } else {






        }
    })



}









