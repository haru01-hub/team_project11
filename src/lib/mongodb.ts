import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string

// Check for the MONGODB_URI environment variable
if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable in your .env file.'
  )
}

// Define the Topic schema
const topicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  likes: { type: Number, default: 0 },
  likedBy: { type: [String], default: [] }, // 좋아요를 누른 사용자 ID를 저장하는 배열
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

// Use an existing model if available to prevent model re-registration

//const Topic = mongoose.models.Topic || mongoose.model('Topic', topicSchema)

// MongoDB connection function
export default async function connectMongoDB() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGODB_URI)
      console.log('Connected to MongoDB')
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw error
  }
}
// const Topic = mongoose.models.Topic || mongoose.model('Topic', topicSchema)
// // Export the Topic model
// export { Topic }
