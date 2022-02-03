import axios from 'axios'
import {
    EMPLOYEE_LIST_REQUEST,
    EMPLOYEE_LIST_SUCCESS,
    EMPLOYEE_LIST_FAIL,



} from '../constants/constants'

export const listEmployees = () => async (dispatch) => {
    try {
        dispatch({
            type: EMPLOYEE_LIST_REQUEST
        })


        const { data } = await axios.get(
            `/api/employees`
        )

        dispatch({
            type: EMPLOYEE_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: EMPLOYEE_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
