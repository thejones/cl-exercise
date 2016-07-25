import path from 'path'
import fs from 'fs'

export default function (args) {
  const jwtFile = path.join(process.env.HOME, '.jwt')

  return new Promise((resolve, reject) => {
    // resolve(true)
    fs.exists(jwtFile, (exists) => {
      if (exists) {
        fs.readFile(jwtFile, (err, data) => {
          if (err) reject(false)
          resolve(data)
        })
      } else {
        reject(false)
      }
    })
  })
}
