const editselect1 = document.querySelector(".editselect1");
const editselect2 = document.querySelector(".editselect2");
const editDescription = document.querySelector(".editDescription");
const editEssential = document.querySelector(".editEssential");
const editcriteria = document.querySelector(".editcriteria");

const formedit = document.querySelector(".formedit");
import { Edit } from "./api.js";

// console.log();

let idx = null;
// formedit.onsubmit = () => {
//   let obj = {
//     title: formedit["edittitle"].value,
//     phone: formedit["editPhone"].value,
//     loc: formedit["editlocation"].value,
//     description: editDescription.value,
//     eses: editEssential.value,
//     crit: editcriteria.value,
//     level: editselect2.value,
//     Category: editselect1.value,
//     app: formedit["editapp"].value,
//   };
//   Edit(obj, e.id);
// };
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
      formedit["edittitle"].value = e.title;
      formedit["editPhone"].value = e.phone;
      formedit["editlocation"].value = e.loc;
      editDescription.value = e.description;
      editEssential.value = e.eses;
      editcriteria.value = e.crit;
      editselect2.value = e.level;
      editselect1.value = e.Category;
      formedit["editapp"].value = e.app;
     
    }
    console.log(btnedit);
    // console.log(formAdd["title"].value=e.title);
    
    Action.append(btndelete, btnedit);
    tr.append(title, Category, level, loc, phone, app, closing, Action);
    
  });
}
export { getData };
export {formedit}