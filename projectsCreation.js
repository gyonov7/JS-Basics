function projectsCreation(input){
// The architect Ceko will need 8 hours to complete 20 project/s. 

let nameArchitect = input[0];
let numberProjects = Number(input[1]); 
let timeNeeded = numberProjects * 3

console.log(`The architect ${nameArchitect} will need ${timeNeeded} hours to complete ${numberProjects} project/s.`)

}

projectsCreation(['Ceko',4])