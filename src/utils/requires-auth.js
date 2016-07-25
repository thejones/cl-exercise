export default function (program) {
  return new Promise((resolve, reject) => {
    if (program && !program.authToken) {
      console.log('Requires login - $fcli login')
      process.exit(1)
    }
    resolve(true)
  })
}
