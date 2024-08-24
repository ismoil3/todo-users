import { Delete,Edit } from "./api.js";
// import { formedit } from "../edit/dom.js";
const editDialog=document.querySelector(".editDialog")
const formedit=document.querySelector(".formedit")
const editDescription=document.querySelector(".editDescription")
const editEssential=document.querySelector(".editEssential")
const editcriteria=document.querySelector(".editcriteria")
const editselect2=document.querySelector(".editselect2")
const editselect1=document.querySelector(".editselect1")
const cancel=document.querySelector(".cancel")

cancel.onclick=()=>{
  editDialog.close()
}
const box = document.querySelector(".box1");
let idx = null;
let idd=null
      formedit.onsubmit = (event) => {
        event.preventDefault();
        let obj = {
          title: formedit["edittitle"].value,
          phone: formedit["editPhone"].value,
          loc: formedit["editlocation"].value,
          description: editDescription.value,
          eses: editEssential.value,
          crit: editcriteria.value,
          level: editselect2.value,
          Category: editselect1.value,
          app: formedit["editapp"].value,
        };
        Edit(obj,idd);
        editDialog.close()
      };   
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
    

    const btnedit = document.createElement("button");
    btnedit.innerHTML = "edit";
    btnedit.onclick=()=>{
      editDialog.showModal()
      formedit["edittitle"].value = e.title;
      formedit["editPhone"].value = e.phone;
      formedit["editlocation"].value = e.loc;
      editDescription.value = e.description;
      editEssential.value = e.eses;
      editcriteria.value = e.crit;
      editselect2.value = e.level;
      editselect1.value = e.Category;
      formedit["editapp"].value = e.app;
      idd=e.id
      console.log(idd);
    }
    console.log(formedit);
    Action.append(btndelete, btnedit);
    btndelete.classList.add("btndelete")
    btnedit.classList.add("btnedit")
    tr.append(title, Category, level, loc, phone, app, closing, Action);
    box.appendChild(tr);
  });
}
export { getData, idx };
