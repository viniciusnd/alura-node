import app from './src/app.js'
const port = process.env.PORT || 3000 // process.end.PORT
// Crud --> Creat, Read, Update, Delete = CRUD
// Creat (POST), Read(GET), Update (PUT), Delete (DELETE)
app.listen(port, () =>{
    console.log(`Servidor escutando em http://localhost:${port}`)
})