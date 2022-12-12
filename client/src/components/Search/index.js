import React, { useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const products = [
    { name: "Macbook", product: "Laptop" },
    { name: "Acer", product: "Laptop" },
    { name: "HP", product: "Laptop" },
    { name: "Dell", product: "Laptop" },
    { name: "Lenovo", product: "Laptop" },
    { name: "Iphone", product: "Mobile" },
    { name: "Samsung", product: "Mobile" },
    { name: "Huawei", product: "Mobile" },
    { name: "Xiaomi", product: "Mobile" },
    { name: "Apple", product: "Tablet" },
    { name: "Samsung", product: "Tablet" },
    { name: "Huawei", product: "Tablet" },
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    products.filter((product) => {
      return product.name.match(searchInput);
    });
  }

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />

      <table>
        <tbody>
          <tr>
            <th>Models</th>
            <th>product</th>
          </tr>

          {products.map((product) => {
            return (
              <tr key={`${product.name}-${product.product}`}>
                <td>{product.name}</td>
                <td>{product.product}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchBar;
