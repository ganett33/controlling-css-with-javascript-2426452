const heading = document.querySelector('.masthead h1');
const computedStyles = window.getComputedStyle(heading);

// Access to the all computedStyles
console.log(computedStyles);

/* Access to 2 ways of computedStyles  */
// Access to the computedStyles with JS property name
console.log(computedStyles.fontSize);
// Access to the computedStyles with CSS name
console.log(computedStyles.getPropertyValue('font-size'));
