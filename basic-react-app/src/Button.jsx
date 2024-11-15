function printHello(){
    console.log("hello");
}
function printBye(){
    console.log("bye");
}

export default function Button(){
    return(
      <div>
        <button onClick={printHello}>click me</button>
        <p onMouseOver={printBye}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad a modi iusto corrupti distinctio corporis eaque perferendis ratione recusandae minima cum ut aliquid, sed maxime enim quos voluptate quae reprehenderit?</p>
      </div>
      
    );
}