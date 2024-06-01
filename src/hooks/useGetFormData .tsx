import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../redux/store/store"
import { dataSelector, getAnswers } from "../redux/slice/dataSlice"



export const useGetFormData = (isMultiple = false) => {
    const [answer, setAnswer] = useState<string | string[]>(isMultiple ? [] : '')
    const {step, answers} = useAppSelector(dataSelector)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        if(answers[step] && (isMultiple ? answers[step].length > 0 : answers[step])) {
            setAnswer(answers[step])
        }
    },[answers[step]])

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        
        const {checked, value} = e.target as HTMLInputElement;
        if (isMultiple) {
            if (checked) {
                setAnswer((prev) => [...prev, value]);
            } else {
                setAnswer((prev) => (prev as string[]).filter((el) => el !== value));
            }
        } else {
            setAnswer(value);
        }
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(getAnswers({step, answer}))
        setAnswer(isMultiple ? [] : '');
        alert('Ваш ответ принят')
    }

    return {
        answer,
        handleChange,
        onSubmit
    }
}
