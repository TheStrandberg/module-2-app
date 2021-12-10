import "./App.css";


function Product({ title, author, text, increment }) {
    
    return (
    <div className="product">
    <h1>{title}</h1> 
    <h2>{author}</h2>
    <p>{text}</p>
    <button onClick={increment}>Add To Cart</button>
    </div>
    )
}

export default Product;