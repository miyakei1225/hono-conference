import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/foods/:country', (c) => {
  const country = c.req.param('country')

  let foods: string[]
  switch (country) {
    case 'japan':
      foods = ['寿司', 'すき焼き', '天ぷら']
      break
    case 'usa':
      foods = ['ハンバーガー', 'ホットドッグ', 'フライドチキン']
      break
    case 'italy':
      foods = ['ピザ', 'パスタ', 'リゾット']
      break
    default:
      return c.json({ error: 'Unsupported country' }, 400)
  }
  return c.json(foods)
})

export default app

