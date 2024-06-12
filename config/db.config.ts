import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/test';
  }
  await mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  console.log('Connected to MongoDB Successfully');
} catch (error) {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1)
}

export default connectDB