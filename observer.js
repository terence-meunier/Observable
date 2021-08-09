class Observer {

    constructor(name) {
        this.name = name;
    }

    update(data) {
        if (data.type === 'submit') {
            console.log(this.name + ' a observé que le bouton ' + data.id + ' a été cliqué');
        } else {
            console.log(this.name + ' a observé que la balise ' + data.id + ' a changé de valeur : ' + data.value);
        }        
    }
}

export default Observer;