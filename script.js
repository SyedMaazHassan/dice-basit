var rounds = null;
var player1 = 0;
var player2 = 0;
var player1_name = "Player 1";
var player2_name = "Player 2";


function startGame() {
    let user_input = prompt("Enter no. of the rounds in game: ");
    player1_name = prompt("Enter player 1 name: ");
    player2_name = prompt("Enter player 2 name: ");
    
    // let user_input = 1;

    if (user_input) {
        rounds = parseInt(user_input);

        // start game ka section hide kro
        document.getElementById("start-section").style.display = "none";


        // Main game ka section display kro
        document.getElementById("main_game").style.display = "flex";


        // set rounds value in rounds div
        document.getElementById("rounds").textContent = rounds;


        if (player1_name) {
            document.getElementById("player1_name").textContent = player1_name;
        }

        if (player2_name) {
            document.getElementById("player2_name").textContent = player2_name;
        }
        
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
    //The maximum is exclusive and the minimum is inclusive
}


function roleDice() {


    if (rounds <= 0) {
        alert("Rounds ended");
        return;
    }



    let my_dice_interval = setInterval(() => {
        p1 = getRandomInt(1, 7);
        p2 = getRandomInt(1, 7);

        p1_img_name = `img/p1_${p1}.png`;
        p2_img_name = `img/p2_${p2}.png`;

       
        document.getElementById("p1_img").setAttribute("src", p1_img_name);
        document.getElementById("p2_img").setAttribute("src", p2_img_name);

    }, 50);



    setTimeout(() => {

        clearInterval(my_dice_interval);

        
        rounds--;
        document.getElementById("rounds").textContent = rounds;

        // Increase the points of players
        player1 = player1 + p1;
        player2 = player2 + p2;

        document.getElementById("player1_points").textContent = player1;
        document.getElementById("player2_points").textContent = player2;
        
        

        if (rounds == 0) {

            if (player1 > player2) {
                win_msg = `${player1_name} won`
            }else if (player1 < player2) {
                win_msg = `${player2_name} won`
            }else{
                win_msg = "Draw game"
            }

            document.getElementById("who_win").textContent = win_msg;
            
            
            setTimeout(() => {
                document.getElementById("main_game").style.display = "none";
                document.getElementById("win_container").style.display = "flex";
            }, 3000);
            
        }

    }, 2000);
}


function reStartGame() {
    location.reload();
}


