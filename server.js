const app = require('./src/app')
const db = require("./db/connection");
const port = 3000
// Express Routes






app.listen(port, () => {
    db.sync();
    console.log(`App listening on port ${port}`)
})
