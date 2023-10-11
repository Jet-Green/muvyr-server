const ProductService = require('../service/product-service')

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
    async createProduct(req, res, next) {
        try {
            return res.json(await ProductService.createProduct(req.body))
        } catch (error) {
            next(error)
        }
    }
}