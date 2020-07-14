const ColorThief = require("colorthief");
// const img = resolve(process.cwd(), "rainbow.png");
module.exports = (req, res) => {
  ColorThief.getColor(req.body.image)
    .then((color) => {
      res.send(color);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};
