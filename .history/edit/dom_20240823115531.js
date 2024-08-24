
const select1 = document.querySelector(".select1");
const select2 = document.querySelector(".select2");
const Description = document.querySelector(".Description");
const Essential = document.querySelector(".Essential");
const criteria = document.querySelector(".criteria");

const formAdd = document.querySelector(".formAdd");
import { addTaks } from "./api.js";



// import { Delete } from "./api.js";
// const box = document.querySelector(".box1");
let idx = null;
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
    formAdd.onsubmit = (event) => {
        event.preventDefault();
        formAdd["title"].value=e.title
        formAdd["Phone"].value=e.phone
        formAdd["location"].value=e.loc
        formAdd["description"].value=e.description
        Essential.value=e.eses
        criteria.value=e.crit
        

        let obj = {
          title: formAdd["title"].value,
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
        // alert("Added Succesfull")
        // console.log( formAdd["title"].value);
        // console.log( formAdd["Phone"].value);
        // console.log( Essential.value);
        // console.log( select2.value);
      
      };
    Action.append(btndelete, btnedit);
    tr.append(title, Category, level, loc, phone, app, closing, Action);
    // box.appendChild(tr);
  });
}
export { getData };
