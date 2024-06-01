export interface DataItem {
    type: string
    question: string
    options?: string[]
}

export type PropsCheckbox = Pick<DataItem, 'question' | 'options'>
export type PropsInput = Pick<DataItem, 'question'>