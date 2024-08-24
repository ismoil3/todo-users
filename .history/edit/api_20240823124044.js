

const Api = "https://66b99bb1fa763ff550f8d5f2.mockapi.io/back/users";
import { getData } from "./dom.js";

async function Get() {
  try {
    const { data } = await axios.put(Api);
    getData(data);
  } catch (error) {
    console.error(error);
  }
}
async function Edit(obj,id) {
  try {
    const { data } = await axios.post(`${Api}/${id}`,obj);
    Get();
  } catch (error) {
    console.error(error);
  }
}
export { Get, Edit };
