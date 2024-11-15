import "./Product.css";
import Price from "./Price.jsx";

function Product({title,idx}){
    let oldPrices=["12495","11900","1599","599"];
    let newPrices=["8999","9199","899","278"];
    let description=[
        ["8000 DPI","5 Programable buttons"],
        ["intuitive surface","desinged for ipad"],
        ["desinged for ipad","intuitive surface"],
        ["wireless","optical orientation"],
    ];
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
          
        </div>
    );
}

export default Product;