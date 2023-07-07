import express from 'express'

const app = express()

app.get("/", (req, res) => {

})

app.listen(3001, () => {
    console.log("Server...");
})

// npm run start