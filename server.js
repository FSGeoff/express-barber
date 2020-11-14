const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/api/config", (req, res) => {
	res.json({
		success: true,
	});
});

const haircuts = [
    {
        name: "Quo Vidas",
        price: "$25"
    },
    {
        name: "Afro",
        price: "$40"
    },
    {
        name: "Low Fade",
        price: "$30"
    },
    {
        name: "Mohawk",
        price: "$45"
    },
];

const appointments = [
    {
        name: "Tom Brown",
        time: "1:00PM"
    }
]

app.get("/api/haircuts", (req, res) => {
    res.json(haircuts);
});

app.get("/api/haircuts/:name", (req,res) => {
    for(let i = 0; i < haircuts.length; i++) {
        if(haircuts[i].name === req.params.name){
            return res.json(haircuts[i]);
        }
    }
});

app.post("/api/haircuts", (req, res) => {
    haircuts.push(req.body);
    res.json(haircuts);
});


app.listen(PORT, () => {
	console.log(`You are listening on port http://localhost:${PORT}`);
});
