const select1 = document.querySelector(".select1");
const select2 = document.querySelector(".select2");
const Description = document.querySelector(".Description");
const Essential = document.querySelector(".Essential");
const criteria = document.querySelector(".criteria");

const formAdd = document.querySelector(".formAdd");
import { Edit } from "./api.js";
console.log(formAdd["title"].value);
console.log();

let idx = null;
formAdd.onsubmit = () => {
  let obj = {
    title: formAdd["title"].value,
    phone: formAdd["Phone"].value,
    loc: formAdd["location"].value,
    description: Description.value,
    eses: Essential.value,
    crit: criteria.value,
    level: select2.value,
    Category: select1.value,
    app: formAdd["app"].value,
  };
  Edit(obj, e.id);
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
    btnedit.onclick=()=>{
      idx = i;
      formAdd["title"].value = e.title;
      formAdd["Phone"].value = e.phone;
      formAdd["location"].value = e.loc;
      Description.value = e.description;
      Essential.value = e.eses;
      criteria.value = e.crit;
      select2.value = e.level;
      select1.value = e.Category;
      formAdd["app"].value = e.app;
     
    }
    console.log();
    // console.log(formAdd["title"].value=e.title);
    
    Action.append(btndelete, btnedit);
    tr.append(title, Category, level, loc, phone, app, closing, Action);
    
  });
}
export { getData };
