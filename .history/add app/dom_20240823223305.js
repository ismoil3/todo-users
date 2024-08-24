console.log(close);
const formAdd = document.querySelector(".formAdd");
import { addTaks } from "./api.js";
formAdd.onsubmit = (event) => {
  event.preventDefault();
  let obj = {
    closing: new Date().toISOString().slice(0, 10),
    phone: formAdd["Phone"].value,
    loc: formAdd["location"].value,
    app: formAdd["app"].value,
    img: formAdd["img"].value,
    email:formAdd

  };
  addTaks(obj);
  alert("uspeshno click back")

};
function getData(data) {
  
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
   
  });
}
export { getData };
