// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

    const data = [
      { id: 1, category_name: 'UPSC CSE', image: '1.png'  },
      { id: 2, category_name: 'GEE nd NEET', image: '2.png'  },
      { id: 3, category_name: 'State PSC', image: '3.png', date: '3:00 PM'  },
      { id: 4, category_name: 'CAT', image: '1.png' },
      { id: 5, category_name: 'UPSC CSE', image: '1.png'  },
      { id: 6, category_name: 'GEE nd NEET', image: '2.png'  },
      { id: 7, category_name: 'State PSC', image: '3.png', date: '3:00 PM'  },
      { id: 8, category_name: 'CAT', image: '1.png' },
    ]

   
    
      res.status(200).json(data)
    }
    