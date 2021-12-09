// new gearManager
const productManager = new ProductController();

// DOM variables
let productList = document.getElementById("productList");
let productRows = document.getElementById("productRows");
let addProductButton = document.getElementById("addProductButton");

productManager.loadLocalStorage();



// API call to json placeholder. Will create items using this placeholder then switch out for database later.
const getGear = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if(response.status === 200){
            return response.json();
        } else {
            console.error(response)
        }
    }).then(json => {
        createGearList(json)
        return json;
    })
}

// function for api call
// const createGearList = (json) => {
//     let gear = json;
//     console.log(gear)

//     for (let i = 0; i < gear.length; i++){
//         let newRow = document.createElement("tr")
//         newRow.innerHTML = `<tr>
//         <th scope="row">${gear[i].username}</th>
//         <td>${gear[i].name}</td>
//         <td>${gear[i].email}</td>
//         <td>${gear[i].id}</td>
//       </tr>`;
//       gearRows.append(newRow);
//     }
// }

// will be used when data persists
const createGearList = (gear) => {
    for (let i = 0; i < gear.length; i++){
        let newRow = document.createElement("tr")
        newRow.innerHTML = `<tr>
        <th scope="row"><img class="img-thumbnail" src="${gear[i].picUrl}"></th>
        <td>${gear[i].name}</td>
        <td>${gear[i].usedFor}</td>
        <td>${gear[i].price}</td>
      </tr>`;
      gearRows.append(newRow);
    }
}

const addItemToGearList = (gear) => {
    console.log(gear);
        let newRow = document.createElement("tr")
        newRow.innerHTML = `<tr>
        <th scope="row"><img class="img-thumbnail" src="${gear.picUrl}"></th>
        <td>${gear.name}</td>
        <td>${gear.usedFor}</td>
        <td>${gear.price}</td>
      </tr>`;
      gearRows.append(newRow); 
}

// uncomment the function call below to run the API and populate the list of gear... It is currently a list of people because I am using a jsonPlaceHolder API
// getGear();

const loadLocalStorage = () => {
    if (localStorage.getItem("gear")){
        console.log("gear exists");
        let gear = JSON.parse(localStorage.getItem("gear"));
        createGearList(gear);
    } else {
        console.log("no gear")
    }
}

addGearButton.addEventListener("click", function(event){
    event.preventDefault();
    let gearURL = document.getElementById("gearURL");
    let gearType = document.getElementById("gearType");
    let gearPrice = document.getElementById("gearPrice");
    let gearUsedFor = document.getElementById("gearUsedFor");

    gearManager.addGear(gearURL.value, gearType.value, gearUsedFor.value, gearPrice.value);
    addItemToGearList({
        picUrl: gearURL.value,
        name: gearType.value,
        usedFor: gearUsedFor.value,
        price: gearPrice.value
    });

    gearURL = '';
    gearType = '';
    gearPrice = '';
    gearUsedFor = '';
})

loadLocalStorage();