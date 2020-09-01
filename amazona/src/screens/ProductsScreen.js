import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct, saveProduct } from "../actions/productActions";
function ProductsScreen(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [numReview, setNumReview] = useState("");
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;
  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {};
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description,
      })
    );
  };
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Sign-In</h2>
          </li>
          <li>
            {loadingSave && <div>Loading...</div>}
            {errorSave && <div>error</div>}
          </li>
          <li>
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </li>
          <li>
            <label for="Price">Price</label>
            <input
              type="text"
              name="Price"
              id="Price"
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </li>
          <li>
            <label for="Image">Image</label>
            <input
              type="text"
              name="Image"
              id="Image"
              onChange={(e) => setImage(e.target.value)}
            ></input>
          </li>
          <li>
            <label for="brand">Brand</label>
            <input
              type="text"
              name="brand"
              id="brand"
              onChange={(e) => setBrand(e.target.value)}
            ></input>
          </li>
          <li>
            <label for="brand">Count In Stock</label>
            <input
              type="text"
              name="brand"
              id="brand"
              onChange={(e) => setCountInStock(e.target.value)}
            ></input>
          </li>
          <li>
            <label for="category">Category</label>
            <input
              type="text"
              name="category"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            ></input>
          </li>

          <li>
            <label for="name">Description</label>
            <textarea
              name="description"
              id="name"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </li>
          <li>
            <button type="submit " className="button primary">
              Create
            </button>
          </li>
          <li>New to amazona ?</li>
        </ul>
      </form>
    </div>
  );
}
export default ProductsScreen;
