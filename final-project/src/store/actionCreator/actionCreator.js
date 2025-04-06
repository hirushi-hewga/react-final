import * as themeActions from "../reducers/themeReducer/actions"
import * as carActions from "../reducers/carReducer/actions"

const actionCreator = {
    ...themeActions,
    ...carActions
}

export default actionCreator