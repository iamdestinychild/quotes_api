const {quotes} = require('../data.json')

const getQuote = async (req, res)=>{
   
    const quotelength = quotes.length

    const randomQuote = Math.floor((Math.random() * quotelength) - 1)


    const quote = quotes[randomQuote]


    res.status(200).json({quote})
}

module.exports = {getQuote}