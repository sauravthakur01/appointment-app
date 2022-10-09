const Sequelize = require('sequelize') ;
const sequelize = new Sequelize('booking','root','sp.191273',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = sequelize ;