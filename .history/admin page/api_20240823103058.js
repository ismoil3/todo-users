
const Api="https://66b99bb1fa763ff550f8d5f2.mockapi.io/back/users"
import { getData, } from "./dom.js";
const search=

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