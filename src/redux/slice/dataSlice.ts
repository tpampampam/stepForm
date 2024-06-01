import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";


interface DataState {
    step: number ;
    answers: {
        [prop: number] : string | string[]
    };
    testOver: number;
}

interface GetAnswer {
    step: number
    answer: string | string[]
}

const initialState: DataState = {
    step: JSON.parse(localStorage.getItem('formStep')!) || 0 ,
    answers: JSON.parse(localStorage.getItem('formAnswer')!) || {},
    testOver: 0
}


const dataSlice = createSlice({
    name: 'dataSlice',
    initialState,
    reducers: {
        nextStep: (state) => {
            state.step += 1
            localStorage.setItem('formStep', JSON.stringify(state.step))
        },
        prevStep: (state) => {
            state.step -= 1
            localStorage.setItem('formStep', JSON.stringify(state.step))
        },
        getAnswers: (state, action:  PayloadAction<GetAnswer>) => {
            const {step, answer} = action.payload
            state.testOver += 1
            state.answers[step] = answer
            localStorage.setItem('formAnswer', JSON.stringify(state.answers))
        }
    }
})

const {reducer, actions} = dataSlice;
export const {prevStep, nextStep, getAnswers} = actions

export default reducer;

export const dataSelector = (state: RootState) => state.dataSlice