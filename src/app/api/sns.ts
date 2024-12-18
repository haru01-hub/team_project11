import mongoose, { Schema } from 'mongoose'

const snsSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    authorName: { type: String, default: 'Anonymous' },
    likes: { type: Number, default: 0 }, // 좋아요 필드
    likedBy: {
      type: [String], // 이 부분이 있는지 확인
      default: [],
    },
    reviews: [
      {
        userId: { type: String, required: true },
        rating: { type: Number, required: false }, // 선택적 필드로 변경
        review: { type: String, required: false }, // 선택적 필드로 변경
      },
    ],
  },
  {
    timestamps: true, // createdAt, updatedAt 자동 생성
  }
)

const Sns = mongoose.models.Sns || mongoose.model('Sns', snsSchema)
export default Sns
