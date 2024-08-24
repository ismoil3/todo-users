const box = document.querySelector(".box");
const seeMore=document.querySelector(".seeMore")
const clos=document.querySelector(".clos")

clos.addEventListener("click",()=>{
  seeMore.close()
})
console.log(box);

let idx = null;
const ma=document.querySelector

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
    const ob=document.querySelector(".ob")
    const button = document.createElement("button");
    button.innerHTML = "SEE MORE";
    button.classList.add("button");
    ob.classList.add("ob")
    button.onclick=()=>{
      const card2=document.createElement("div")
      seeMore.showModal()
      const card4=document.createElement("div")
      seeMore.append(title)
      const descriptionp=document.createElement("p")
      const card1=document.createElement("div")
      const  criteria=document.createElement("p")
      const card3=document.createElement("div")
      const  criteria1=document.createElement("p")
      const description=document.createElement("h1")
      const Essential =document.createElement("h1")
      const Desirable =document.createElement("h1")
      ob.append(card1,card2,card3,card4)
      

      card1.classList.add("card1")
      card2.classList.add("card1")
      card3.classList.add("card1")
      card4.classList.add("card1")
      
      

      card1.innerHTML=e.closing
      card1.style.background="gray"
      card2.innerHTML=e.Category
      card2.style.background="gray"
      card3.innerHTML=e.level
      card3.style.background="gray"
      card4.innerHTML=e.loc
      card4.style.background="gray"
      
      description.innerHTML="Description"
      descriptionp.innerHTML=e.description
      Essential.innerHTML="Essential criteria"
      criteria.innerHTML=e.eses
      Desirable.innerHTML="Desirable criteria"
      criteria1.innerHTML=e.crit
      
      seeMore.append(description,descriptionp,Essential,criteria,Desirable,criteria1)
    }
    

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