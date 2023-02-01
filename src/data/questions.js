const questions = [
  {
    id: 1,
    question: "Как Вас зовут?",
    type: 'input',
    content: 'text',
    answer: ''
  },
  {
    id: 2,
    question: "Из Какой Вы Группы?",
    type: 'input',
    content: 'text',
    answer: ''
  }, 
  {
    id: 3,
    question: "Ваш Email",
    type: 'input',
    content: 'email',
    answer: ''
  },   
  {
    id: 4,
    question: "Как вам Ваш преподователь?",
    type: 'text',
    answer: ''
  },
  {
    id: 5,
    question: "Какова Ваша успеваймость?",
    type: 'text',
    answer: ''
  },
  {
    id: 6,
    question: "Что бы Вы хотели бы изменить?",
    type: 'text',
    answer: ''
  },
  {
    id: 7,
    question: "Что бы Вы сказали о своём преподавателе?",
    type: 'checkbox',
    options: [
      {
        checked: false,
        title: 'Хороший'
      },
      {
        checked: false,
        title: 'Отличный'
      },
      {
        checked: false,
        title: 'Замечательный'
      },
      {
        checked: false,
        title: 'Великолевный'
      },
      {
        checked: false,
        title: 'Красавчек'
      }
    ],
    answer: []
  },
  {
    id: 8,
    question: "Какой фрэймвор Выбирите?",
    type: 'radio',
    options: [
      {
        checked: false,
        title: 'Angular'
      },
      {
        checked: false,
        title: 'Vue'
      },
      {
        checked: false,
        title: 'React'
      },
      {
        checked: false,
        title: 'Svetle'
      },
      {
        checked: false,
        title: 'Vanila Javascript'
      }
    ],
    answer: ''
  }
]


export {questions}