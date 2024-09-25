window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    // Change this value based on when you want the change to occur
    nav.style.background = 'white'; /* Background color when scrolling *//* Border color and style */
    nav.style.borderRadius = '0px 0px 3px 3px'; /* Rounded bottom corners */
    nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2  )'; /* Shadow effect */
    nav.style.color = 'black'; /* Text color when scrolling */
    nav.querySelectorAll('h3, li, a').forEach((element) => {
      element.style.color = '#006ec1'; /* Text color for each element when scrolling */

    });
  } else {
    nav.style.background = 'transparent'; /* Background color at the top */
    nav.style.border = 'none'; /* Remove border at the top */
    nav.style.color = 'white'; /* Text color at the top */
    nav.style.boxShadow = 'none'; /* Remove shadow at the top */
    nav.querySelectorAll('h3, li, a').forEach((element) => {
      element.style.color = 'white'; /* Text color for each element at the top */
    });
  }
});
