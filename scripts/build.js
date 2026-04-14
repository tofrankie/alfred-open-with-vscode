import { Buffer } from 'node:buffer'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'
import AdmZip from 'adm-zip'

const readFileAsync = promisify(fs.readFile)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'))

main()

async function main() {
  const zip = new AdmZip()

  zip.addLocalFile(path.join(__dirname, '../src/404.png'))
  zip.addLocalFile(path.join(__dirname, '../src/icon.png'))
  zip.addLocalFile(path.join(__dirname, '../dist/bundle.cjs'))
  zip.addFile('info.plist', await fillInfoPlist())

  zip.writeZip(`${pkg.name}.alfredworkflow`)
}

async function fillInfoPlist() {
  const infoPlistPath = path.join(__dirname, '../src/info.plist')
  const changelogPath = path.join(__dirname, '../CHANGELOG.md')

  const infoPlist = await readFileAsync(infoPlistPath, 'utf8')
  const changelog = await readFileAsync(changelogPath, 'utf8')

  const replacedPlist = infoPlist
    .replace('$createdby', pkg.author.name)
    .replace('$version', pkg.version)
    .replace('$description', pkg.description)
    .replace('$webaddress', pkg.homepage)
    .replace('$readme', changelog)

  return Buffer.from(replacedPlist)
}
