
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3001

app.use(cors({
  origin: 'http://localhost:5173'
}))

app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'OpsDesk API',
    message: 'Backend is running successfully'
  })
})

app.listen(PORT, () => {
  console.log(`OpsDesk API running at http://localhost:${PORT}`)
})
