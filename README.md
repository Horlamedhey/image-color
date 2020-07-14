# Extract dominant colors from an image

## Get dominant color
`axios.post('image-color-gray.vercel.app/api/getcolor', {image: 'link/to/your/image'}).then(color => {console.log(color) //[xxx, xxx, xxx]});`

## Get dominant palette
`axios.post('image-color-gray.vercel.app/api/getpalette', {image: 'link/to/your/image'}).then(palette => {console.log(palette) //[[xxx, xxx, xxx], [xxx, xxx, xxx], [xxx, xxx, xxx], ...]});`

#### ***NB: It also accepts base64 images.***