
const Api="https://66b99bb1fa763ff550f8d5f2.mockapi.io/back/users"
import { getData, } from "./dom.js";

async function Get() {
    try {
        const {data}=await axios.get(word? Api+"?title="+word:Api)
        getData(data)
    } catch (error) {
        console.error(error);
    }
}
export {Get}