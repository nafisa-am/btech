const FilterSubComponent = (props) => {
  const { filters, setFilters } = props;

  const handleBrandChange = (brand) => {
    // neha
    // should add the items to the array if they are not present and remove them if they can be fund in the array
    if (!filters.indexOf(brand)) {
      const updatedArray = filters.splice(filters.indexOf(brand), 1);
      setFilters(updatedArray);
    } else {
      const newFilters = [...filters, brand];
      setFilters(newFilters);
    }
  };

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

export default FilterSubComponent;
