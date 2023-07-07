import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="mb-40 d-flex justify-between align-center">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="\img\search.svg" alt="search"></img>
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">
          {Card(
            "https://cdn.shopify.com/s/files/1/0049/9112/products/JordanBrandAIRJORDAN1RETROHIOGVARSITYMAIZEGAMEROYAL-SAIL7FD2596-700_1_2048x2048.jpg?v=1682086199",
            "WOMEN'S AIR JORDAN 1 RETRO HI OG",
            "180.00"
          )}
          {Card(
            "https://cdn.shopify.com/s/files/1/0049/9112/products/JordanBrandWAIRJORDAN1RETROHIGHMEDIUMGREYBLACK-WHITE5DZ2523-001_1_2048x2048.jpg?v=1671721422",
            "WOMEN'S AIR JORDAN 1 RETRO HIGH",
            "144.00"
          )}
          {Card(
            "https://cdn.shopify.com/s/files/1/0049/9112/products/JordanBrandWMNSAIRJORDAN2RETROWHTEVRSTYRED-BLK6.5DX4400-106_1_2048x2048.jpg?v=1672412632",
            "WOMEN'S AIR JORDAN 2 RETRO",
            "160.00"
          )}
          {Card(
            "https://cdn.shopify.com/s/files/1/0049/9112/products/JordanBrandWMNSAIRJORDAN6RETROWHITEPUREPLATINUM-MINTFOAM6DQ4914-103_1_2048x2048.jpg?v=1670435330",
            "WOMEN'S AIR JORDAN 6 RETR",
            "200.00"
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
