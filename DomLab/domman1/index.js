var menuLinks = [
    { text: "about", href: "/about" },
    { text: "catalog", href: "/catalog" },
    { text: "orders", href: "/orders" },
    { text: "account", href: "/account" },
  ];
  
  let mainEl = document.querySelector("main");
  
  mainEl.style.backgroundColor = "var(--main-bg)";
  
  mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;
  
  mainEl.classList.add("flex-ctr");
  
  let topMenuEl = document.querySelector("#top-menu");
  
  topMenuEl.style.height = "100%";
  
  topMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  
  topMenuEl.classList.add("flex-around"); //4
  
  for (let i = 0; i < menuLinks.length; i++) {
    let linkElement = document.createElement("a");
  
    linkElement.setAttribute("href", menuLinks[i].href);
    linkElement.textContent = menuLinks[i].text;
    topMenuEl.appendChild(linkElement);
    console.log(linkElement);
  }
  