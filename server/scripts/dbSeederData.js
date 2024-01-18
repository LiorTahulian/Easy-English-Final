const usersData = [
  {
    name: "Lior",
    phone: "0505555555",
    email: "lior@lior.com",
    password: "Aa123456!",
    address: {
      country: "Israel",
      city: "Holon",
    },
    isAdmin: true,
    // questions:[ // will be filled when the student answers a question
    //     {
    //         question_id: "some question id",
    //         answer: "Dog",
    //         correct: false
    //     }
    // ]
  },
  {
    name: "Ben",
    phone: "0505555555",
    email: "ben@ben.com",
    password: "Aa123456!",
    address: {
      country: "Israel",
      city: "Holon",
    },
    isAdmin: false,
  },
  {
    name: "Talia",
    phone: "0505555555",
    email: "israel@israel.com",
    password: "Aa123456!",
    address: {
      country: "Israel",
      city: "Holon",
    },
    isAdmin: false,
  },
];

const questionsData = [
  {
    question: "The ______ Barked.",
    options: [
      {
        number: 1,
        title: "Dog",
        correct: true,
      },
      {
        number: 2,
        title: "Mouse",
        correct: false,
      },
    ],
    levelNumber: 1,
    levelDescription: "Easy",
    tags: "Animal, Animals, Cat, Dolphin, Dog, Mouse, Easy"
  },
  {
    question: "The ______ are high.",
    options: [
      {
        number: 1,
        title: "Eyes",
        correct: false,
      },
      {
        number: 2,
        title: "Buildings",
        correct: true,
      },
    ],
    levelNumber: 1,
    levelDescription: "Easy",
    tags: "towels, bananas, Eyes, Buildings, High, Easy"
  },
  {
    question: "He ______ to school everyday.",
    options: [
      {
        number: 1,
        title: "Goes",
        correct: true,
      },
      {
        number: 2,
        title: "Drinks",
        correct: false,
      },
    ],
    levelNumber: 1,
    levelDescription: "Easy",
    tags: "School, Goes, Drinks, Jumps, Writes, Study, Education, Easy"
  },
  {
    question: "The main weapon of the samurai is a ______.",
    options: [
      {
        number: 1,
        title: "Fork",
        correct: false,
      },
      {
        number: 2,
        title: "Hammer",
        correct: false,
      },
      {
        number: 3,
        title: "Sword",
        correct: true,
      },
      {
        number: 4,
        title: "Shoes",
        correct: false,
      },
    ],
    levelNumber: 1,
    levelDescription: "Medium",
    tags: "Fork, Hammer, Sword, Shoes, Weapon, Samurai, War, Medium"
  },
  {
    question: "The ______ investigated the incident.",
    options: [
      {
        number: 1,
        title: "Teacher",
        correct: false,
      },
      {
        number: 2,
        title: "Detective",
        correct: true,
      },
      {
        number: 3,
        title: "Fisher",
        correct: false,
      },
      {
        number: 4,
        title: "Manager",
        correct: false,
      },
    ],
    levelNumber: 1,
    levelDescription: "Medium",
    tags: "Teacher, Detective, Fisher, Manager, Investigate, Incident, Medium"
  },
  {
    question: "In order to relax, I listen to ______.",
    options: [
      {
        number: 1,
        title: "Music",
        correct: true,
      },
      {
        number: 2,
        title: "Physics",
        correct: false,
      },
      {
        number: 3,
        title: "Drawing",
        correct: false,
      },
      {
        number: 4,
        title: "Table",
        correct: false,
      },
    ],
    levelNumber: 1,
    levelDescription: "Medium",
    tags: "Relax, Listen, Music, Physics, Drawing, Table, Medium"
  },
  {
    question: "The official ______ of Brazil is Portugese.",
    options: [
      {
        number: 1,
        title: "Keyboard",
        correct: false,
      },
      {
        number: 2,
        title: "Language",
        correct: true,
      },
    ],
    levelNumber: 1,
    levelDescription: "Easy",
    tags: "Official, Brazil, Portugese, keyboard, Bench, Box, Language, Easy"
  }, {
    question: "After I have breakfast, I turn on my computer, and I ______.",
    options: [
      {
        number: 1,
        title: "Go to the gym",
        correct: false,
      },
      {
        number: 2,
        title: "Check my emails",
        correct: true,
      },
    ],
    levelNumber: 1,
    levelDescription: "Easy",
    tags: "Breakfast, Gym, Emails, Shopping, Sleep, Easy"
  }
  , {
    question: "Sam ______ at 9:00 every morning and finishes at 17:00.",
    options: [
      {
        number: 1,
        title: "Starts work",
        correct: true,
      },
      {
        number: 2,
        title: "Drinks coffee",
        correct: false,
      },
    ],
    levelNumber: 1,
    levelDescription: "Easy",
    tags: "Sam, Morning, Jumps, Trampoline, coffee, Easy"
  }, {
    question: "______ is the strongest material in the world.",
    options: [
      {
        number: 1,
        title: "diamond",
        correct: true,
      }
    ],
    levelNumber: 1,
    levelDescription: "Hard",
    tags: "Strongest, Material, Oxygen, Steel, Diamond, Coal, Hard"
  }, {
    question: "Usually, a gift is wrapped with a red ______.",
    options: [
      {
        number: 1,
        title: "ribbon",
        correct: true,
      }
    ],
    levelNumber: 1,
    levelDescription: "Hard",
    tags: "Gift, Wrapped, Roar, Ribbon, Robber, Runner, Hard"
  }, {
    question: "Look outside! It's ______.",
    options: [
      {
        number: 1,
        title: "Knocking",
        correct: false,
      },
      {
        number: 2,
        title: "Charging",
        correct: false,
      },
      {
        number: 3,
        title: "Blessing",
        correct: false,
      },
      {
        number: 4,
        title: "Raining",
        correct: true,
      },
    ],
    levelNumber: 1,
    levelDescription: "Medium",
    tags: "Look, Outside, Knocking, Charging, Blessing, Raining, Medium"
  }, {
    question: "The workers did not receive salaries, so they decided to ______.",
    options: [
      {
        number: 1,
        title: "Dream",
        correct: false,
      },
      {
        number: 2,
        title: "Think",
        correct: false,
      },
      {
        number: 3,
        title: "Strike",
        correct: true,
      },
      {
        number: 4,
        title: "Cry",
        correct: false,
      },
    ],
    levelNumber: 1,
    levelDescription: "Medium",
    tags: "Workers, Salaries, Dream, Think, Strike, Cry, Medium"
  }, {
    question: "My uncle shouted 'I ______' when the pastor asked if there were any objectors.",
    options: [
      {
        number: 1,
        title: "Shuffle",
        correct: false,
      },
      {
        number: 2,
        title: "Object",
        correct: true,
      },
      {
        number: 3,
        title: "Talk",
        correct: false,
      },
      {
        number: 4,
        title: "Walk",
        correct: false,
      },
    ],
    levelNumber: 1,
    levelDescription: "Medium",
    tags: "Pastor, Objectors, Shuffle, Object, Talk, Walk, Medium"
  }, {
    question: "The cow is a ______ animal in India.",
    options: [
      {
        number: 1,
        title: "Sacred",
        correct: true,
      },
      {
        number: 2,
        title: "Nice",
        correct: false,
      },
      {
        number: 3,
        title: "Scary",
        correct: false,
      },
      {
        number: 4,
        title: "Cute",
        correct: false,
      },
    ],
    levelNumber: 1,
    levelDescription: "Medium",
    tags: "Cow, Animal, India, Sacred, Nice, Scary, Cute, Medium"
  }
];


module.exports = { usersData, questionsData };