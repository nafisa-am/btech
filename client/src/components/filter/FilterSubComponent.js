const FilterSubComponent = (props) => {
  const handleBrandChange = (event, brand) => {
    console.log(brand);
  };

  return (
    <div>
      <label className="d-flex align-center gap-10px">
        <input
          className="input"
          type="checkbox"
          value={props.brand}
          onChange={(e) => handleBrandChange(e, props.brand)}
          //checked={brand.includes("")}
        />
        <span>{props.brand}</span>
      </label>
    </div>
  );
};

export default FilterSubComponent;
