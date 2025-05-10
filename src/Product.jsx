export default function Product(props) {
let {product}=props;    
    return (

          <div className="product-card border p-3">
              <img
                src={"/images/" + product.image}
                alt={product.name}
                width="100%"
                className="img-fluid"
              />
              <h5>{product.name}</h5>
              <p>Price: ₹{product.mrp}</p>
              <p>Discount: {product.discount}%</p>
              <p>Unit: {product.unit}</p>
              <p>Type: {product.type}</p>
              <p style={{ color: product.inStock ? "green" : "red" }}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
    )
}