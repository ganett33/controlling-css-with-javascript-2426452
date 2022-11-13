const styleSheets = document.styleSheets;

const styleSheetsArray = Array.from(styleSheets);
const targetSheet = styleSheetsArray.find((styleSheet) => {
  if (styleSheet?.href) {
    const pathName = new URL(styleSheet.href).pathname.split('/').pop();
    if (pathName === 'extra.css') {
      return styleSheet;
    }
  }
});

/* Access rules from a style sheet */
console.log(targetSheet.cssRules[0].style); // All the style list
console.log(targetSheet.cssRules[0].style.transition);
