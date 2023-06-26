import { convertToVND, randomId } from '@mieuteacher/meomeojs'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export default function ShoppingCartCom() {
  const dispatch = useDispatch();
  const cartStore = useSelector((store) => store.cartStore)
  const productListStore = useSelector((store) => store.productListStore)

  function getProductInfor(productId) {
    return productListStore.find((product) => product.id == productId);
  }
  useEffect(() => {
    console.log("cartStore", cartStore)
  }, [cartStore])
  return (
    <div className='shoppingCart'>
      <div className='titles'>
        Shopping Cart
      </div>
      <div className='shoppingCart_items'> 
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                <div className='table_content'>
                  #
                </div>
              </th>
              <th scope="col">
                <div className='table_content'>
                  Product Name
                </div>
              </th>
              <th scope="col">
                <div className='table_content'>
                  Price
                </div>
              </th>
              <th scope="col">
                <div className='table_content'>
                  Quantity
                </div>
              </th>
              <th scope="col">
                <div className='table_content'>
                  Subtotal
                </div>
              </th>
              <th scope="col">
                <div className='table_content'>
                  Actions
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              cartStore.map((item, index) => 
              <tr key={randomId()}>
              <th scope="row">
                <div className='table_content'>
                  {index + 1}
                </div>
              </th>
              <td>
                <div className='table_content'>
                  {getProductInfor(item.productId).name}
                </div>
              </td>
              <td>
                <div className='table_content'>
                  {convertToVND(getProductInfor(item.productId).price)}
                </div>
              </td>
              <td>
                <div className='table_content'>
                  <input className='quantity' style={{textAlign: "center"}} type="number" defaultValue={item.quantity} min={0} max={10}/>
                </div>
              </td>
              <td>
                <div className='table_content'>
                  {convertToVND(item.quantity * getProductInfor(item.productId).price)}
                </div>
              </td>
              <td>
                <div className='table_content actions'>
                  <button onClick={(e) => {
                    dispatch(
                      {
                        type: "UPDATE_TO_CART",
                        payload: {
                          productId: item.productId,
                          quantity: Number( e.target.parentNode.parentNode.parentNode.querySelector('.quantity').value)
                        }
                      }
                    )
                  }} type="button" className="btn btn-info">Update</button>
                  <button onClick={() => {
                    dispatch(
                      {
                        type: "DELETE_ITEM_IN_CART",
                        payload: item.productId
                      }
                    )
                  }} type="button" className="btn btn-danger">Delete</button>
                </div>
              </td>
            </tr> 
              )
            }

        </tbody>
        </table>
      </div>
      <div className='table_emptyNoti'>Empty product in your cart</div>
      <div className='table_emptyNoti'>There are  items in shopping cart 
          <span style={{color: "red", fontSize: "20px", marginLeft: "10px", fontWeight: 900}}>
            5000
          </span>
      </div>
    </div>
  )
}
