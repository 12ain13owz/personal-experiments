import chalk from 'chalk'
import path from 'path'
import {
  convertToPng,
  validFiles,
  progressBar,
} from './utils/heic-converter.util'
import { readFile, writeFile, getFiles } from './utils/file.util'

const config = {
  inputDir: './input',
  outputDir: './output',
  supportedExtensions: ['.heic', '.HEIC'],
}

async function convertAllHeicToPng() {
  try {
    const files = getFiles(config.inputDir)
    const fileLength = validFiles(files, config.supportedExtensions).length

    if (fileLength === 0) {
      console.log(chalk.red('No valid files found.'))
      return
    }

    const bar = progressBar(fileLength)
    bar.start(fileLength, 0, { filename: 'Starting...' })

    for (const file of files) {
      const inputFilePath = path.join(config.inputDir, file)
      const outputFilePath = path.join(
        config.outputDir,
        file.replace(/\.heic$/i, '.png')
      )

      const inputBuffer = readFile(inputFilePath)
      const outputBuffer = await convertToPng(inputBuffer)
      writeFile(outputFilePath, outputBuffer)

      bar.increment({ filename: file })
      console.log(chalk.green(`✓ Saved: ${outputFilePath}`))
    }

    bar.stop()
  } catch (error) {
    console.error(chalk.red('Error:', error.message))
  }
}

convertAllHeicToPng()
