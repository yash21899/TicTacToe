console.log("welcome to game");
let turn = "X";
let isgameover = false;
let reset = document.getElementById('reset');

// function to change turn
const changeturn = () =>{
    return turn === "X"?"O":"X"; 
}

// Function to check for a win
const checkwin = () =>{
    let boxtext = document.getElementsByClassName('boxtext');
    let as = document.getElementsByClassName('as');
    let wins = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            boxtext[e[0]].style.color = "red";
            boxtext[e[1]].style.color = "red";
            boxtext[e[2]].style.color = "red";
            
            if(isgameover){
                boxtext.style.color = "white";
                
            }
        }
    });
}

// game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        // console.log("click");
        if(boxtext.innerText === ''){
            // console.log("click");
            boxtext.innerText = turn;
            turn = changeturn();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName('info')[0].innerText = "Turn For " + turn;
            }
        }
    });
})

// reset game
// reset.addEventListener('click',()=>{
//     let boxtexts = document.querySelectorAll('.boxtext');
//     Array.from(boxtexts).forEach(e=>{
//         e.innerText = " ";
//     })
//     turn = "X";
//     isgameover = false;
//     document.querySelector('.info').innerText = "Turn For " + turn;
// });

// reset.addEventListener('click', ()=>{
//     let boxtexts = document.querySelectorAll('.boxtext');
//     Array.from(boxtexts).forEach(element => {
//         element.innerText = ""
//     });
//     turn = "X"; 
//     isgameover = false;
//     // document.querySelector(".line").style.width = "0vw";
//     document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
//     // document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
// })