import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    apiData: {},
    objectId:10000
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action)=>{
            return{...state, apiData:action.payload}
        },
        cleardata: () => {
            return initialState
        },
        inputId: (state, action) =>{
            return{...state,objectId: action.paylod}
        },
        incrementId: (state) => {
            return{...state, objectId: state.payload +1}
        },
        decrementId: (state)=> {
            return {...state, objectId: state.payload -1}
        }
    }

})
export const{setData,clearData, incrementId,decrementId, inputId} = dataSlice.actions

export const  fetchdata = ()=>{
    const fetchDataThunk = async (dispatch, getState)=>{
        let state =getState()
        const response = await  fetch (`https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.objectId}`)
        const rData= await response.json()
        dispatchEvent(setData(rData))
    }
    return {fetchDataThunk}
}
export default dataSlice.reducer