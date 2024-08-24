const box = document.querySelector(".box");

function getData(data) {
  box.innerHTML = "";
  data.forEach((e, i) => {
    const card = document.createElement("div");
    
    box.appendChild(card);
  });
}
export { getData };
