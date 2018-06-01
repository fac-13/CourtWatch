const app = require('./app'); 
const port = 3000 || process.env.PORT; 
const host = "localhost" || process.env.HOST; 

app.listen(port, () => {
    console.log(`Server running on http://${host}:${port}`); 
})