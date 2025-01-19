const path = require("path")

module.exports= path.dirname(require.main.filename)

//path.dirname(process.mainModule.filename)  -- old one which has been depricated 