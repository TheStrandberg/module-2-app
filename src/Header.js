import "./App.css";
import Cart from "./Cart.js";
import {useState} from "react";

function Header({ count, update }) {
  const [state, setState] = useState({
        title: "",
        author: "",
        text: "",
    });
    
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  function handleClick() {
    console.log("Adds product in 'Header'");
    console.log("New Product: ", state.title, state.author, state.text);
    const newProduct = {
      title: state.title,
      author: state.author,
      text: state.text,
    }
    update(newProduct)
  }

  return (
    <header>
      <div className="input">
        <form>
          <ul>
            <li>
              <label>
                <input
                  type="text"
                  name="title"
                  value={state.title}
                  onChange={handleChange}
                  placeholder="Title"
                />
              </label>
            </li>

            <li>
              <label>
                <input
                  type="text"
                  name="author"
                  value={state.author}
                  onChange={handleChange}
                  placeholder="Author"
                />
              </label>
            </li>

            <li>
              <label>
                <input
                  type="text"
                  name="text"
                  value={state.text}
                  onChange={handleChange}
                  placeholder="Summary"
                />
              </label>
            </li>

            <button onClick={handleClick}>Add Product</button>
          </ul>
        </form>
      </div>
      <h1>Cart</h1>
      <Cart count={count} />
    </header>
  );
}

export default Header;
