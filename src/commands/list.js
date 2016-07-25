import chalk from 'chalk'

import requiresAuth from '../utils/requires-auth'

export default function (program, app) {
  // Set up feathers services.
  const workoutService = app.service('workouts')
  program
    .command('list')
    .description('list all messages')
    .action(() => {
      requiresAuth(program).then(() => {
        workoutService.find().then((data) => {
          console.log(chalk.green('Success'))
          console.log(data)
        }).catch(err => console.log(err))
      // process.exit(1)
      }).catch(err => {
        console.log(err)
      })
    })
}
