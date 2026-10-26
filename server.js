import express from 'express'
import apiApp from './backend/dist/app.js'

const app = express()
app.use(apiApp)

export default app
