const Api = "https://66b99bb1fa763ff550f8d5f2.mockapi.io/back/users";
import { getData } from "./dom.js";
const search = document.querySelector(".search");

search.oninput = (event) => {
  Get(event.target.value);
};

async function Get(word) {
  try {
    const { data } = await axios.get(if (word) {
      Api = "?title=" + word;
  } else if (anotherCondition) {
      Api = "?anotherParam=" + anotherValue;
  } else {
      Api = "defaultApi";
  });
    getData(data);
  } catch (error) {
    console.error(error);
  }
}

export { Get };
