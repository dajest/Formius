import TextField from './TextField'
import Checkbox from './Checkbox'

function AnswerBuilder(props) {
  if (props.question.type === 'text') return <TextField value={props.question.answer} valueSeter={props.textAnswerSetter}/>
  if (props.question.type === 'checkbox') return <Checkbox  options={props.question.options} valueSeter={props.checkboxAnswerSetter}/>
  else return <div>KUZIA</div>
}

export default AnswerBuilder