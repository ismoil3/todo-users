import { Get } from "../admin page/api.js";
const Api="https://66b99bb1fa763ff550f8d5f2.mockapi.io/back/users"


async function addTaks(obj) {
    try {
        const {data}=await axios.post(Api,obj)
        Get()
    } catch (error) {
        console.error(error);
    }
}

export {AddTaks}