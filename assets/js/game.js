var playerName = "Tony The Robot ";
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


// this is to create a function
var fight = function () {
    // Alert players that htey are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    if (promptFight === "fight" || promptFight === "FIGHT") {
    //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
   
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + "attacked" + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining. "
    );
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    
    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;
    
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining."
    );
        // Check Player health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + palyerHealth + " health left.");
    }
    // if player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    window.alert(playerName + " has chosen to skip the fight!");
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight () again
    else {
        fight();
    }
}
else {
    window.alert("You need to choose a valid option. Try again!");
}
};





// your have to execute the function like this
fight();