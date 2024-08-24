const formAdd=document.querySelector(".formAdd")
import { addTaks } from "./api.js";
console.log(formAdd);
formAdd.onsubmit=(event)=>{
    event.preventDefault();
    let obj={
        title:formAdd["title"].value,
        content:formAdd["content"].value,
        date:new Date().toISOString().slice(0,10),
        phone:formAdd["phone"].value,
        loc:formAdd["location"].value,
        Category:formAdd["categories"].value,
        description:formAdd["Description"].value,
        eses:formAdd["Essential"].value,
        crit:formAdd["criteria"].value,
    }
    console.log(formAdd["title"].value,);
    addTaks(obj)
}