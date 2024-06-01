import { FC, useEffect, useState } from "react";
import { formatTimer } from '../../utils/common'

type Props = {
    stopTimer: (value: boolean) => void
}

const Timer: FC<Props> = ({stopTimer}) => {
    const [time, setTime] = useState<number>(20 * 60)

    useEffect(() => {
        if(localStorage.getItem('time')){
            setTime(JSON.parse(localStorage.getItem('time')!))
        }
    },[])

    useEffect(() => {
        if(time > 0) {
            const timerId = setInterval(() => {
                setTime(prev => prev - 1)
                localStorage.setItem('time', JSON.stringify(time))
            },1000)

            return () => clearInterval(timerId)
        }  else {
            stopTimer(false)
        }  
    },[time])

    return(
        <div>
            {formatTimer(time)}
        </div>
    )
}
export default Timer;