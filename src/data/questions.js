const questions = [
  {
    id: 1,
    question: "Как вам Ваш преподователь?",
    type: 'text',
    answer: ''
  },
  {
    id: 2,
    question: "Какова Ваша успеваймость?",
    type: 'text',
    answer: ''
  },
  {
    id: 3,
    question: "Что бы Вы хотели бы изменить?",
    type: 'text',
    answer: ''
  },
  {
    id: 4,
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
    id: 5,
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