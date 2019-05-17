'use strict';
let bill = [
   {
      name: 'Electricity',
      amount:65.00,
      description:'This is the electricity bill from General Electric'
   },
   {
      name: 'Medical',
      amount:120.00,
      description:'This is is my medical bill for my broken leg'

   },
   {
      name: 'Subscriptions',
      amount:23.50,
      description:'This is my netflix and hulu bill'

   },
   {
      name: 'Prescription',
      amount:470.20,
      description:'This is for my opiod addiction'

   }
]


module.exports = {
  up: (queryInterface, Sequelize) => {
    //this function seeds the database i added some data to be tagged on
    let bills = bill.map(function(s) {
      s.paid = false  
      s.createdAt = new Date(), 
      s.updatedAt = new Date()
      return s 
    })
    
    return queryInterface.bulkInsert('Bills', bills, {})
  },

  down: (queryInterface, Sequelize) => {
    //this function undos the seeded data
      return queryInterface.bulkDelete('Bills', null, {});

  }
};