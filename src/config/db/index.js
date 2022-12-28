const mongoose = require('mongoose');

mongoose.set('strictQuery', true)
async function connect() {
  try {
    await mongoose.connect('mongodb://localhost/f8_education_dev');
    console.log('Connect successfully !');
  } catch (error) {
    console.log('Connect Error');
  }
}
module.exports = { connect };
