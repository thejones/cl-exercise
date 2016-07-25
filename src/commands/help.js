/*
 * Display help
 */

export default function (program) {
  program
    .command('help')
    .description('display help menu')
    .action(() => {
      program.help()
      console.log('help')
    })
}
