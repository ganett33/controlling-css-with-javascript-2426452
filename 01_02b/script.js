const styleSheets = document.styleSheets;
/* access all style sheets in document */
console.log(styleSheets);

/* find specific style sheet in as document */
console.log(styleSheets.item(1)); // way of select item from array
console.log(styleSheets[1]); // way of select item from array

// convert style sheets array like object into an actual array (also can work with for loop)
const styleSheetsArray = Array.from(styleSheets);
// is make sure that the href property is null
const targetSheet = styleSheetsArray.find((styleSheet) => {
  if (styleSheet?.href) {
    const pathName = new URL(styleSheet.href).pathname.split('/').pop();
    if (pathName === 'extra.css') {
      return styleSheet;
    }
  }
});

console.log(targetSheet);
