import { Delete } from "./api.js";
// import { formedit } from "../edit/dom.js";
const <div class="main">
<form action="" class="formedit">
  <div class="btns">
    <h1>Details</h1>
    <div class="btns b">
      <a href="/admin page/admin.html" class="cancel">cancel</a>
      <button type="submit" class="save">save</button>
      <a class="sav" href="/admin page/admin.html">back</a>
    </div>
  </div>
  <input type="text" maxlength="15" name="edittitle" placeholder="title" /><br />
  <!-- <input type="date" name="data" placeholder="Closing data"><br> -->
  <input type="text" maxlength="15" name="editPhone" placeholder="Phone number" /><br />
  <input type="text" maxlength="15" name="editlocation" placeholder="Location" /><br />
  <input type="text" maxlength="20" name="editapp" placeholder="Full-name" /><br />
  <select name="" id="" class="editselect1">
    <option value="Frontend">Frontend</option>
    <option value="Backend">Backend</option>
  </select>
  <select name="" id="" class="editselect2">
    <option value="Junior">Junior</option>
    <option value="Middle">Middle</option>
    <option value="Senior">Senior</option>
    <option value="Full-stack">Full-stack</option></select
  ><br /><br />
  <textarea
    class="editDescription"
    id=""
    cols="69"
    rows="4"
    placeholder="Description"
  ></textarea
  ><br />
  <textarea
    class="editEssential"
    id=""
    cols="69"
    rows="4"
    placeholder="Essential criteria"
  ></textarea
  ><br />
  <textarea
    class="editcriteria"
    id=""
    cols="69"
    rows="4"
    placeholder="Desirable criteria"
  ></textarea
  ><br />
  <!-- <textarea name="" id="" cols="69" rows="4" placeholder="Benefits"></textarea><br> -->
</form>
</div>
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
    console.log(formedit);
    Action.append(btndelete, btnedit);
    btndelete.classList.add("btndelete")
    btnedit.classList.add("btnedit")
    tr.append(title, Category, level, loc, phone, app, closing, Action);
    box.appendChild(tr);
  });
}
export { getData, idx };
