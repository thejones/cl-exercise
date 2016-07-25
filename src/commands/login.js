import path from 'path'
import fs from 'fs'
import chalk from 'chalk'
import inquirer from 'inquirer'

export default function (program, app) {
  const jwtFile = path.join(process.env.HOME, '.jwt')
  program
    .command('login')
    .description('login to a feathers server')
    .action(() => {
      inquirer.prompt([
        {
          type: 'input',
          name: 'email',
          message: 'Email:'
        },
        {
          type: 'password',
          name: 'password',
          message: 'Password:'
        }
      ]).then(function (answers) {
        app.authenticate({
          type: 'local',
          'email': answers.email,
          'password': answers.password
        }).then(function (result) {
          fs.writeFile(jwtFile, result.token, function (err) {
            if (err) {
              console.log(chalk.red('Error saving auth information.'))
              return
            }
            program.authToken = result.token
            console.log(chalk.green('Login successful'))
          })
        }).catch(function (error) {
          console.log('anyyything')
          console.log(chalk.red(error))
        })
      }).catch(err => {
        console.log(err)
      })
    })
}
