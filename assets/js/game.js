var playerName = "What is your robot's name?";
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// this is to create a function
var fight = function() {
    // Alert players that htey are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack
    // Log a resulting message to the console so we know that it worked.
    playerName + "attacked" + enemyName + "." + enemyName + "now has"
    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    enemyName +" attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining."
};

console.log(
    playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining. "
);

if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

// your have to execute the function like this
fight();