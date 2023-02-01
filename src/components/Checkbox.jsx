function Checkbox(props) {
  const options = props.options.map((option, idx) => {
    return (
      <div className='option' key={idx}>
        <label>
          <input onChange={(e)=> props.valueSeter(e, idx)} type='checkbox' checked={option.checked}/>
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

export { Checkbox }