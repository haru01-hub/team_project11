// //lib/mongodb.ts
// import mongoose from 'mongoose'

// const MONGODB_URI = process.env.MONGODB_URI as string

// // Check for the MONGODB_URI environment variable
// if (!MONGODB_URI) {
//   throw new Error(
//     'Please define the MONGODB_URI environment variable in your .env file.'
//   )
// }

// // Define the Topic schema
// const topicSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   authorName: { type: String, required: true },
//   likes: { type: Number, default: 0 },
//   likedBy: { type: [String], default: [] }, // 좋아요를 누른 사용자 ID를 저장하는 배열
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
// })

// // MongoDB connection function
// export default async function connectMongoDB() {
//   try {
//     if (mongoose.connection.readyState === 0) {
//       await mongoose.connect(MONGODB_URI)
//       console.log('Connected to MongoDB')
//     }
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error)
//     throw error
//   }
// }

// //lib/mongodb.ts

import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable in your .env file.'
  )
}

// Define the Topic schema
const topicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  authorName: { type: String, required: true },
  likes: { type: Number, default: 0 },
  likedBy: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

// Define the Rate schema
const rateSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    authorName: { type: String, default: 'Anonymous' },
    rate: { type: Number, default: 0 },
    likedBy: { type: [String], default: [] },
    reviews: [
      {
        userId: { type: String, required: true },
        rating: { type: Number, required: true },
        review: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
)

// Use existing models if available
const Topic = mongoose.models.Topic || mongoose.model('Topic', topicSchema)
const Rate = mongoose.models.Rate || mongoose.model('Rate', rateSchema)

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

export { Topic, Rate }
