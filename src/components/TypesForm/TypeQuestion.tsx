
import { DataItem } from "../../utils/types"
import FullAnswer from "./FullAnswer"
import OneAnswer from "./OneAnswer"
import SeveralAnswers from "./SeveralAnswers"
import ShortAnswer from "./ShortAnswer"

interface Props {
    question: DataItem
}

const TypeQuestion = ({question}: Props) => {
    switch (question.type) {
        case 'single':
            return <OneAnswer {...question}/>
        case 'multiple':
            return <SeveralAnswers {...question}/>
        case 'short':
            return <ShortAnswer {...question}/>
        case 'long':
            return <FullAnswer {...question}/>
        default:
            return <OneAnswer {...question}/>
    }
}

export default TypeQuestion;