// Write your code here!
const removeMain = document.getElementById('main');
removeMain.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
document.body.appendChild(newHeader); 

newHeader.innerHTML = 'Natalie is the champion'