
import { ButtonSend } from "../Buttons/ButtonSend"
import { useGetFormData } from "../../hooks/useGetFormData "
import { PropsInput } from "../../utils/types"

import style from './Types.module.css'


const FullAnswer = ({question}: PropsInput) => {
    const {answer, handleChange, onSubmit} = useGetFormData()

    return(
        <form onSubmit={onSubmit} className={style.single}>
            <h3>{question}</h3>
            <textarea 
                name="answer"
                value={answer}
                onChange={handleChange} 
            />
            <ButtonSend>Ответить</ButtonSend>
        </form>
    )
}   
export default FullAnswer;