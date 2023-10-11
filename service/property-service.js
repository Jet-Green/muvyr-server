const PropertyModel = require('../models/property-model')

const { sendMail } = require('../middleware/mailer')
const propertyModel = require('../models/property-model')

module.exports = {
    createProperty(newProperty) {
        return PropertyModel.create(newProperty)
    },
    getAllProperty() {
        return PropertyModel.find({})
    },
    updatePropertyImagesUrls(_id, filenames) {
        return PropertyModel.findByIdAndUpdate(_id, { images: filenames })
    },
    bookProperty({ bookForm, property }) {
        sendMail(`
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Document</title>
                </head>
                <body>
                    <p>Заказан домик: ${property.title} мест: ${property.peopleCount}</p>
                    <p>
                        Заказчик: <br/ > Телефон
                        <a href="tel:${bookForm.phone}">${bookForm.phone}</a><br />
                        Email: <a href="mailto:${bookForm.email}">${bookForm.email}</a
                        ><br />
                        Количество человек: ${bookForm.peopleCount}<br />
                    </p>
                </body>
            </html>
            `, ['grishadzyin@gmail.com'], 'Заказан домик')
        return propertyModel.findByIdAndUpdate(property._id, { bookedBy: bookForm })
    }
}