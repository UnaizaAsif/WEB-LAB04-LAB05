import ProductCard from "./components/productCard";

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <ProductCard title="Shoes" price={50} image="/images/shoes.jpeg" />
      <ProductCard title="Bag" price={30} image="/images/bag.jpg" />
      <ProductCard title="Watch" price={100} image="/images/watch.jpeg" />
    </div>
  );
}

export default App;