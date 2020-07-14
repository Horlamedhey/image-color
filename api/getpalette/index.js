const ColorThief = require("colorthief");
module.exports = (req, res) => {
  ColorThief.getPalette(req.body.image, 5)
    .then((palette) => {
      res.send(palette);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};
