const app = require("./app");  
// routing wala kura bujnabaki

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
