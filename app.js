// Imports
const express = require('express')
const app = express()
const port = 4000

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
            timeline : "Q1 2022", title: "1st game alpha testing<br>IDO SALE in multiple launchpad<br>Listing on First exchanger<br>NFT DEVELOPMENT"
        },
        {
            timeline : "Q2 2022", title: "Listing on Dex<br>1st Game Close Beta<br>1st Game full release<br>Listing on Another Exchanger<br>NFT MARKETPLACE<br>2nd Game Development<br>Staking Rewards"
        },
        {
            timeline : "Q3 2022", title: "2nd Game Alpha Testing<br>Game Feature Improvement<br>Listing on Another Exchanger"
        },
     
    ],

    [
        {
            timeline : "Q4 2022", title: "Game Feature Improvement<br>2nd Game Close Beta<br>2nd Game Full release"
        },
        {
            timeline : "Q1 2023", title: "Game Feature improvement<br>Listing on Another exchanger<br>3rd Game development"
        },
        {
            timeline : "Q3 2023", title: "Game Feature Improvement<br>System Improvement<br>Maintain Ecosystem"
        },
    ],
    [
    
        {
            timeline : "2024", title: "Business expansion<br>3rd Game Alpha testing<br>Game Feature Improvement<br>System Improvement<br>Another Games Development"
        },
        {
            timeline : "2025", title: "More Game Launch<br>Game Feature Improvement<br>System Improvement<br>Maintain Ecosystem<br>Trust Fund ideas"
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