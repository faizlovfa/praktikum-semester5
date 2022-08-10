import express from "express";

const app = express();

const port = 7000;

app.get("/makanan",(req, res) => {
    res.send([
        {
            id: 1,
            nama: "Mie Sedap",
            rasa: "Ayam",
        },
        {
            id: 2,
            nama: "Mie Indomie",
            rasa: "Nasi Goreng",
        },
    ]);
});

app.get("/minuman",(req, res)=> {
    res.send([
        {
            id: 1,
            nama: "Nutrisari",
            rasa: "Jeruk Nipis",
        },
        {
            id: 2,
            nama: "Nutrisari",
            rasa: "Mangga",
        },
    ]);
});


app.post("./create", (req, res) => {
    res.send({ nama:  req.body});
});

app.listen(port, () => {
    console.log(`Aplikasinya jalan di port ${port}`);
});
