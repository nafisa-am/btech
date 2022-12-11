import React from "react";
// import { QUERY_PRODUCTS } from "../utils/queries";
// // import ProductList from "../components/ProductList";
// // import CategoryMenu from "../components/CategoryMenu";
// // import Cart from "../components/Cart";
// import { useQuery } from "@apollo/client";

// import ProductList from "../components/ProductItem";

const Home = () => {
  //   const { loading, data } = useQuery(QUERY_PRODUCTS);
  //   const products = data?.products || [];
  return (
    <div className="container">
      {/* to add what components you want to render */}
      {/* <CategoryMenu />
      <ProductList />
      <Cart /> */}
      {/* {Data.map((post) => (
        <div key={post.id}>
          <p>{post.product}</p>
          <p>{post.category}</p>
        </div>
      ))} */}
      <h1>Home</h1>
      {/* {loading ? <div>Loading...</div> : <ProductList products={products} />} */}
    </div>
  );
};

export default Home;
