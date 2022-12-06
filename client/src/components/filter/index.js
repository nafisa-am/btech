//to change css framework

import ProductType from "./productType";
import SortPrice from "./sortPrice";

const filterComponent = () => {
  const handleClick = () => {
    filter({
      type: "CLEAR",
    });
  };
  return (
    <aside classNAme="filter-container">
      <div className="filter-container-title d-flex gap align-center wrap">
        <span>FILTER</span>
        <button
          className="button btn-link-primary cursor clear"
          onClick={handleClick}
        >
          CLEAR
        </button>
      </div>
      <div className="filter d-flex direction-column gap-10px">
        <Brands />
        <ProductType />
        <SortPrice />
      </div>
    </aside>
  );
};

export default filterComponent;
