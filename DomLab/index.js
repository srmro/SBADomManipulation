
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];


// 1. Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector("main");

//2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property; Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;

//4. Add a class of flex-ctr to mainEl.
//Hint: Use the Element.classList API.
mainEl.classList.add('flex-ctr');

//PART 2:
// 1. Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

let topMenuEl = document.querySelector("#top-menu")
//console.log(topMenuEl);
//2.
topMenuEl.style.height = "100%";

//3.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

//4. 
topMenuEl.classList.add('flex-around');

for (let i = 0; i < menuLinks.length; i++) {
  let linkElement = document.createElement("a");
  linkElement.setAttribute("href", menuLinks[i].href)
  linkElement.textContent = (menuLinks[i].text);
  topMenuEl.appendChild(linkElement);
  //console.log(linkElement);
}

//PART3: Creating the submenu
//1. Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById("sub-menu");

subMenuEl.style.height = "100%";

//3.
topMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

//4.
subMenuEl.classList.add('flex-around');

subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";


//select and cache the all of the <a> elements inside of topMenuEl IN A VARIABLE that is NAMED topMenuLinks
let topMenuLinks = topMenuEl.querySelectorAll("#top-menu a");
let submenuLinks = {};

//Attach a delegated 'click' event listener to topMenuEl.

topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();

  //The second line of code of the function should immediately return 
  // IF the element clicked was NOT an <a> element.

  if (!event.target.matches("a")) {
    return;
  }

  const x = event.target;

  //The event listener should add the active class to the <a> element that was clicked, 
  // unless it was already active, in which case it should remove it.

  topMenuLinks.forEach((link) => {
    link.classList.remove("active");
  });

  x.classList.toggle("active");
  //he event listener should remove the active class from each other <a> element in topMenuLinks 
  // - whether the active class exists or not.
});

//Part 5: Adding Submenu Interaction

const activeLinkObjects = menuLinks.find((linkObject) => linkObject.text === x.textContent);


if (activeLinkObjects && activeLinkObjects.sublinks) {
  if (submenuLinks[activeLinkObjects.text]) {
    subMenuEl.style.top = "0";
    innerHTML = '';
    submenuLinks[activeLinkObjects.text] = false;
  } else {
    subMenuEl.style.top = "100%";
    buildSubmenu(activeLinkObjects.subLinks);
    submenuLinks[activeLinkObjects.text] = true;
  }

} else {
  subMenuEl.style.top = "0"; //Otherwise, set the CSS top property of subMenuEl to 0.
  subMenuEl.innerHTML = '';
}

if (event.target,textContent === "about") { //If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT)
  mainEl.innerHTML = "<h1>About</h1>";

} else {
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
}



//The submenu needs to be dynamic based on the clicked link.
// To facilitate that, we will create a helper function called buildSubmenu that does the following:





//Clear the current contents of subMenuEl.

//Iterate over the subLinks array, passed as an argument, and for each "link" object:
// Create an <a> element.
// Add an href attribute to the <a>, with the value set by the href property of the "link" object.
// Set the element's content to the value of the text property of the "link" object.
// Append the new element to the subMenuEl.

function helpSubmenu (subLinks){
  subMenuEl.innerHTML = '';
  for (let link of subLinks) {
    let subLinkElement = document.createElement("a");
    subLinkElement.setAttribute("href, link.href");
    subLinkElement.textContent = link.text;
    subMenuEl.appendChild(subLinkElement);
  }
}

subMenuEl.addEventListener("click", (event) =>{ // Attach a delegated 'click' event listener to subMenuEl.
  event.preventDefault(); // The first line of code of the event listener function should call the event object's preventDefault() method.
  if(!event.target.matches("a")) { // Log the content of the <a> to verify the handler is working.
    return; // The second line of code within the function should immediately return if the element clicked was not an <a> element.
  }

  subMenuEl.style.top = "0"; // Next, the event listener should set the CSS top property of subMenuEl to 0.
  topMenuLinks.forEach((link) => {
    link.classList.remove("active"); // Remove the active class from each <a> element in topMenuLinks.
  });
mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;// Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.

console.log("Clicked link text: ", event.target.textContent); // If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
})










 


