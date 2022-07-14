let ply1 = Math.floor(Math.random() * 10);
let ply2 = Math.floor(Math.random() * 10);

function Click(){
    document.getElementById("screen1").innerText= ply1;
    document.getElementById("screen2").innerText= ply2;
    if (ply1 > ply2){
        document.getElementById("winner").innerText=("The WINNER is Player1!")
    } else if (ply2 >ply1){
        document.getElementById("winner").innerText=("The WINNER is Player2!")
    } else {
        document.getElementById("winner").innerText=("The game ended in a draw!")
    }
}