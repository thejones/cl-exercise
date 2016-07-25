import inquirer from 'inquirer'
import chalk from 'chalk'

import requiresAuth from '../utils/requires-auth'

export default function (program, app) {
  // Set up feathers services.
  const workoutService = app.service('workouts')
  program
    .command('create')
    .description('create a new workout')
    .action(() => {
      requiresAuth(program).then(() => {
        // get input
        inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: 'Name:'
          },
          {
            type: 'input',
            name: 'body',
            message: 'Body:'
          }
        ]).then((answers) => {
          workoutService.create(answers).then((data) => {
            console.log(chalk.green('Success'))
            console.log(data)
          }).catch(err => console.log(err))
        }).catch((err) => {
          console.log(err)
        })

      // process.exit(1)
      }).catch(err => {
        console.log(err)
      })
    })
}
