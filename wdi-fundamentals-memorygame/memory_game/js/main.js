//console.log("user flipped" + cardThree);
//console.log("user flipped" + cardFour);

var cards = [
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},

{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},

{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
},

{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
}
];

var cardsInPlay = [ ];

var flipCard = function(){
	this.getAttribute("cardImage");
console.log("user flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
img.setAttribute(src, "cardImage");
		img.onclick = function(){
			console.log(cards[cardId].cardImage);
		}

if (cardsInPlay.length === 2) {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match!");
	} else { alert("sorry, try again");
	}

	}

}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		//cardElement.setAttribute("src", "images/back.png");
		//cardElement.setAttribute("data-id", i);
		cardElement.src = "images/back.png";
		cardElement.id = "cardPicture";
		var backCard = document.getElementById("game-board");
		backCard.appendChild(cardElement);

		//cardElement.addEventListner("click", flipCard());
		//document.getElementById("img")[0].appendChild(cardElement);
	}

}

createBoard();
