
import { ButtonSend } from "../Buttons/ButtonSend"
import { useGetFormData } from "../../hooks/useGetFormData "
import { PropsCheckbox } from "../../utils/types"

import style from './Types.module.css'


const SeveralAnswers = ({question, options}: PropsCheckbox) => {

    const {answer, handleChange, onSubmit} = useGetFormData(true)
    return(
        <form onSubmit={onSubmit} className={style.single}>
            <h3>{question}</h3>
            {options!.map((option, index) => (
                <div key={index}>
                    <input 
                        type="checkbox" 
                        name="answer"  
                        value={option} 
                        id={option} 
                        onChange={handleChange}
                        checked={answer.includes(option)}
                    />
                    <label htmlFor={option}>{option}</label>
                </div>))
            }
            <ButtonSend>Ответить</ButtonSend>
        </form>
    )
}

export default SeveralAnswers