// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
    let topicArr = response.data.topics;
    topicArr.forEach(article => {
        topics(article)
    })
})
.catch(error => {
    console.log("Red Alert. Warp Core Breach Imminent.", error);
})

const papa = document.querySelector(".topics");

function topics (topic) {
    const newTab = document.createElement("div");
    papa.appendChild(newTab);
    newTab.classList.add("tab");
    newTab.textContent = topic;

    return newTab;
}