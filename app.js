const numbers=[1,1,2,2,2,3,3,3,4,4,4,4,5,6,6,7,7,8,9,5,5,5];
let flippedCards=[];
let matchedCards=[];
let canFlip=true;

function Cards(number){
    const card=document.createElement('div');
    card.classList.add('card');
    card.textContent='?';
    card.dataset.number=number;
    card.addEventListener("click",flipCard);
    return card;
}

function flipCard(){
    if (!canFlip || flippedCards>=2 || matchedCards.includes(this)) return;
    this.classList.add('flipped');
    this.textContent=this.dataset.number;
    flippedCards.push(this);
    console.log(flippedCards[0]);
    console.log(flippedCards[1]);
    

    if(flippedCards.length===2){
        Match();
    }
}

function Match(){
    canFlip=false;
    setTimeout(()=>{
        const [card1 , card2]=flippedCards;
        if (card1.dataset.number===card2.dataset.number) {
            matchedCards.push(flippedCards);
            if(matchedCards.length===numbers.length){
                alert("Congratulations ! Ypu won the game .");
            }
        }else{
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.textContent='?';
            card2.textContent='?';
            
        }
        flippedCards=[];
        canFlip=true;
    },1000);
}

function Game(){
    const gameBoard=document.querySelector('.board');
    numbers.sort(()=> Math.random()-0.5);
    numbers.forEach(number=>{
        const card=Cards(number);
        gameBoard.append(card);
    })
}


Game();
