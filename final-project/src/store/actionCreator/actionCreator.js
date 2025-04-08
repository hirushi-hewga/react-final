import * as themeActions from "../reducers/themeReducer/actions"
import * as userActions from "../reducers/userReducer/actions"
import * as appointmentActions from "../reducers/appointmentReducer/actions"

const actionCreator = {
    ...themeActions,
    ...userActions,
    ...appointmentActions
}

export default actionCreator