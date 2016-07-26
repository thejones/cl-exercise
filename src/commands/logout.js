import fs from 'fs'
import chalk from 'chalk'
import path from 'path'

export default function (program) {
  program
    .command('logout')
    .description('logout (delete .jwt file')
    .action(() => {
      
      const jwtFile = path.join(process.env.HOME, '.jwt')
      fs.unlink(jwtFile, (err,success) => {
      	if(err){
      		console.log(chalk.red(err))
      		return;
      	}
      })
      process.exit(1)
    });
}
