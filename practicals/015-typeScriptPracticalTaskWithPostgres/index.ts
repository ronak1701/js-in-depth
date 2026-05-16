import express from 'express'
import createCustomersTable from './src/data/createCustomerData'
import  userRoutes  from './src/routes/userRoutes'

const app = express()

app.use(express.json())

createCustomersTable()

app.use('/api/user', userRoutes)

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})