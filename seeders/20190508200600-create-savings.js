'use strict';
let saving = [
   {
      name: 'First Deposit',
      amount:55.00,
      description: 'saved money from work at wendys'
   },
   {
      name:'Second Deposit',
      amount:72.00,
      description: 'saved money from mcdonalds'

   },
   {
      name:'Third Deposit',
      amount:23.00,
      description: 'saved money from grandma'

   }
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    //this function seeds the database and i tagged some data to go along with
    var savings = saving.map(function(s) { 
      s.createdAt = new Date(), 
      s.updatedAt = new Date()
      return s 
    })
    
    return queryInterface.bulkInsert('Savings', savings, {})
  },

  down: (queryInterface, Sequelize) => {
    //this undos the seeded database
      return queryInterface.bulkDelete('Savings', null, {});

  }
};