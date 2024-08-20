const cardList = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
let clickLast;
let newClick;
let correctCards = 0;
let plays = 0;
let numberOfCards = 0;

function victory() {
  alert(`Você ganhou em ${plays} jogadas!`);
}


function askNumberofCards() {
    numberOfCards = Number(prompt("Com quantas cartas você quer jogar?"));
    console.log(numberOfCards);
    if(numberOfCards >= 4 && numberOfCards <= 14 && numberOfCards % 2 === 0) {
       deck(numberOfCards);
    } else {
    askNumberofCards();
    }
}
askNumberofCards();


function clickCard(element) {
  if (element.classList.contains("turned")) {
    return
  }
  plays += 1;

  newClick = element;
  newClick.classList.toggle("turned");
  
 if(clickLast !== undefined && clickLast.classList[1] == newClick.classList[1]) {
  correctCards += 1;
  clickLast = undefined;   

 } else if (clickLast !== undefined && clickLast.classList[1] !== newClick.classList[1]){
  setTimeout(turnAgain, 1000);

 } else {
  clickLast = newClick;
 }  

 if(correctCards == numberOfCards/2) {
  setTimeout(victory, 500);
 }
}

function turnAgain() {
  newClick.classList.toggle("turned")
  clickLast.classList.toggle("turned")

  newClick = undefined
  clickLast = undefined
}

function shuffle() {
  return Math.random() - 0.5;
}

function deck(number){
  let list = document.querySelector("ul");
  let artName = 0;
  let count = 0;
  deckshuffler = [];

  for(let i = 0; i < number; i++ ) {
      artName += 1;      
      const elementcard = `
          <li>
            <div class="card ${cardList[count]}"  onclick="clickCard(this)">
              <div class="front-face">
              <img src="assets/images/back.png"/>
            </div>
              <div class="back-face">
                <img src="assets/images/${cardList[count]}.gif" />
              </div>
          </div>
        </li>
      `;
     deckshuffler[i] = elementcard;

    if(artName == 2){ 
      artName = 0;
      count += 1;
    }
  }
  deckshuffler.sort(shuffle);

  for(let i = 0; i < deckshuffler.length; i++){
    list.innerHTML += deckshuffler[i];
  }  
}
