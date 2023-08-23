import { useState } from "react";
import SearchProduct from "./Search.product";
import SearchStore from "./Search.store";

function Search() {
  const [ex, setEx] = useState("");
  const [ex1, setEx1] = useState("");
  const Change = () => {
    setEx1(ex);
  };
  return (
    <>
      <input onChange={(e) => setEx(e.target.value)} />
      <button
        onClick={Change}
        style={{ widh: "30px", height: "30px" }}
      ></button>
      <SearchProduct></SearchProduct>
      <SearchStore prop={"샵"}></SearchStore>
    </>
  );
}
export default Search;
