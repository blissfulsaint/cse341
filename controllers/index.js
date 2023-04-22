const greatGirl = (req, res, next) => {
    res.json('Nani')
}

const greatBoy = (req, res, next) => {
    res.json('Guapo')
}

module.exports = {greatGirl, greatBoy};