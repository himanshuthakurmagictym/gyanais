// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

const data = [
  { id: 1, title: 'Masterstroke Human Geography Curriculum', image: '1.jpg', date: '3:00 PM', lesson: 'Lesson 5',  },
  { id: 2, title: 'Comprehensive Course on Sociology - Optional Paper I', image: '2.jpg', date: '3:00 PM', lesson: 'Lesson 3',  },
  { id: 3, title: 'Masterstroke Human Geography Curriculum', image: '3.jpg', date: '3:00 PM', lesson: 'Lesson 6',  },
  { id: 4, title: 'Course on Political Science and International Relations', image: '1.jpg', date: '3:00 PM', lesson: 'Lesson 7',  },
]

  res.status(200).json(data)
}
