 /**
 * Simple microservice example , all in only one .js file without servers
 * Ejemplo sencillo de microservicios, todo en un único archivo .js sin servidores
 * 
 * Add and multiply two given numbers - Suma y multiplica dos números dados.
 * 
 */ 
var seneca = require('seneca')()

/** MICROSERVICES **/
// Service that adds 2 numbers
// Servicio que suma 2 números
seneca.add({role: 'math', oper: 'sum'}, function (msg, respond) {
  var resultSum = msg.left + msg.right
  respond(null, {answer: resultSum})
})

// Service that multiplies 2 numbers
// Servicio que multiplica 2 números
seneca.add({role: 'math', oper: 'product'}, function (msg, respond) {
  var resultProd = msg.left * msg.right
  respond(null, {answer: resultProd})
})



/** CALLINGS TO MICROSERVICES **/
// Calling to service that adds 2 numbers...
// Llamada al servcio que suma 2 números...
seneca.act({role: 'math', oper: 'sum', left: 4, right: 2}, function (err, result) {
  if (err) return console.error(err)
  console.log(result)
})

// Calling to service that multiplies 2 numbers...
// Llamada al servcio que multiplica 2 números...
seneca.act({role: 'math', oper: 'product', left: 5, right: 7.3}, function (err, result) {
  if (err) return console.error(err)
  console.log(result)
})
