const PropertyService = require('../service/property-service')

let EasyYandexS3 = require('easy-yandex-s3').default;

// Указываем аутентификацию в Yandex Object Storage
let s3 = new EasyYandexS3({
    auth: {
        accessKeyId: process.env.YC_KEY_ID,
        secretAccessKey: process.env.YC_SECRET,
    },
    Bucket: process.env.YC_BUCKET_NAME, // Название бакета
    debug: false, // Дебаг в консоли
});

module.exports = {
    async createProperty(req, res, next) {
        try {
            return res.json(await PropertyService.createProperty(req.body))
        } catch (error) {
            next(error)
        }
    },
    async getAllProperty(req, res, next) {
        try {
            return res.json(await PropertyService.getAllProperty())
        } catch (error) {
            next(error)
        }
    },
    async uploadPropertyImages(req, res, next) {
        try {
            let _id = req.files[0]?.originalname.split('_')[0]
            let filenames = []
            let buffers = []
            for (let file of req.files) {
                buffers.push({ buffer: file.buffer, name: file.originalname, });    // Буфер загруженного файла
            }

            if (buffers.length) {
                let uploadResult = await s3.Upload(buffers, '/goroda-img' + process.env.IMG_PLACE);

                for (let upl of uploadResult) {
                    filenames.push(upl.Location)
                }
            }
            if (filenames.length)
                await PropertyService.updatePropertyImagesUrls(_id, filenames)

            res.status(200).send('Ok')
        } catch (error) {
            next(error)
        }
    }
}