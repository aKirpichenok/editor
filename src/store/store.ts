import notesReducer from "./reducers/notesReducer/notesReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { customMiddleware } from "./customMiddleware";
import getNotes from "./getNotes";

const rootReducer = combineReducers({
    notes: notesReducer,
})

export const createReduxStore = (initialState = {}) => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),
        preloadedState: getNotes(),
    })
}