// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const parent = document.querySelector(".header-container");
parent.append(Header());

function Header() {
    const header = document.createElement("div");
    header.classList.add("header");

    const date = document.createElement("span");
    date.classList.add("date");
    date.textContent = "March 13th, 2020";

    const title = document.createElement("h1");
    title.classList.add("h1");
    title.textContent = "Lambda Times";

    const temperature = document.createElement("span");
    temperature.classList.add("temp");
    temperature.textContent = "68°";

    header.append(date);
    header.append(title);
    header.append(temperature);

    return header;
}

