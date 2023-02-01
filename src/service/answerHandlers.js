function textAnswerSetter(e) {
  let qs = JSON.parse(localStorage.getItem('questions'))
  qs[question.id - 1].answer = e.target.value
  localStorage.setItem('questions', JSON.stringify(qs))
  setQuestion(prev => {
    return {
      ...prev,
      answer: e.target.value
    }
  })
}

function checkboxAnswerSetter(e, idx) {
  let qs = JSON.parse(localStorage.getItem('questions'))
  let answers = []
  qs[question.id - 1].options[idx].checked = !qs[question.id - 1].options[idx].checked

  qs[question.id - 1].options.forEach(option => {
    if (option.checked) answers.push(option.title)
  })

  qs[question.id - 1].answer = answers
  localStorage.setItem('questions', JSON.stringify(qs))

  setQuestion(prev => {
    return {
      ...prev,
      options: [...qs[question.id - 1].options],
      answer: [...answers]
    }
  })
}

export {textAnswerSetter, checkboxAnswerSetter}