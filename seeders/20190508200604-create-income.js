'use strict';

let income = [
  {
    name:'Main Job',
    amount:1500.00,
    description:'This is my main sources of income for the month',
    from:'Mcdonald'

  },
  {
    name:'Grandma',
    amount:200.00,
    description:'This is money that my grandmother sent me',
    from:'Grandma Betty'
  },
  {
    name:'Second Job',
    amount:720.00,
    description:'This is my secondary source of income for the month',
    from:'Wendys'
  },
]



module.exports = {
  up: (queryInterface, Sequelize) => {
    //this function seeds the database and i tagged some data to go along with
    let incomes = income.map(function(s) { 
      s.createdAt = new Date(), 
      s.updatedAt = new Date()
      return s 
    })
    
    return queryInterface.bulkInsert('Incomes', incomes, {})
  },

  down: (queryInterface, Sequelize) => {
        //this undos the seeded database

      return queryInterface.bulkDelete('Incomes', null, {});

  }
};