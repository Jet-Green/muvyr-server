const PropertyModel = require('../models/property-model')

module.exports = {
    createProperty(newProperty) {
        return PropertyModel.create(newProperty)
    },
    getAllProperty() {
        return PropertyModel.find({})
    }
}