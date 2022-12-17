const app = require('./src/app')
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send({ message: 'Bem-vindos ao Portal Pra Quem Doar!' })
})

app.listen(PORT, () => {
  console.log(`API running in Port ${PORT}`)
})
