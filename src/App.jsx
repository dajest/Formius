import { useState, useEffect } from 'react'
import {questions} from './data/questions'
import AnswerBuilder from './components/AnswerBuilder'

function App() {
  const [question, setQuestion] = useState({})

  useEffect(() => {
    if (localStorage.getItem("questions")) {
      let x = JSON.parse(localStorage.getItem('questions'))[0]
      setQuestion(x)
    }
    else {
      setQuestion(questions[0])
      localStorage.setItem('questions', JSON.stringify(questions))
    }
  }, [])

  function nextQuestion() {
    const qlist = JSON.parse(localStorage.getItem('questions'))
    setQuestion(qlist[question.id])
  }

  function prevQuestion() {
    const qlist = JSON.parse(localStorage.getItem('questions'))
    setQuestion(qlist[question.id - 2])
  }

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

  function submitForm() {
    alert("Thank you for your time!!!")
    localStorage.removeItem('questions')
    location.reload();
  }

  return (
    <div className="App">
      <div className="form-wrapper">
        <div className="container">
          <div className="input-wrapper">
            <img className='cursor-logo' src="./assets/logo.png" alt="Logo" />
            <div className="input-block">
              <div className="question">
                <div className='label'>Вопрос номер {question.id} из {questions.length}</div>
                <h1 className='question-body'>{question.question}</h1>
              </div>
              <div className="answer">
                <AnswerBuilder question={question} checkboxAnswerSetter={checkboxAnswerSetter} textAnswerSetter={textAnswerSetter}/>
              </div>

              <div className={'controls' + (question.id === 1 ? '' : ' between')}>
                <button 
                  className={'question-btn prev-button' + (question.id === 1 ? ' hide' : ' show')} 
                  onClick={prevQuestion}>
                    Назад
                </button>
                <button 
                  className={'question-btn next-button' + (question.id === questions.length ? ' hide' : ' show')}
                  onClick={nextQuestion}>
                    Слудующий Вопрос
                </button>
                {
                  question.id === questions.length && 
                  <button 
                  className='question-btn submit-form'
                  onClick={submitForm}>
                    Отправить
                  </button> 
                } 
                               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
