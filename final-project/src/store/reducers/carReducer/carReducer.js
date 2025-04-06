const carState = {
    cars: [],
    isLoaded: false,
    count: 0
}

const carReducer = (state = carState, action) => { 
    switch (action.type) {
        case "CARS_SET":
            return {...state, cars: action.payload, isLoaded: true, count: action.payload.length}
        default:
            return state
    }
}

export default carReducer