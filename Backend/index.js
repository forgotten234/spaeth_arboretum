const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send(
        '<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Strict//EN' + 
        '"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">' +
        '<html xmlns="http://www.w3.org/1999/xhtml">' +
        '<head>' +
        '<meta http-equiv="content-type" content="text/html; charset=utf-8" />' +
        '<h2>Hi there!!</h2>'  
    )
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`listining ${port}`))