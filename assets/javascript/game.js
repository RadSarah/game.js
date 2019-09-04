let teamOneShotCountElement = document.querySelector("#teamone-numshots")
let teamOneGoalCountElement = document.querySelector("#teamone-numhits")  
let teamOneShootButtonElement = document.querySelector("#teamone-shoot")

let teamOneShotCount = 0;
let teamOneGoalCount = 0;

console.log(Math.random())
teamOneShootButtonElement.addEventListener("click", function(){
  teamOneShotCount = teamOneShotCount + 1
  teamOneShotCountElement.innerHTML = teamOneShotCount
  
  //if shot was successful, increase goal count by 1
  //after increment goalcount, set goalcountelement.iiner.html
  //equal to goal count

  if(Math.random() < .25){
  teamOneGoalCount = teamOneGoalCount + 1
  teamOneGoalCountElement.innerHTML = teamOneGoalCount
  }

})

let teamTwoShotCountElement = document.querySelector("#teamtwo-numshots")
let teamTwoGoalCountElement = document.querySelector("#teamtwo-numhits")  
let teamTwoShootButtonElement = document.querySelector("#teamtwo-shoot")

let teamTwoShotCount = 0;
let teamTwoGoalCount = 0;

teamTwoShootButtonElement.addEventListener("click", function(){
teamTwoShotCount = teamTwoShotCount + 1
teamTwoShotCountElement.innerHTML = teamTwoShotCount
 
  if(Math.random() < .25){
    teamTwoGoalCount = teamTwoGoalCount + 1
    teamTwoGoalCountElement.innerHTML = teamTwoGoalCount
    }
  
  })

  let numberOfResetsButtonElement = document.querySelector("#reset")
  let numberOfResetsElement = document.querySelector("#num-resets") 

  
  let numberOfResets = 0;

  numberOfResetsButtonElement.addEventListener("click", function(){


    teamOneGoalCountElement.innerHTML = 0;
    teamOneShotCountElement.innerHTML = 0;

    teamTwoGoalCountElement.innerHTML = 0;
    teamTwoShotCountElement.innerHTML = 0;

  numberOfResets = numberOfResets + 1
  numberOfResetsElement.innerHTML = numberOfResets

  })
  
    


  
  

  