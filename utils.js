const createObserver = (parent, id, event, observable) => {
    parent.getElementById(id).addEventListener(event, (e) => {
        observable.update(e.target);
    });
}

export default createObserver;