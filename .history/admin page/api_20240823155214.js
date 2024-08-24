
const Api="https://66b99bb1fa763ff550f8d5f2.mockapi.io/back/users"
import { getData, } from "./dom.js";
const search=document.querySelector(".search")

search.oninput=(event)=>{
    Get(event.target.value)
}

async function Get(word) {
    try {
        const {data}=await axios.get(word? Api+"?title="+word:Api)
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
async function edit(obj,idd) {
    try {
        const {data}=await axios.post(`${Api}/`)
        Get()
    } catch (error) {
        console.error(error);
    }
}
export {Get,Delete}