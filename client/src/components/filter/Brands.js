import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
​import { GET_BRANDS } from "../../utils/queries";
import FilterSubComponent from "./FilterSubComponent";
import Products from "../../components/ProductList";
​
const BrandComponent = () => {
  const laptopBrands = ["Macbook", "Acer", "HP", "Dell", "Lenovo"];
  const mobileBrands = ["Iphone", "Samsung", "Huawei", "Xiaomi"];
  const tabletBrands = ["Apple"];
​
  let allData = [...laptopBrands, ...mobileBrands, ...tabletBrands];
​
  const [filters, setFilters] = useState([]);
​
  const onChangeFilter = (updatedFilters) => {
    setFilters(updatedFilters);
  };
​
  useEffect(() => {
    console.log({ filters });
  }, [filters]);
​
  return (
    <div className="d-flex justify-content-between flex-column flex-md-row ">
      <div
        className="d-flex flex-row flex-md-column  justify-content-evenly  align-items-start p-3"
        style={{ height: "70vh" }}
      >
        <div>
          {" "}
          <h5 className="category-title1">Brands</h5>
          <div className="d-flex flex-column gap-10px p-1">
            {allData.map((brand) => {
              return (
                <FilterSubComponent
                  brand={brand}
                  key={brand}
                  filters={filters}
                  onChangeFilter={onChangeFilter}
                />
              );
            })}
          </div>{" "}
        </div>
        {/* <div>
          <h5 className="category-title2">Brands for Mobile </h5>
          <div className="d-flex flex-column gap-10px p-1">
            {mobileBrands.map((brand) => {
              return (
                <FilterSubComponent
                  brand={brand}
                  key={brand}
                  filters={filters}
                  setFilter={setFilters}
                />
              );
            })}
          </div>{" "}
        </div>
        <div>
          <h5 className="category-title3">Brand for Tablets </h5>
          <div className="d-flex flex-column gap-10px p-1">
            {tabletBrands.map((brand) => {
              return (
                <FilterSubComponent
                  brand={brand}
                  key={brand}
                  filters={filters}
                  setFilter={setFilters}
                />
              );
            })}
          </div>{" "}
        </div> */}
      </div>
​
      <div className="w-75">
        <div className="d-flex flex-column">
          <Products filters={filters} />
        </div>
      </div>
    </div>
  );
};
​
export default BrandComponent;
