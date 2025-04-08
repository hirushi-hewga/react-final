const appointmentState = {
    appointments: [],
    isLoaded: false
}

const appointmentReducer = (state = appointmentState, action) => { 
    switch (action.type) {
        case "APPOINTMENTS_SET":
            return {...state, appointments: action.payload, isLoaded: true}
        case "APPOINTMENT_CREATE":
            return {...state, appointments: [...state.appointments, action.payload]}
        case "APPOINTMENT_UPDATE":
            return {...state, appointments: action.payload}
        case "APPOINTMENT_DELETE":
            return {...state, appointments: action.payload}
        default:
            return state
    }
}

export default appointmentReducer