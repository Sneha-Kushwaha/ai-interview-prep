import express from "express"

let app = express()

app.get("/", () => {
    console.log("executing");
});

app.listen(9001, (err) => {
    console.log("Server Started....");
});
