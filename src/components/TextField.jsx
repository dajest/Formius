function TextField(props) {
  return (
    <div>
      <textarea value={props.value} onChange={(e)=> props.valueSeter(e)} name="answer" id="2"></textarea>
    </div>
  )
}

export default TextField