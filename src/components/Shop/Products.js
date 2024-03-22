import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "my book1",
    description: "my description",
  },
  {
    id: "p",
    price: 10,
    title: "my book2",
    description: "my description",
  },
  {
    id: "p3",
    price: 3,
    title: "my book3",
    description: "my description",
  },
  {
    id: "p4",
    price: 20,
    title: "my book4",
    description: "my description",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
