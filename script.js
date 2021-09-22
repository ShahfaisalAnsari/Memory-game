document.addEventListener('DOMContentLoaded',()=>{

    //card option

    const cardArray =[
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name:'egg',
            img:'images/egg.png'
        },
        {
            name:'egg',
            img:'images/egg.png'
        },
        {
            name:'egg',
            img:'images/egg.png'
        },
        {
            name:'egg',
            img:'images/egg.png'
        },
        {
            name:'bread',
            img:'images/bread.png'
        },
        {
            name:'bread',
            img:'images/bread.png'
        },
        {
            name:'bread',
            img:'images/bread.png'
        },
        {
            name:'bread',
            img:'images/bread.png'
        },
        {
            name:'cupcake',
            img:'images/cupcake.png'
        },
        {
            name:'cupcake',
            img:'images/cupcake.png'
        },
        {
            name:'cupcake',
            img:'images/cupcake.png'
        },
        {
            name:'cupcake',
            img:'images/cupcake.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        },
        {
            name:'soda',
            img:'images/soda.png'
        },
        {
            name:'soda',
            img:'images/soda.png'
        }
    ];

    cardArray.sort(()=>0.5-Math.random());
    const grid= document.querySelector(".grid");
    const resultDisplay=document.querySelector ("#result");
    var cardChoosen=[];
    var cardChoosenId=[];
    var cardWon=[];

// create board 

function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        var card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard)
        grid.appendChild(card)
    }
}

// check for match 
function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardChoosenId[0]
    const optionTwoId = cardChoosenId[1]
    var card = document.createElement('img');
    let cardId =card.getAttribute('data-id');
    if(cardChoosen[0]===cardChoosen[1]){
            cards[optionOneId].style.visibility="hidden"
            cards[optionTwoId].style.visibility="hidden"
            cardWon.push(cardChoosen)
    }
    else{
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')

        // alert("Sorry! try again")
    }
    cardChoosen=[];
    cardChoosenId=[];
    resultDisplay.textContent=cardWon.length
    if(cardWon.length === cardArray.length/2){
        resultDisplay.textContent="You found them all!"
        grid.classList.add('cong');
    }
}


//flip your card

function flipCard(){
    let cardId =this.getAttribute('data-id');
    cardChoosen.push(cardArray[cardId].name);
    cardChoosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img)
    if(cardChoosen.length===2){
        setTimeout(checkForMatch, 500)
    }
    

}

createBoard();


});