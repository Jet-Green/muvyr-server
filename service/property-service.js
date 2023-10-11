const PropertyModel = require('../models/property-model')

module.exports = {
    createProperty(newProperty) {
        return PropertyModel.create(newProperty)
    },
    getAllProperty() {
        return PropertyModel.find({})
    },
    updatePropertyImagesUrls(_id, filenames) {
        return PropertyModel.findByIdAndUpdate(_id, { images: filenames })
    }
}