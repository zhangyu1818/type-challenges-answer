import path from 'path'
import { readdir, writeFile } from 'fs/promises'

const cwd = process.cwd()

const srcPath = path.resolve(cwd, './src')
const readmePath = path.resolve(cwd, './README.md')

;(async () => {
  const files = await readdir(srcPath)
  const [easy, medium, hard, extreme] = files.reduce(
    (arr, cur) => {
      if (cur.includes('easy')) {
        arr[0].push(cur)
      }
      if (cur.includes('medium')) {
        arr[1].push(cur)
      }
      if (cur.includes('hard')) {
        arr[2].push(cur)
      }
      if (cur.includes('extreme')) {
        arr[3].push(cur)
      }
      return arr
    },
    [[], [], [], []],
  )

  const print = (type, files) => `## ${type}

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

  const content = `# type-challenges-answer

Answers of [type-challenges](https://github.com/type-challenges/type-challenges), I have added comments to some questions that I think are quite challenging.

${print('Easy', easy)}
${print('Medium', medium)}
${print('Hard', hard)}
${print('Extreme', extreme)}
  `
  await writeFile(readmePath, content, 'utf-8')
})()
