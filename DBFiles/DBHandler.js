const config = require('./Config.js');
const sql = require('mssql');

const GetAllClients = async() => {
  try {
    let pool = await sql.connect(config);
    let Clients = pool.request().query('Select * from Clients');
    console.log(Clients)
    return Clients
  }
  catch(error){
    console.log(error)
  }
}

module.exports = {GetAllClients}