import path from 'path'
import { readdir, writeFile } from 'fs/promises'

const cwd = process.cwd()

const srcPath = path.resolve(cwd, './src')
const readmePath = path.resolve(cwd, './README.md')

;(async () => {
  const files = await readdir(srcPath)
  const content = `# type-challenges-answer

Answers of type-challenges, I have added comments to some questions that I think are quite challenging.

${files
  .map(
    (file) =>
      `[${path.basename(
        file,
        '.ts',
      )}](https://github.com/zhangyu1818/type-challenges-answer/blob/main/src/${file})`,
  )
  .join('\n\n')}
  `
  await writeFile(readmePath, content, 'utf-8')
})()
