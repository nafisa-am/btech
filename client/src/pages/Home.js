import React from "react";
import { useQuery } from "@apollo/client";

import Items from "./Item";
import { GET_PRODUCTS } from "../utils/queries";

function Home() {
  const { data, error, loading } = useQuery(GET_PRODUCTS, {
    fetchPolicy: "no-cache",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops! Something went wrong with your request</div>;
  }

  console.log(data);

  return <Items data={data.products} />;
}

export default Home;
