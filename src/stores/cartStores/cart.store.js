const initState = [
    {
        productId: 5,
        quantity: 10
    },
    {
        productId: 10,
        quantity: 10
    }
]


export const cartReducer = (state = initState, action) => {
    switch(action.type) {
             // productId action.id
        case "DELETE_ITEM_IN_CART":
            return state.filter(item => item.productId != action.payload)
        case "ADD_TO_CART":
            // payload = {productId, quantity}
            let check = state.find(item => item.productId == action.payload.productId); // undefine

            if (!check) {
                return [...state, action.payload]
            }else {
                return state.map((item) => {
                    if (item.productId ==  action.payload.productId) {
                        item.quantity += action.payload.quantity
                    }
                    return item
                })
            }
        case "UPDATE_TO_CART":
            // action.payload = {productId, quantity}
            return state.map((item) => {
                if (item.productId == action.payload.productId) {
                    return action.payload
                }
                return  item
            })
        default:
            return state
    }
}

