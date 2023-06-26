import React from 'react'
import { useSelector } from 'react-redux'
import { convertToVND, randomId } from '@mieuteacher/meomeojs';
import { useDispatch } from 'react-redux';

export default function ProductList() {
  const dispatch = useDispatch();
  const productListStore = useSelector((store) =>  store.productListStore)
  return (
    <div className='listProduct'>
    <div className='titles'>
      Product List
    </div>
    {
      productListStore.map((product, index) => 
        <div key={randomId()} className='productCards'>
          <div className='productCards_avatar'>
                <img className='avatar_img' src={product.avatar}/>
          </div>
          <div className='productCards_des'>
              <span className='des_productName'>{product.name}</span>
              <span className='des_productPrice'>{convertToVND(product.price)}</span>
              <span className='des_detail'>
                  {product.des}
              </span>
          </div>
          <div className='productCards_buytools'>
              <input defaultValue={1} className='buytools_amounts' name="quantity" type="number" min="1" max="10"/>
            
              <button onClick={(e) => {
                let quantity = Number(e.target.parentNode.querySelector('.buytools_amounts').value);
                dispatch(
                  {
                    type: "ADD_TO_CART",
                    payload: {
                      productId: product.id,
                      quantity: quantity
                    }
                  }
                )
              }}  type="submit" className="btn btn-danger buytools_amounts-buyBtn">Mua Ngay</button>
          </div>
        </div>
      )
    }
  </div>
  )
}
