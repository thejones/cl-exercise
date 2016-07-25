import fs from 'fs'

export default function (program) {
  program
    .command('logout')
    .description('logout from cli app.')
    .alias('g')
    .action(() => {
      console.log('logout has been called')
      process.exit(1)
    })
}
