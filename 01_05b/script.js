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

/* Insert rules from a style sheet */
// I can create a new rule and inject it anywhere I want within my style sheet
// and it'll automatically position itself to whatever index position I'm selecting.
targetSheet.insertRule('.animals li a{ border-color: green}', 1);

/* Delete rules from a style sheet */
// js works from top down
targetSheet.deleteRule(0);

console.log(targetSheet);
