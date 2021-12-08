// start by creating an instance of your class
const loginManager = new loginController();

loginManager.storeLogin();


let gearRows = document.getElementById('gearRows');
let addGearBtn = document.getElementById('addGearButton');

addGearBtn.addEventListener("click", function(event){
    event.preventDefault();

    let gearURL = document.getElementById("gearURL");
    let gearURL = document.getElementById("gearType");
    let gearURL = document.getElementById("gearPrice");
    let gearURL = document.getElementById("gearUsedFor");

    gearManager.addGear(gearURL.value, gearType.value, gearPrice.value, gearUsedFor.value);

    gearURL.value = "";
    gearType.value = "";
    gearPrice.value = "";
    gearUsedFor.value = "";

})