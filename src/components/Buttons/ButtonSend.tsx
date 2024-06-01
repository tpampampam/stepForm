
import React, { ComponentPropsWithRef } from 'react'
import style from './Button.module.css'

export type BtnProps = {
    children: React.ReactNode
} & ComponentPropsWithRef<'button'>

export const ButtonSend = ({children}: BtnProps) => (
    <button className={style.send} type='submit'>
        {children}
    </button>
)