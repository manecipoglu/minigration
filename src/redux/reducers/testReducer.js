import { testStore } from "../store.js";

export default function testReducer(state = testStore, action) {
    switch (action.type) {
        case "SET_MARITAL_STATUS":
            return { ...state, maritalStatus: action.maritalStatus}
        default:
            return state;
    }

}