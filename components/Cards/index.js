// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    let cardObject = response.data.articles;
    let cardArr = Object.values(cardObject);
    cardArr.forEach(article => {
        article.forEach(article2 => {
            cardCreator(article2);
        })
    })
})
.catch(error => {
    console.log("Klingon Birds-of-Prey Decloaking!", error);
})

const mama = document.querySelector(".cards-container");

function cardCreator(obj) {
    const cards = document.createElement("div");
    cards.classList.add("card");

    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = obj.headline;

    const author = document.createElement("div");
    author.classList.add("author");

    const imageBox = document.createElement("div");
    imageBox.classList.add("img-container");

    const image = document.createElement("img");
    image.src = obj.authorPhoto;

    const endLine = document.createElement("span");
    endLine.classList.add("span");
    endLine.textContent = author.authorName;

    cards.append(headline, author);
    author.append(imageBox, endLine);
    imageBox.append(image);
    mama.append(cards);

    return cardCreator;
}