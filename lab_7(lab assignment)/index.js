const express = require('express');

const app= express();

app.use(express.json());

// const fs = require('fs');
// //middleware
// app.use((req, res, next) => { 
// console.log(`Received a ${req.method} request at ${req.url}`); 


// fs.writeFile('log.txt',"this is log.txt file", (err) => {
//     if(err){console.error(err.message);

//     }
// })
// fs.appendFile('log.txt', `\n[${new Date()}] Received a ${req.method} request at ${req.url}`,(err) => {
//     if(err){console.error(err.message);
//     }
// })

// next(); 
// }); 


app.use(express.urlencoded({extended:true}));

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return ('Error: Name and Email are required!');
    }
    res.send(`Form submitted! Name: ${name}, Email: ${email}`);
});

const path = require('path');
app.get('/form', (req, res) => {
     res.sendFile(path.join(__dirname, 'index.html'));
})
// // home (/) route
// app.get('/', (req, res) => {
// res.send('wlcome to the express server');
// })
// //contact
// app.get('/contact', (req, res) => {
// res.send('contact us at @admin.com');
// })
// //about
// app.get('/about', (req, res) => {
// res.send('this is the about page');
// })

// //greet
// app.get('/greet', (req, res) => {
// const name = req.query.name || 'Stranger'; 
// res.send(`Hello, ${name}!`); 
// })

app.listen(4000);

// // error
// app.get('/error', (req, res) => { 
// throw new Error('Something went wrong!'); 
// }); 
// // Error hanndling
// app.use((err, req, res, next) => { 
// res.status(500).json({ message: err.message }); 
// }); 