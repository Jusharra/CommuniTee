import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.post('/create', (req, res) => {
    const sql = "INSERT INTO  * FROM broadcast";
    db.query(sql, (err, data) => {
        if(err) {
            return res.json({Error: "Error"})
        }
        return res.json(data)
    })
})

app.listen(3030, () => {
  console.log('Server is running')
})