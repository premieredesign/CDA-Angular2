module.exports = {
    dev: {
        port: process.env.port || 9000,
        db: process.env.DB_Link || 'mongodb://cdaowner:M4Di5on*@ds115071.mlab.com:15071/cdarest'
    },
    prod: {

    }
}