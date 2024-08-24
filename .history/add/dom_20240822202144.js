const formAdd=document.querySelector(".formAdd")

formAdd.onsubmit=(event)=>{
    event.preventDefault();
    let obj={
        title:formAdd["title"],
        content:formAdd["content"],
        date:new Date().toISOString().slice(0,10),
        phone:formAdd["phone"].

    }
}