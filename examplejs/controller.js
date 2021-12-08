class controller {
    constructor(currentID = 0){
        this.currentID = currentID;
        this.gearArray = [];
    }

    addGear(url, name, use, price){
        let newGear = {
            id: this.currentID++,
            url,
            name,
            use,
            price
        }
        this.gearArray.push(newGear);
    }
}