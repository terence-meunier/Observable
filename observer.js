class Observer {

    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(this.name + ' reçois en donnée : ' + data);
    }
}

export { Observer }