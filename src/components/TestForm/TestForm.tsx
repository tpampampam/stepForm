import { useState } from "react";
import Forma from "../Forma/Forma";
import Timer from "../Timer/Timer"

import style from './TestForm.module.css'


const TestForm = () => {
    const [timer, setTimer] = useState<boolean>(true)

    return(
        <div className={style.wrapper}>
            <div className={style.header}>
                <h2>Тестирование</h2>
                <Timer stopTimer={setTimer}/>
            </div>
            {timer ? <Forma/> : <div>Время вышло</div>}
        </div>
    )
}
export default TestForm;