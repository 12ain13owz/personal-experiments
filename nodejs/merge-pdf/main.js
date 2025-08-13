const fs = require('fs')
const path = require('path')
const { PDFDocument } = require('pdf-lib')
const cliProgress = require('cli-progress')

const inputDir = path.join(__dirname, 'input')
const outputDir = path.join(__dirname, 'output')

const now = new Date()
const timestamp = now.toISOString().replace(/[:.]/g, '-')
const outputFile = path.join(outputDir, `merged_${timestamp}.pdf`)

async function mergePDFsFromFolder() {
  const files = fs
    .readdirSync(inputDir)
    .filter((file) => file.toLowerCase().endsWith('.pdf'))
    .sort()

  if (files.length === 0) {
    console.log('No PDF files found in input folder.')
    return
  }

  const mergedPdf = await PDFDocument.create()
  const progressBar = new cliProgress.SingleBar({
    format: 'Merging PDFs |{bar}| {percentage}% || {value}/{total} files',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true,
  })
  progressBar.start(files.length, 0)

  for (const file of files) {
    const filePath = path.join(inputDir, file)
    const pdfBytes = fs.readFileSync(filePath)
    const pdf = await PDFDocument.load(pdfBytes)

    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices())
    copiedPages.forEach((page) => mergedPdf.addPage(page))
    progressBar.increment()
  }

  progressBar.stop()
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir)

  fs.writeFileSync(outputFile, await mergedPdf.save())
  console.log(`✅ Merged PDF saved to: ${outputFile}`)
}

mergePDFsFromFolder().catch((err) => console.error(err))
