const box = document.querySelector(".box1");
console.log(box);
function getData(data) {
  box.innerHTML = "";
  data.forEach((e, i) => {
    const tr = document.createElement("tr");
    const user = document.createElement("td");
    user.innerHTML = e.app;
    const email = document.createElement("td");
    email.innerHTML = e.email;

    const loc = document.createElement("td");
    loc.innerHTML = e.loc;
    const phone = document.createElement("td");
    phone.innerHTML = e.phone;
    const app = document.createElement("td");
    app.innerHTML = e.app;
    const closing = document.createElement("td");
    closing.innerHTML = e.closing;
    
    tr.append(user, email, loc, phone, app, closing);
    box.appendChild(tr);
  });
}
export { getData };
