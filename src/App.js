import './App.css';
import {useState} from "react"
import Header from "./Header.js";
import Product from "./Product.js";

function App() {

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1)
  };

  console.log("Hello");
  const [products, setProducts] = useState([
    {increment:increment, title: "Title 1", author: "Author Authorsson", text: "Lot of text Lot of text Lot of text Lot of text Lot of text Lot of text Lot of text Lot of text Lot of text Lot of text ", id: 1},
  ]);

  function updateProduct(newProduct) {
    console.log("I updateProduct i App.js")
    const product = {
      title: newProduct.title,
      author: newProduct.author,
      text: newProduct.text,
      id: products.length +1,
    };

    console.log("Product: ", product);

    // let copyProducts = [...products];
    let newArray = products.concat(product);
    setProducts(newArray);    

    console.log("Product Array: ", products);
  }

  return (
    
  <div className="App">
    <Header count={count} update={updateProduct}/>
    
    <main>

    { products.map((product) => {
    return <Product increment={ increment } title= {product.title } author={ product.author } text={ product.text } key={product.id}/>
    })}
    
    </main>
  </div>
);
}

export default App;
