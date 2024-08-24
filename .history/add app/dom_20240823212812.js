
const select1 = document.querySelector(".select1");
const select2 = document.querySelector(".select2");
const Description = document.querySelector(".Description");
const Essential = document.querySelector(".Essential");
const criteria = document.querySelector(".criteria");
const close = document.createElement("a")

close.href = "/";
close.innerHTML="close"
console.log(close);
const formAdd = document.querySelector(".formAdd");
import { addTaks } from "./api.js";
formAdd.onsubmit = (event) => {
  event.preventDefault();
  let obj = {
    title: formAdd["title"].value,
    closing: new Date().toISOString().slice(0, 10),
    phone: formAdd["Phone"].value,
    loc: formAdd["location"].value,
    description: Description.value,
    eses: Essential.value,
    crit: criteria.value,
    level:select2.value ,
    Category: select1.value,
    app: formAdd["app"].value,
  };
  addTaks(obj);
  alert(close)
  console.log( formAdd["title"].value);
  console.log( formAdd["Phone"].value);
  console.log( Essential.value);
  console.log( select2.value);

};
function getData(data) {
  //   box.innerHTML = "";
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
    const btnedit = document.createElement("a");
    btnedit.href = "";
    btnedit.innerHTML = "edit";
    Action.append(btndelete, btnedit);
    tr.append(title, Category, level, loc, phone, app, closing, Action);
    // box.appendChild(tr);
  });
}
export { getData };
