import path from 'path'
import inquirer from 'inquirer'
import { existsSync as exists } from 'fs'
import merge from 'lodash.merge'

export default function(program) {
  program
    .command('logout')
    .description('logout a template')
    .alias('g')
    .action(() => {
      console.log('logout has been called')
      process.exit(1)
    })
}
