const Jimp = require('jimp')

Jimp.read('tulio.jpg', (err, image) => {
  image
    // .resize(100, 100)
    .cover(50, 100)
    .greyscale()
    // .contrast(0.5)
    // .blur(10)
    .write('tulio-50x100-greyscale.jpg')
})