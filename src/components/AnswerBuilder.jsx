import { TextField } from './TextField'
import { Checkbox } from './Checkbox'
import { Radio } from './Radio'
import { Input } from './Input'

function AnswerBuilder(props) {
  if (props.question.type == 'text') return <TextField value={props.question.answer} valueSeter={props.valueSetter}/>
  else if (props.question.type == 'checkbox') return <Checkbox  options={props.question.options} valueSeter={props.valueSetter}/>
  else if (props.question.type == 'radio') return <Radio question={props.question} valueSeter={props.valueSetter}/>
  else if (props.question.type == 'input') return <Input question={props.question} valueSeter={props.valueSetter}/>
  else return <div>KUZIA</div>
}

export default AnswerBuilder