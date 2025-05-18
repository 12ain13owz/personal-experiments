import chalk from 'chalk'
import path from 'path'
import heicConvert from 'heic-convert'
import cliProgress from 'cli-progress'

export async function convertToPng(inputBuffer) {
  try {
    const outputBuffer = await heicConvert({
      buffer: inputBuffer,
      format: 'PNG',
      quality: 1,
    })
    return outputBuffer
  } catch (error) {
    throw new Error(`Conversion failed: ${error.message}`)
  }
}

export function validFiles(files, supportedExtensions) {
  return files.filter((file) =>
    supportedExtensions.includes(path.extname(file))
  )
}

export function progressBar(total) {
  const progress = new cliProgress.SingleBar(
    {
      format: chalk.cyan(
        `Converting {bar} {percentage}% | {value}/{total} files | {filename} `
      ),
      barCompleteChar: '\u2588',
      barIncompleteChar: '\u2591',
      hideCursor: true,
      clearOnComplete: false,
    },
    cliProgress.Presets.shades_classic
  )

  return progress
}
