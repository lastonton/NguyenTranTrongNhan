import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './api/api';
import connectDB from './utils/MongooseUtil';

const app = express();
const port = 3000;
//connect database 
connectDB()
// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Routes
app.use('/api', router);

app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
});
