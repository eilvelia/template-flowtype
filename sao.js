'use strict'

module.exports = {
  prompts: {
    projectName: {
      message: 'Project name:',
      default: ':folderName:'
    },
    description: {
      message: 'Project description:'
    },
    username: {
      message: 'GitHub username:',
      default: ':gitUser:'
    },
    email: {
      message: 'Github email:',
      default: ':gitEmail:'
    }
  },

  move: {
    'gitignore': '.gitignore'
  },

  data: {
    year: (new Date()).getFullYear()
  },

  installDependencies: true,
  gitInit: false,
  yarnInstall: false,
  npmInstall: true,
  showTip: true
}
