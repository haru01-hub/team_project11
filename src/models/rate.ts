//models/rate.ts
import mongoose, { Schema } from 'mongoose'

const rateSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    authorName: { type: String, default: 'Anonymous' },
    rate: { type: Number, default: 0 }, // 좋아요 필드
    likedBy: {
      type: [String], // 이 부분이 있는지 확인
      default: [],
    },
    reviews: [
      {
        userId: { type: String, required: true },
        rating: { type: Number, required: true },
        review: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true, // createdAt, updatedAt 자동 생성
  }
)

const Rate = mongoose.models.Rate || mongoose.model('Rate', rateSchema, 'rate')
export default Rate
