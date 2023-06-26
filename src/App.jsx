import ProductList from './components/ProductList'
import ShoppingCartCom from './components/ShoppingCart'
import "./ShoppingCart.scss"
function App() {
  return (
    <div className='shoppingCart_container'>
      {/* Product List */}
      <ProductList></ProductList>
      {/* Shopping Cart */}
      <ShoppingCartCom></ShoppingCartCom>
    </div>
  );
}

export default App;
