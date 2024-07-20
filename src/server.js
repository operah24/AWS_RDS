const app = require('./app');
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const connection = mysql.createConnection({
  
  host     : process.env.RDS_HOST,
  user     : process.env.RDS_USER,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});

connection.connect((err) => {
if (err) {
  console.error('Error connecting to the database:', err.stack);
  return;
}
console.log('Connected to the database.');
});
