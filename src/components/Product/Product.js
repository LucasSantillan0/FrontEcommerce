const Product = (props) => {
  return (
    <div className='container'>
      <h1>{props.name}</h1>
      <img src={props.image} alt={`producto lala`} />
      <h2>{props.price}</h2>
    </div>
  );
};

export default Product;
