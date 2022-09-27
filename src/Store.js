
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './features/dataSlice'
import modeReducer from './features/modelSlice'
import { logger } from './features/middleware'

export const store = configureStore({
    reducer: {
        data:dataReducer,
        mode: modeReducer
    },
    middleware: [logger]
})
