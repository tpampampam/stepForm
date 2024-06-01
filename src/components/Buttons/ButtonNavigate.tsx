
import style from './Button.module.css'
import { BtnProps } from './ButtonSend'

interface BtnNavigate extends BtnProps {
    onClick: () => void
    disabled: boolean
}

export const ButtonNavigate = ({children, onClick, disabled}: BtnNavigate) =>  (
    <button 
        className={style.navigate} 
        onClick={onClick} 
        disabled={disabled}
    >
        {children}
    </button>
)

