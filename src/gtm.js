import { createMiddleware } from 'redux-beacon'
import GoogleTagManager from '@redux-beacon/google-tag-manager'
import logger from '@redux-beacon/logger'
import { SET_BUYER_DATA, SET_SELLER_DATA } from './store'

const gtm = GoogleTagManager()

const emitSetBuyerData = (action, prevState, nextState) => ({
    event: 'setBuyerData',
    buyer: { ...nextState.buyer }
})

const emitSetSellerData = (action, prevState, nextState) => ({
    event: 'setSellerData',
    seller: { ...nextState.seller }
})

const eventsMap = {
    [SET_BUYER_DATA]: emitSetBuyerData,
    [SET_SELLER_DATA]: emitSetSellerData
}

export const gtmMiddleware = createMiddleware(eventsMap, gtm, { logger })