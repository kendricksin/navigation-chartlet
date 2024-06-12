import express from 'express';
import connectDB from './config/db.config.ts';
import chartletRoutes from './routes/chartlet.routes.ts';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api/chartlets', chartletRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
})