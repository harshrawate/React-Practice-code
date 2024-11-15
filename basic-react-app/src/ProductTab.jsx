import Product from "./Product.jsx";
function ProductTab(){
  let styles={
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItem:"center"
  };
    return(
    <div style={styles}>
      <Product title="ligitech mx master" idx={0}/>
      <Product title="apple pencil" idx={1}/>
      <Product  title="zebronic zeb" idx={2}/>
      <Product title="pentonics toad" idx={3}/>
    </div>
    );
}

export default ProductTab;