class Observable {
    
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    update(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

export { Observable }