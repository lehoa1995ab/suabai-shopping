const initState = [
    {
        id: 5,
        name: "San Phẩm 1",
        price: 50000,
        des: "adasdasdasdas",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Golden_tabby_and_white_kitten_n01.jpg/1200px-Golden_tabby_and_white_kitten_n01.jpg"
    },
    {
        id: 10,
        name: "San Phẩm 2",
        price: 110000,
        des: "fadsfsd",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Golden_tabby_and_white_kitten_n01.jpg/1200px-Golden_tabby_and_white_kitten_n01.jpg"
    }
]

export const productListReducer = (state = initState, action) => {
    switch (action.type) {
        // những trường hợp khác
        default: 
            return state
    }
}

