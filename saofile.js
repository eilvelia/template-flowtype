module.exports = {
  prompts() {
    return [
      {
        name: 'projectName',
        message: 'Project name',
        default: this.outFolder,
        filter: val => val.toLowerCase()
      },
      {
        name: 'description',
        message: 'Project description',
        default: ''
      },
      {
        name: 'username',
        message: 'What is your GitHub username',
        default: this.gitUser.username || this.gitUser.name
      },
      {
        name: 'email',
        message: 'What is your email?',
        default: this.gitUser.email
      }
    ]
  },

  actions: [
    {
      type: 'add',
      files: '**'
    },
    {
      type: 'move',
      patterns: {
        'gitignore': '.gitignore',
        'template-package.json': 'package.json'
      }
    }
  ],

  templateData: {
    year: (new Date()).getFullYear()
  },

  async completed() {
    this.gitInit()
    await this.npmInstall()
    this.showProjectTips()
  }
}
