import { useState, useEffect } from 'react'
import {questions} from './data/questions'

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

  function changeQuestion(type) {
    const qlist = JSON.parse(localStorage.getItem('questions'))
    if (type === 'next')setQuestion(qlist[question.id])
    else if (type === 'prev') setQuestion(qlist[question.id - 2])
  }

  function nextQuestion() {
    const qlist = JSON.parse(localStorage.getItem('questions'))
    setQuestion(qlist[question.id])
  }

  function prevQuestion() {
    const qlist = JSON.parse(localStorage.getItem('questions'))
    setQuestion(qlist[question.id - 2])
  }

  function answerSetter(e) {
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
                <textarea value={question.answer} onChange={(e)=> {answerSetter(e)}} name="answer" id="2"></textarea>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
