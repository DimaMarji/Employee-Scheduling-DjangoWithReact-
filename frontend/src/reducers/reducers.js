import {
    EMPLOYEE_LIST_REQUEST,
    EMPLOYEE_LIST_SUCCESS,
    EMPLOYEE_LIST_FAIL,
    EMPLOYEE_LIST_RESET,


} from '../constants/constants'

export const employeeListReducer = (state = { employees: [] }, action) => {
    switch (action.type) {
        case EMPLOYEE_LIST_REQUEST:
            return { loading: true }

        case EMPLOYEE_LIST_SUCCESS:
            return { loading: false, employees: action.payload }

        case EMPLOYEE_LIST_FAIL:
            return { loading: false, error: action.payload }

        case EMPLOYEE_LIST_RESET:
            return { employees: [] }

        default:
            return state
    }
}