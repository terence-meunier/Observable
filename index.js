import Observable from "./observable";
import Observer from "./observer";
import createObserver from "./utils";

const subject = new Observable();
const observer1 = new Observer("Observeur 1");
const observer2 = new Observer("Observeur 2");

subject.subscribe(observer1);
subject.subscribe(observer2);

createObserver(document, 'name', 'keyup', subject);
createObserver(document, 'my-button', 'click', subject);