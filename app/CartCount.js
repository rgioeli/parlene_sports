import { mongoConnect } from "../lib/mongodb";
import Nav from "./Nav";

async function getCartCount() {
  try {
    const client = await mongoConnect();
    const result = await client
      .db("parlene_sports")
      .collection("cart")
      .countDocuments();
    return result.json();
  } catch (e) {
    throw e;
  }
}

const CartCount = async ({ children }) => {
  const cartCount = await getCartCount();
  console.log("Penis pump");
  console.log(cartCount);
  return <Nav />;
};

export default CartCount;
