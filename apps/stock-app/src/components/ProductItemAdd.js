import { useState, useEffect } from "react";

function ProductItemAdd({ products, setProducts }) {
  const [productInput, setProductInput] = useState({
    productName: "",
    stock: "",
  });

  useEffect(() => {
    setProductInput({ productName: "", stock: "" });
  }, [products]);

  const onChangeName = (e) => {
    setProductInput({ ...productInput, [e.target.name]: e.target.value });
  };

  const onChangeStock = (e) => {
    setProductInput({ ...productInput, [e.target.name]: e.target.value });
  };

  const inputTodoAdd = (e) => {
    e.preventDefault();

    if (productInput.productName === "" && productInput.stock === "") {
      return false;
    }

    setProducts([...products, productInput]);
  };

  const deleteBtn = (i) => {
    products = products.filter((newProduct) => newProduct !== products[i]);
    setProducts([...products]);
  };

  const decreaseBtn = (i) => {
    if (products[i].stock === 1) {
      products = products.filter((newProduct) => newProduct !== products[i]);
      setProducts([...products]);
    } else {
      products[i].stock--;
      setProducts([...products]);
    }
  };

  const increaseBtn = (i) => {
    products[i].stock++;
    setProducts([...products]);
  }

  return (
    <div>
      <div className="d-flex m-4">
        <input
          name="productName"
          value={productInput.productName}
          type="text"
          className="form-control"
          placeholder="Medicine add..."
          onChange={onChangeName}
        />
        <input
          name="stock"
          value={productInput.stock}
          type="number"
          className="form-control w-25 ms-2"
          placeholder="stock add..."
          onChange={onChangeStock}
        />
        <button className="btn btn-primary ms-3" onClick={inputTodoAdd}>
          Add
        </button>
      </div>
      <div>
        <ul className="list-group">
          {products.map((productItem, i) => {
            return (
              <li key={i} className="list-group-item mx-4 my-1 px-3 shadow-sm">
                <div className="row d-flex align-items-center">
                  <div className="col-5">
                    <span>{productItem.productName}</span>
                  </div>
                  <div className="col-5 d-flex justify-content-start">
                    <small className="me-5">Stock: {productItem.stock}</small>
                    <button
                      onClick={() => decreaseBtn(i)}
                      className="btn btn-sm btn-secondary"
                    >
                      -
                    </button>
                    <button
                      onClick={() => increaseBtn(i)}
                      className="btn btn-sm btn-success ms-1"
                    >
                      +
                    </button>
                  </div>
                  <div className="col-2 d-flex">
                    <button
                      className="btn bg-danger text-white rounded-pill ms-auto"
                      onClick={() => deleteBtn(i)}
                    >
                      X
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProductItemAdd;
