const ProductType = () => {
  const handleOptionChange = (event, option) => {
    console.log(option);
  };

  const options = ["Laptops", "Mobiles", "Tablets"];

  return (
    <div>
      {options.map((option) => {
        return (
          <label className="d-flex align-center gap-10px">
            <input
              className="input"
              type="checkbox"
              value={option}
              onChange={(e) => handleOptionChange(e, option)}
              //checked={brand.includes("")}
            />
            <span>{option}</span>
          </label>
        );
      })}
    </div>
  );
};

export default ProductType;
