

import { DataItem } from '../../../data'
import style from './Progress.module.css'

type Props = {
    question: DataItem[]
    step: number
}

const Progress = ({question, step}: Props) => (
    <div className={style.wrapper}>
        {question.map((_, i) => {
            const backgroundColor = step === i ? 'red' : (step > i) ? 'black' : 'white'
            return(
                <div 
                    key={i} 
                    className={style.progress}
                    style={{ backgroundColor}}
                />
            )
        })}
    </div>
)

export default Progress