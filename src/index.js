import Debug from 'debug'
import program from 'commander'
import chalk from 'chalk'
import request from 'request'
// Feathers
import feathers from 'feathers/client'
import hooks from 'feathers-hooks'
import rest from 'feathers-rest/client'
import authentication from 'feathers-authentication/client'
// Commands
import rootCheck from 'root-check'
import create from './commands/create'
import list from './commands/list'
import login from './commands/login'
import logout from './commands/logout'
import help from './commands/help'
import version from './commands/version'
import authCheck from './utils/auth-check.js'

const debug = Debug('feathers-cli')

const host = 'http://localhost:3030'

export default function () {
  let args = process.argv
  program.debug = debug

  // Check to see if command was run as root and try to downgrade permissions.
  // If that fails show an error and exit out. We don't want to create files as root.
  rootCheck(`
    ${chalk.red("Easy with the 'sudo'.")}

    Since feathers is a user command, there is no need to execute it with root permissions.
    If you're having permission errors when using feathers without sudo, please spend a few
    minutes learning more about how your system should work and make any necessary repairs.

    Two quick solutions are to change where npm stores global packages by putting ~/npm/bin
    in your PATH and running: ${chalk.bold('npm config set prefix ~/npm')} or simply using NVM to manage
    your node environment. See https://github.com/creationix/nvm.
    `)

  authCheck().then(data => {
    program.authToken = data.toString()
    setup()
  }).catch((err) => {
    if (err) {
      program.authToken = null
    }
    setup()
  })

  // Register our commands with commander
  const registerCommands = (app) => {
    create(program, app)
    list(program, app)
    login(program, app)
    logout(program)
    help(program)
    version(program)
  }

  const run = () => {
    program.parse(args)
    // Show help if no other command was called
    if (!program.args.length) {
      program.help()
    }
  }

  const setup = () => {
    const client = request.defaults({
      'auth': {
        'bearer': program.authToken
      }
    })

    // Config feathers client
    const app = feathers()
      .configure(hooks())
      .configure(rest(host).request(client))
      .configure(authentication())

    registerCommands(app)
    run()
  }

  // Add some extra padding
  process.on('exit', function () {
    console.log()
  })
}
