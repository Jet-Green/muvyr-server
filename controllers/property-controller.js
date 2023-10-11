const PropertyService = require('../service/property-service')

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
    }
}