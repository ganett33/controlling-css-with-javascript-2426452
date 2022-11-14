const styleSheets = document.styleSheets;
// assigned the ID from CSS
const listButton = document.getElementById('list');
const gridButton = document.getElementById('grid');

// find specific style sheet in as document
const styleSheetsArray = Array.from(styleSheets);
const targetSheet = styleSheetsArray.find((styleSheet) => {
  if (styleSheet?.href) {
    const pathName = new URL(styleSheet.href).pathname.split('/').pop();
    if (pathName === 'grid.css') {
      return styleSheet;
    }
  }
});

// disabled grid.css
targetSheet.disabled = true;
// add the class in the html
listButton.classList.add('current');

// when targetID is grid, remove current class form list button,
// when not current class removed from grid button.
const highlightSelected = (targetID) => {
  if (targetID === 'grid') {
    listButton.classList.remove('current');
    gridButton.classList.add('current');
  } else {
    gridButton.classList.remove('current');
    listButton.classList.add('current');
  }
};

// callback function that when user click listview btn
listButton.addEventListener('click', (e) => {
  highlightSelected(e.target.id);
  targetSheet.disabled = true;
});
// callback function that when user click gridview btn
gridButton.addEventListener('click', (e) => {
  highlightSelected(e.target.id);
  targetSheet.disabled = false;
});

console.log(listButton);
