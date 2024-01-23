module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Lets create a component 🔥',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{dashCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/styles/{{dashCase name}}.styles.tsx',
        templateFile: 'templates/styles.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/__tests__/{{dashCase name}}.test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
