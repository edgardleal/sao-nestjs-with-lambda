import path from 'path'
import test from 'ava'
import sao from 'sao'

const generator = path.join(__dirname, '..')

test('defaults', async t => {
  const stream = await sao.mock({ generator })

  t.snapshot(stream.fileList, 'Generated files')
})

test('package.json', async t => {
  async function getPackage(stream) {
    const content = await stream.readFile('package.json')
    return JSON.parse(content)
  }

  const name = `test-${Date.now()}`
  const answers = { name }
  const stream = await sao.mock({ generator }, answers)
  const pack = await getPackage(stream)

  t.is(pack.name, name)
})
