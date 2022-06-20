const ItemTotal = (props:any) => {
    let total = 0;
      for(var item of props.items){
        total += item.price;
      }
  return total;
};

export default ItemTotal;
