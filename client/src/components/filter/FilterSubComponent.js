const FilterSubComponent = (props) => {
  const { filters, onChangeFilter } = props;
​
  const handleBrandChange = (brand) => {
    // neha
    // should add the items to the array if they are not present and remove them if they can be fund in the array
​
    if (!filters.indexOf(brand)) {
      const updatedFilters = filters.filter((item) => item !== brand);
      console.log(updatedFilters);
      onChangeFilter(updatedFilters);
    } else {
      const newFilters = [brand, ...filters];
      onChangeFilter(newFilters);
    }
  };
​
  return (
    <div>
      <label className="d-flex align-center gap-10px">
        <input
          className="input"
          type="checkbox"
          value={props.brand}
          onChange={() => handleBrandChange(props.brand)}
        />
        <span>{props.brand}</span>
      </label>
    </div>
  );
};
​
export default FilterSubComponent;