import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
function HomeScreen(props) {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
    return () => {
      //    cleanup
    };
  }, []);
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <ul className="products">
      {products.map((products, key) => (
        <li key={key}>
          <div className="product">
            <Link to={"/product/" + products._id}>
              <img
                className="product-image"
                src={products.image}
                alt="product"
              />
            </Link>
            <div className="product-name">
              <Link to={"/product/" + products._id}>{products.name}</Link>
            </div>

            <div className="product-brand">{products.brand}</div>
            <div className="product-price">${products.price}</div>
            <div className="product-rating">
              {products.rating} Start ({products.numReiews})
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default HomeScreen;
