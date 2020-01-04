const tasks = [
  {
    id: 1,
    name: "Todo",
    active: true,
    tasks: [
      {
        id: 1,
        title: "Learn Node",
        edit: false
      },
      {
        id: 2,
        title: "Learn Loopback",
        edit: false
      }
    ]
  },
  {
    id: 2,
    name: "InProgress",
    active: false,
    tasks: [
      {
        id: 1,
        title: "Learn MongoDB",
        edit: false
      },
      {
        id: 2,
        title: "Learn VueJS",
        edit: false
      }
    ]
  },
  {
    id: 3,
    name: "Testing",
    active: false,
    tasks: [
      {
        id: 1,
        title: "Learn ReactNative",
        edit: false
      }
    ]
  },
  {
    id: 4,
    name: "Done",
    active: false,
    tasks: [
      {
        id: 1,
        title: "Learn GraphQL",
        edit: false
      }
    ]
  }
];

export default tasks;
