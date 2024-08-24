import { Delete } from "./api.js";
import { formedit } from "../edit/dom.js";
const box = document.querySelector(".box1");
let idx = null;

function getData(data) {
  box.innerHTML = "";
  data.forEach((e, i) => {
    const tr = document.createElement("tr");
    const title = document.createElement("td");
    title.innerHTML = e.title;
    const Category = document.createElement("td");
    Category.innerHTML = e.Category;
    const level = document.createElement("td");
    level.innerHTML = e.level;
    const loc = document.createElement("td");
    loc.innerHTML = e.loc;
    const phone = document.createElement("td");
    phone.innerHTML = e.phone;
    const app = document.createElement("td");
    app.innerHTML = e.app;
    const closing = document.createElement("td");
    closing.innerHTML = e.closing;
    const Action = document.createElement("td");
    const btndelete = document.createElement("button");
    btndelete.innerHTML = "del";
    btndelete.onclick = () => {
      Delete(e.id);
      console.log(idx);
    };
 
    

    const btnedit = document.createElement("a");
    btnedit.href = "/edit/index.html";
    btnedit.innerHTML = "edit";
    btnedit.onclick=()=>{
      formedit["edittitle"].value = e.title;
      formedit["editPhone"].value = e.phone;
      formedit["editlocation"].value = e.loc;
      // editDescription.value = e.description;
      // editEssential.value = e.eses;
      // editcriteria.value = e.crit;
      // editselect2.value = e.level;
      // editselect1.value = e.Category;
      formedit["editapp"].value = e.app;
    }
    console.log(formedit["edittitle"].value);
    Action.append(btndelete, btnedit);
    btndelete.classList.add("btndelete")
    btnedit.classList.add("btnedit")
    tr.append(title, Category, level, loc, phone, app, closing, Action);
    box.appendChild(tr);
  });
}
export { getData, idx };
