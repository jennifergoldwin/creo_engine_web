// Imports
const express = require('express')
const app = express()
const port = 3000

var listTeam=[
    "/public/assets/team/JAVIER.png",
    "/public/assets/team/DARREL.png",
    "/public/assets/team/GANI.png",
    "/public/assets/team/VETRIC.png",
    "/public/assets/team/DEVI.png",
    "/public/assets/team/TIMOTHY.png",
    "/public/assets/team/AKBAR.png",
    "/public/assets/team/TEDY.png",
    "/public/assets/team/RICHKO.png",
    "/public/assets/team/LOUIE.png",
    "/public/assets/team/DAVID.png",
    "/public/assets/team/ANDARU.png",
    "/public/assets/team/JIMMY.png",
]

// Static Files
app.use('/public', express.static(__dirname + "/public"));
// app.use(express.static('public'))
// app.use('/css',express.static(__dirname + 'public/css'))
// app.use('/js',express.static(__dirname + 'public/js'))
// app.use('/img',express.static(__dirname + 'public/img'))

// Set Views
// app.set('views','./views')
app.set('view engine','ejs')

app.get('',(req,res)=>{
    res.render('index',{list: listTeam})
})

// app.get('/about',(req,res)=>{
//     res.render('about',{text: 'About Page'})
// })

// Listen on port 3000
app.listen(port,()=> console.info(`Listening on port ${port}`))