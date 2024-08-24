const box = document.querySelector(".box");
const close = document.createElement("a")

close.href = "";



let idx = null;
import { addTaks, Delete } from "./api.js";

function getData(data) {
  box.innerHTML = "";
  data.forEach((e, i) => {
    const card = document.createElement("div");
    const title = document.createElement("h3");
    title.innerHTML = e.title;
    title.classList.add("title");

    const text = document.createElement("h4");
    text.innerHTML = e.Category;

    const level = document.createElement("h4");
    level.innerHTML = e.level;
    level.classList.add("level");

    const button = document.createElement("button");
    button.innerHTML = "SEE MORE";
    button.classList.add("button");

    const loc = document.createElement("span");
    loc.innerHTML = e.loc;

    const block1 = document.createElement("div");
    block1.classList.add("block1");
    block1.append(title, level);
    card.classList.add("card");

    const block2 = document.createElement("div");
    block2.classList.add("block2");

    const btndelete = document.createElement("button");
    btndelete.innerHTML = "del";
    btndelete.onclick = () => {
      idx = e.id;
      Delete(idx);
    };
    block2.append(button, loc, btndelete);
    card.append(block1, text, block2);
    box.appendChild(card);
  });
}
export { getData };
