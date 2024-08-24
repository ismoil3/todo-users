const box = document.querySelector(".box1");
console.log(box);
function getData(data) {
  box.innerHTML = "";
  data.forEach((e, i) => {
    const tr = document.createElement("tr");
    const user = document.createElement("td");
    const name=document
    user.innerHTML = e.app;
    const email = document.createElement("td");
    email.innerHTML = e.email;

    const loc = document.createElement("td");
    loc.innerHTML = e.loc;
    const phone = document.createElement("td");
    phone.innerHTML = e.phone;
    const title = document.createElement("td");
    title.innerHTML = e.title;

    
    tr.append(user, email, loc, phone, title);
    box.appendChild(tr);
  });
}
export { getData };
