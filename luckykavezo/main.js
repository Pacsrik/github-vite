import header from "./src/header.js";
import footer from "./src/footer.js";
import kavek from "./src/kavek.js";
import sutemenyek from "./src/sutemenyek.js";
import galeria from "./src/galeria.js";

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
