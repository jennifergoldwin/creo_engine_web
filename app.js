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
    "/public/assets/team/JENNIFER.png",
    "/public/assets/team/TEDY.png",
    "/public/assets/team/RICHKO.png",
    "/public/assets/team/LOUIE.png",
    "/public/assets/team/DAVID.png",
    "/public/assets/team/ANDARU.png",
    "/public/assets/team/JIMMY.png",
]

var roadmapTimeline = [
    [
        {
            timeline : "Q2'21", title: "Concept Exploration<br>& Finalization"
        },
        {
            timeline : "Q3'21", title: "Creo Token Development<br>Partnership<br>Game Alpha Development"
        },
        {
            timeline : "Q4'21", title: "Seed Sale"
        },
        {
            timeline : "Q1'22", title: "Game Alpha Testing<br>IDO Sale<br>Listing on First Exchanger"
        },
    ],

    [
        {
            timeline : "Q2'22", title: "Listing on Pancake Swap<br>Game Beta Testing"
        },
        {
            timeline : "Q3'22", title: "Full Game Release<br>Listing on Another Exchanger<br>NFT Development<br>Game Feature Improvement"
        },
        {
            timeline : "Q4'22", title: "Game Feature Improvement<br>Second Game Development"
        },
        {
            timeline : "Q1'23", title: "Game Feature Improvement<br>Second Game Alpha Testing<br>Listing On Another Exchanger"
        },
    ],
    [
        {
            timeline : "Q3'23", title: "Second Game Beta Testing<br>Game Feature Improvement<br>System Improvement"
        },
        {
            timeline : "2024", title: "Business Expansion<br>More Games Launch<br>Game Feature Improvement<br>System Improvement"
        },
        {
            timeline : "2025", title: "More Game Launch<br>Game Feature Improvement<br>Maintain Ecosystem<br>System Improvement"
        },
    ]

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
    res.render('index',{team: listTeam,roadmap: roadmapTimeline})
})


// Listen on port 3000
app.listen(port,()=> console.info(`Listening on port ${port}`))