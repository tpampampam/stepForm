
import TypeQuestion from "../TypesForm/TypeQuestion";
import Progress from "../Progress/Progress";

import { useAppDispatch, useAppSelector } from "../../redux/store/store";
import { dataSelector, nextStep, prevStep } from "../../redux/slice/dataSlice";
import {questions} from '../../../data'
import { ButtonNavigate } from "../Buttons/ButtonNavigate";

import style from './Forma.module.css'



const Forma = () => {

    const dispatch = useAppDispatch()
    const {step, testOver} = useAppSelector(dataSelector)

    return(
        testOver !== questions.length ? 
        (
            <>  
                <Progress question={questions} step={step}/>
                <div className={style.form}>
                    <TypeQuestion question={questions[step]}/>
                </div>
                <div className={style.btnGroup}>
                    <ButtonNavigate 
                        onClick={() => dispatch(prevStep())} 
                        disabled={step === 0}
                    >
                        Назад
                    </ButtonNavigate>
                    <ButtonNavigate 
                        onClick={() => dispatch(nextStep())}
                        disabled={step === questions.length - 1}
                    >
                        Вперед
                    </ButtonNavigate>
                </div>
            </>
        ) : (
            <b>Тест закончен</b>
        )
    )
}
export default Forma;