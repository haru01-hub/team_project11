// models/sns.ts
import mongoose, { Schema } from 'mongoose'

const snsSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    authorName: { type: String, default: 'Anonymous' },
    likes: { type: Number, default: 0 },
    likedBy: { type: [String], default: [] },
    reviews: [
      {
        userId: { type: String, required: true },
        rating: { type: Number, required: false },
        review: { type: String, required: false },
        replies: [
          {
            userId: { type: String, required: true },
            reply: { type: String, required: true },
            createdAt: { type: Date, default: Date.now },
          },
        ],
      },
    ],
  },
  { timestamps: true }
)

const Sns = mongoose.models.Sns || mongoose.model('Sns', snsSchema)
export default Sns
