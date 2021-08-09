class Observable {
    
    constructor() {
        this.observers = [];
        this.name = '';
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    update(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

export default Observable;