const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'Informe o nome do Crédito!']},
  value: {type: Number, min:0, required: [true, 'Informe o valor do Crédito!']}
})

const debtSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'Informe o nome do Débito!']},
  value: {type: Number, min:0, required: [true, 'Informe o valor do Débito!']},
  status: {type: String, required: false, uppercase: [true, 'Informe o status do Débito!'],
    enum:['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const billingCycleSchema = new mongoose.Schema({
  name:{type: String, required: [true, 'Informe o nome do Cicle de Pagamento!']},
  month: {type: Number, min: [1, 'Mes Ciclo de pagamento deve ser no minimo 1 e maximo 12!'], max: [12, 'Mes Ciclo de pagamento deve ser no minimo 1 e maximo 12!'], required: [true, 'Informe o mes do Cicle de Pagamento!']},
  year: {type: Number, min:[1970, 'Ano Ciclo de pagamento deve ser no minimo 1970 e maximo 2100!'], max: [2100, 'Ano Ciclo de pagamento deve ser no minimo 1970 e maximo 2100!'], required: [true, 'Informe o ano do Cicle de Pagamento!']},
  credits:[creditSchema],
  debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)
