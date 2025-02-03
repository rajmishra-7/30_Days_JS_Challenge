//task1

const newElement = document.createElement('div');
newElement.textContent = "hello";

document.body.append(newElement);

//task2
const newListElement = document.createElement('li');
newListElement.textContent = "Dragonfruit";
const targetTag = document.getElementsByTagName('ul');
targetTag[0].append(newListElement);
