const SortPrice = () => {
  let items = [
    {
      itemName: "iphone",
      itemPrice: 200,
    },
    { itemName: "galaxy", itemPrice: 150 },
  ];

  const sortedItems = [...items].sort((a, b) => {
    return a.itemPrice - b.itemPrice;
  });

  console.log(sortedItems);

  return (
    <div>
      {sortedItems.map((item) => {
        return <div>{item.itemName}</div>;
      })}
    </div>
  );
};
export default SortPrice;

{
  /* 

  console.log("items", items);

  const sortedItems = [...items].sort((a, b) => {
    return a.itemPrice - b.itemPrice;
  });

  console.log("sortedItems", sortedItems); */
  //check the docs for the filter by range
}
