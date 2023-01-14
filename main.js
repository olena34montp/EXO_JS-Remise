//Create input

let amountInput = document.createElement('input');
amountInput.setAttribute('type', 'text');
amountInput.setAttribute('value', '');
document.querySelector('main').appendChild(amountInput);

//Create button

let amountBtn = document.createElement('button');
amountBtn.setAttribute('class', 'btn');
amountBtn.appendChild(document.createTextNode('Submit'));
document.querySelector('main').appendChild(amountBtn);

amountBtn.addEventListener('click', (e) => {
    e = amountInput.value;
    e = Number(e);
    if(e > 150){
        return alert(`Votre remise est ${e * 0.01} euro`);
    } else if (e <= 150){
        return alert(`Vous n'avez pas de remise`);
    } else {
        return alert(`Vous saisez faux numero`);
    }
});