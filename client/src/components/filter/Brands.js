import FilterSubComponent from "./FilterSubComponent";

const BrandComponent = () => {
  const laptopBrands = ["Macbook", "Acer", "HP", "Dell", "Lenovo"];
  const mobileBrands = ["Iphone", "Samsung", "Huawei", "Xiaomi"];
  const tabletBrands = ["Apple", "Samsung", "Huawei"];

  return (
    <div className="category">
      <div className="category-title1">Brands for Laptops</div>
      <div className="category-size category-select d-flex direction-column gap-10px">
        {laptopBrands.map((brand) => {
          return <FilterSubComponent brand={brand} key={brand} />;
        })}
      </div>{" "}
      <div className="category-title2">Brands for Mobile </div>
      <div className="category-size category-select d-flex direction-column gap-10px">
        {mobileBrands.map((brand) => {
          return <FilterSubComponent brand={brand} key={brand} />;
        })}
      </div>{" "}
      <div className="category-title3">Brand for Tablets </div>
      <div className="category-size category-select d-flex direction-column gap-10px">
        {tabletBrands.map((brand) => {
          return <FilterSubComponent brand={brand} key={brand} />;
        })}
      </div>{" "}
    </div>
  );
};

export default BrandComponent;
