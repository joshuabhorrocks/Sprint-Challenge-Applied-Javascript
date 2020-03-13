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
    console.log(response.data);
    response.forEach(value => { // For each value in the returned array of respons
        response.append(papa(value.response)); // Append that data to the parent
    })
    //papa.append(Topics(response.data));
})
.catch(error => {
    console.log("Red Alert. Warp Core Breach Imminent.", error);
})

const papa = document.querySelector(".tabs");
papa.append(Topics);

function Topics (response) {
    const newTab = document.createElement("div");
    newTab.classList.add("tab");
    newTab.textContent = `${response.data}`;

    return newTab;
}