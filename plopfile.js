module.exports = (plop) => {
  // create your generators here
  plop.setGenerator('component', {
    description: 'Create a component folder',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of component',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.js',
        templateFile:
          './development-tools/plop-templates/component/component.js',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.styles.js',
        templateFile: './development-tools/plop-templates/component/styles.js',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.fixture.js',
        templateFile: './development-tools/plop-templates/component/fixture.js',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.test.js',
        templateFile: './development-tools/plop-templates/component/test.js',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/index.js',
        templateFile: './development-tools/plop-templates/component/index.js',
      },
    ],
  });
  plop.setGenerator('model', {
    description: 'Generate action, api, saga, reducer and selector',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of model(singular, camelCase): ',
      },
      {
        type: 'input',
        name: 'uppercase',
        message: 'UPPERCASE: ',
      },
      {
        type: 'input',
        name: 'camelCaseName',
        message: 'camelCase: ',
      },
      {
        type: 'input',
        name: 'PascalCase',
        message: 'PascalCase: ',
      },
      {
        type: 'input',
        name: 'lowercase',
        message: 'lowercase: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/actions/{{name}}.js',
        templateFile: './development-tools/plop-templates/model/action.js',
      },
      {
        type: 'add',
        path: 'src/apis/{{name}}.js',
        templateFile: './development-tools/plop-templates/model/api.js',
      },
      {
        type: 'add',
        path: 'src/constants/{{name}}.js',
        templateFile: './development-tools/plop-templates/model/constant.js',
      },
      {
        type: 'add',
        path: 'src/reducers/{{name}}.js',
        templateFile: './development-tools/plop-templates/model/reducer.js',
      },
      {
        type: 'add',
        path: 'src/sagas/{{name}}.js',
        templateFile: './development-tools/plop-templates/model/saga.js',
      },
      {
        type: 'add',
        path: 'src/selectors/{{name}}.js',
        templateFile: './development-tools/plop-templates/model/selector.js',
      },
    ],
  });
  plop.setGenerator('model-orm', {
    description: 'Generate action, api, saga, reducer and selector',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of model(singular, camelCase): ',
      },
      {
        type: 'input',
        name: 'uppercase',
        message: 'UPPERCASE: ',
      },
      {
        type: 'input',
        name: 'camelCaseName',
        message: 'camelCase: ',
      },
      {
        type: 'input',
        name: 'PascalCase',
        message: 'PascalCase: ',
      },
      {
        type: 'input',
        name: 'lowercase',
        message: 'lowercase: ',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/actions/{{name}}.js',
        templateFile: './development-tools/plop-templates/model-orm/action.js',
      },
      {
        type: 'add',
        path: 'src/actions/{{name}}.test.js',
        templateFile:
          './development-tools/plop-templates/model-orm/action.test.js',
      },
      {
        type: 'add',
        path: 'src/apis/{{name}}.js',
        templateFile: './development-tools/plop-templates/model-orm/api.js',
      },
      {
        type: 'add',
        path: 'src/apis/{{name}}.test.js',
        templateFile:
          './development-tools/plop-templates/model-orm/api.test.js',
      },
      {
        type: 'add',
        path: 'src/constants/{{name}}.js',
        templateFile:
          './development-tools/plop-templates/model-orm/constant.js',
      },
      {
        type: 'add',
        path: 'src/models/{{name}}.js',
        templateFile: './development-tools/plop-templates/model-orm/model.js',
      },
      {
        type: 'add',
        path: 'src/models/{{name}}.test.js',
        templateFile:
          './development-tools/plop-templates/model-orm/model.test.js',
      },
      {
        type: 'add',
        path: 'src/sagas/{{name}}.js',
        templateFile: './development-tools/plop-templates/model-orm/saga.js',
      },
      {
        type: 'add',
        path: 'src/sagas/{{name}}.test.js',
        templateFile:
          './development-tools/plop-templates/model-orm/saga.test.js',
      },
      {
        type: 'add',
        path: 'src/selectors/{{name}}.js',
        templateFile:
          './development-tools/plop-templates/model-orm/selector.js',
      },
      {
        type: 'add',
        path: 'src/selectors/{{name}}.test.js',
        templateFile:
          './development-tools/plop-templates/model-orm/selector.test.js',
      },
    ],
  });
};
