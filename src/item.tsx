
const Item = ({item, selectOpt}:any) => {
  return(
    <div className="item">
      {selectOpt && <div className="checkbox-container">
        <input className="checkbox" type="checkbox"/>
        <label className="checkmark"></label>
      </div>}
        <h2>{item.name}</h2>
    </div>
  );
};

export default Item;
