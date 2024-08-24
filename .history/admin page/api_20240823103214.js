
const Api="https://66b99bb1fa763ff550f8d5f2.mockapi.io/back/users"
import { getData, } from "./dom.js";
const search=document.querySelector(".search")

search.oninput=(event)=>{
    const filter=event.target.value.toLowerCase()
    const users=document.querySelectorAll(".user")
    users.forEach(user=>{
        const name=user.querySelector(".name").textContent.toLowerCase()
        if(name.includes(filter)){
            user.style.display="block"
        }else{
            user.style.display="none"
        }
    })
}

async function Get() {
    try {
        const {data}=await axios.get(Api)
        getData(data)
    } catch (error) {
        console.error(error);
    }
}
async function Delete(idx) {
    try {
        const {data}=await axios.delete(`${Api}/${idx}`)
        Get()
    } catch (error) {
        
    }
}
// async function addTaks(obj) {
//     try {
//         const {data}=await axios.post(Api,obj)
//         Get()
//     } catch (error) {
//         console.error(error);
//     }
// }
export {Get,Delete}