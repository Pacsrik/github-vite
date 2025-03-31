import header from "./header.js";
import footer from "./footer.js";
import kavek from "./kavek.js";
import sutemenyek from "./sutemenyek.js";
import galeria from "./galeria.js";

const init = () => {
  document.getElementById("header").innerHTML = header();
  document.getElementById("content").innerHTML = `
    ${kavek()}
    ${sutemenyek()}
    ${galeria()}
  `;
  document.getElementById("footer").innerHTML = footer();
};

document.addEventListener("DOMContentLoaded", init);
