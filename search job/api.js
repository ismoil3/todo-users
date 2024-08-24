
const Api="https://66b99bb1fa763ff550f8d5f2.mockapi.io/back/users"
// import { getData } from "./domsearch.js";
import { select1,select2,getData } from "../search job/domsearch.js";

let x='',y=''
select1.onchange=(e)=>
    {
        if(e.target.value!='all')
            {
                x='?&Category='+e.target.value;
                Get()
            }
            else{
                x=''
                Get()
            }
    }
    select2.onchange=(e)=>{
        if(e.target.value!='all'){
            if(x=='') y='?&level='+e.target.value;
            else  y='&level='+e.target.value;
            Get();
        }
        else{
            y=''
            Get();
        }
    }
async function Get() {
    try {
        const {data}=await axios.get(Api+x+y)
        getData(data)
    } catch (error) {
        console.error(error);
    }
}
export {Get}