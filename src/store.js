export const SET_BUYER_DATA = 'SET_BUYER_DATA'
export const SET_SELLER_DATA = 'SET_SELLER_DATA'

export const setBuyerData = () => ({
    type: SET_BUYER_DATA,
    firstName: 'Volen',
    lastName: 'Popov',
    email: 'volenpopov@gmail.com'
})

export const setSellerData = () => ({
    type: SET_SELLER_DATA,
    name: 'John Dough',
    phone: '+123456789'
})

const initialState = {
    buyer: {        
        firstName: undefined,
        lastName: undefined,
        email: undefined,
    },
    seller: {
        name: undefined,
        phone: undefined
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BUYER_DATA:
            const { firstName, lastName, email } = action

            return {
                ...state,
                buyer: {
                    firstName,
                    lastName,
                    email
                }
            }

        case SET_SELLER_DATA:
            const { name, phone } = action

            return {
                ...state,
                seller: {
                    name,
                    phone
                }
            }

        default:
            return state
    }
}