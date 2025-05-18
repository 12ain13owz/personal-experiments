import fs from 'fs'
import path from 'path'

export function readFile(filePath) {
  return fs.readFileSync(filePath)
}

export function writeFile(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, data)
}

export function getFiles(dirPath) {
  return fs.readdirSync(dirPath)
}
