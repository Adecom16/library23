import app from './config/app'
import colors from 'colors'
import connectDB from './config/db'
import {seedData} from './config/seeds/seeder.seed'

const connect = async (): Promise<void> => {

    // connect to DB
    await connectDB();

    // seed data
    await seedData();

    
} 
// function call
connect();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(colors.yellow.bold(`server running ${process.env.NODE_ENV} mode on port ${PORT}`))
})

// handle unhandled Rejection
process.on('unhandleRejection', (err: any, Promise) => {
    console.log(colors.red.bold(`err: ${err.message}`));
    server.close(() => process.exit(1));
})