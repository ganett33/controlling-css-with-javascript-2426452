const listItem = document.querySelector('.animals li:nth-child(5) a');

listItem.style.backgroundColor = 'orange';
//direct access to each individual property
listItem.style.fontStyle = 'italic';

// attribute or set the attribute
listItem.setAttribute('style', 'font-style: italic;');

console.log(listItem.getAttribute('style'));
