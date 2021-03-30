import * as actionTypes from './actionTypes'
import axios from 'axios'

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  }
}

export const purchaseBurgerFailed = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAILED,
    error: error,
  }
}

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  }
}

export const purchaseBurger = (orderData) => {
  return (dispatch) => {
    dispatch(purchaseBurgerStart())
    axios
      .post(
        'https://react-my-burger-c3e5d-default-rtdb.firebaseio.com/orders.json',
        orderData
      )
      .then((response) => {
        dispatch(purchaseBurgerSuccess(response.data.name, orderData))
      })
      .catch((error) => {
        dispatch(purchaseBurgerFailed(error))
      })
  }
}

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  }
}

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  }
}

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
  }
}

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  }
}

export const fetchOrders = () => {
  return (dispatch) => {
    dispatch(fetchOrdersStart())
    axios
      .get(
        'https://react-my-burger-c3e5d-default-rtdb.firebaseio.com/orders.json'
      )
      .then((res) => {
        const fetchedOrders = []
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          })
        }
        dispatch(fetchOrdersSuccess(fetchedOrders))
      })
      .catch((err) => {
        dispatch(fetchOrdersFail(err))
      })
  }
}
