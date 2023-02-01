function Input(props) {
  return (
    <div>
      <input type={props.question.content} className="input-field" value={props.question.answer} onChange={(e)=> props.valueSeter(e)} name="answer" id="2"></input>
    </div>
  )
}

export { Input }