import express from "express";

const app = express(); // Create an instance of express

app.get("/test", (req, res) => {
    res.send("Hello, World!"); // Respond with a simple message
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

});
