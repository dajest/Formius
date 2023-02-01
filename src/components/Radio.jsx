function Radio(props) {
  const options = props.question.options.map((option, idx) => {
    return (
      <div className='option' key={idx}>
        <label>
          <input 
            onChange={(e)=> props.valueSeter(e, idx)}
            value={option.title}
            name="radio-ups"
            type='radio' 
            checked={option.checked}/>
          {option.title}
        </label>  
      </div>
    )
  })
  return (
    <div className='options-wrapper'>
      {options}
    </div>
  )
}

export { Radio }