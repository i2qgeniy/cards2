
//var container = document.getElementById('cont');
var cardValues = {
    "Ace of Spades": 11,
    "King of Spades": 10,
    "Queen of Spades": 10,
    "Jack of Spades": 10,
    "10 of Spades": 10,
    "9 of Spades": 9,
    "8 of Spades": 8,
    "7 of Spades": 7,
    "6 of Spades": 6,
    "5 of Spades": 5,
    "4 of Spades": 4,
    "3 of Spades": 3,
    "2 of Spades": 2,
    
    "Ace of Hearts": 11,
    "King of Hearts": 10,
    "Queen of Hearts": 10,
    "Jack of Hearts": 10,
    "10 of Hearts": 10,
    "9 of Hearts": 9,
    "8 of Hearts": 8,
    "7 of Hearts": 7,
    "6 of Hearts": 6,
    "5 of Hearts": 5,
    "4 of Hearts": 4,
    "3 of Hearts": 3,
    "2 of Hearts": 2,
    
    "Ace of Diamonds": 11,
    "King of Diamonds": 10,
    "Queen of Diamonds": 10,
    "Jack of Diamonds": 10,
    "10 of Diamonds": 10,
    "9 of Diamonds": 9,
    "8 of Diamonds": 8,
    "7 of Diamonds": 7,
    "6 of Diamonds": 6,
    "5 of Diamonds": 5,
    "4 of Diamonds": 4,
    "3 of Diamonds": 3,
    "2 of Diamonds": 2,
    
    "Ace of Clubs": 11,
    "King of Clubs": 10,
    "Queen of Clubs": 10,
    "Jack of Clubs": 10,
    "10 of Clubs": 10,
    "9 of Clubs": 9,
    "8 of Clubs": 8,
    "7 of Clubs": 7,
    "6 of Clubs": 6,
    "5 of Clubs": 5,
    "4 of Clubs": 4,
    "3 of Clubs": 3,
    "2 of Clubs": 2
  };
  
var cardNames = Object.keys(cardValues);
const container = document.querySelector('#cont');
var button = document.getElementById("myButton");
var point = 0;
var creates_cards = [];




function get_card(name){
    creates_cards.push(name)
    const div = document.createElement('div');
    console.log(div);
    div.name = name;
    console.log(div.name);
    div.classList.add("cards");
    container.appendChild(div);
    


    const div_text  = document.createElement('div');
    div_text.classList.add("text");
    div_text.textContent = name;
    div.appendChild(div_text);

}

function get_random_card(){
    var randomIndex = Math.floor(Math.random() * cardNames.length);
    var name = cardNames[randomIndex]
    get_card(name);
    point += cardValues[name];
    console.log(point);
    if (point > 21){
        

        // Получение всех элементов div с классом "myDiv"
        var divElements = document.getElementsByClassName("cards");
        console.log(divElements);
        console.log(creates_cards);
        console.log(divElements.length);
        // Проход по каждому элементу div
        while (divElements.length>0) {
          var divElement = divElements[0];
          console.log(divElements.length);
          console.log(divElement.name);
          var name2delete = divElement.name;
        
          // Проверка, содержится ли название в массиве
          if (creates_cards.includes(name2delete)) {
            // Удаление элемента div
            console.log("deleteeeeeee");
            divElement.parentNode.removeChild(divElement);
          }
          
        }
        point=0;
        creates_cards = [];
    }
}


// Назначение обработчика события для кнопки
button.addEventListener("click", get_random_card);



//const t  = document.createElement('p3');
//t.classList.add("p3_style");
//t.textContent = 'Ace of Spades';
//div.appendChild(t);
