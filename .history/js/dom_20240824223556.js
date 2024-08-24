const box = document.querySelector(".box");
const seeMore=document.querySelector(".seeMore")
const clos=document.querySelector(".clos")

clos.addEventListener("click",()=>{
  seeMore.close()
})
console.log(box);

let idx = null;


function getData(data) {
  box.innerHTML = "";
  data.forEach((e, i) => {
    const card = document.createElement("div");
    const title = document.createElement("h3");
    title.innerHTML = e.title;
    title.classList.add("title");

    const text = document.createElement("h4");
    text.innerHTML = e.Category;

    const level = document.createElement("h4");
    level.innerHTML = e.level;
    level.classList.add("level");

    const button = document.createElement("button");
    button.innerHTML = "SEE MORE";
    button.classList.add("button");
    button.onclick=()=>{
      seeMore.showModal()
      seeMore.append(title)
      const card1=document.querySelector("div")
      const card2=document.querySelector("div")
      const card3=document.querySelector("div")
      const card4=document.querySelector("div")
      const description=document.createElement("h1")
      const descriptionp=document.createElement("p")
      const Essential =document.createElement("h1")
      card1.innerHTML=e.closing
      card1.style.background="gray"
      card2.innerHTML=e.Category
      card1.style.background="gray"
      card3.innerHTML=e.level
      card3.style.background="gray"
      card4.innerHTML=e.loc
      description.innerHTML="Description"
      descriptionp.innerHTML=e.description

      Essential.innerHTML="Essential criteria"
      const  criteria=document.createElement("p")
      criteria.innerHTML=e.eses

      const Desirable =document.createElement("h1")
      Desirable.innerHTML="Desirable criteria"
      const  criteria1=document.createElement("p")
      criteria1.innerHTML=e.crit
      
    }
    seeMore.append(card1,card2,card3,card4,description,descriptionp,Essential,criteria,Desirable,criteria1)
    

    const loc = document.createElement("span");
    loc.innerHTML = e.loc;

    const block1 = document.createElement("div");
    block1.classList.add("block1");
    block1.append(title, level);
    card.classList.add("card");

    const block2 = document.createElement("div");
    block2.classList.add("block2");

 
    block2.append(button, loc);
    card.append(block1, text, block2);
    box.appendChild(card);
  });
}
export { getData };
