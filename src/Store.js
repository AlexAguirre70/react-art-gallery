
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './features/dataSlice'
import modeReducer from './features/modelSlice'

export const store = configureStore({
    reducer: {
        data:dataReducer,
        mode: modeReducer

    }
})
