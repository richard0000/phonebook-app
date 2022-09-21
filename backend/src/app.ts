import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import contactRoutes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(contactRoutes)

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.vfoyr.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`

mongoose
  .connect(uri, { retryWrites: true, w: 'majority' })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })