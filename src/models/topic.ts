// //models/topic.ts
// import mongoose, { Schema } from 'mongoose'

// const topicSchema = new Schema(
//   {
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     authorName: { type: String, default: 'Anonymous' },
//     likes: { type: Number, default: 0 }, // 좋아요 필드
//     likedBy: {
//       type: [String], // 이 부분이 있는지 확인
//       default: [],
//     },
//     reviews: [
//       {
//         userId: { type: String, required: true },
//         rating: { type: Number, required: true },
//         review: { type: String, required: true },
//       },
//     ],
//   },
//   {
//     timestamps: true, // createdAt, updatedAt 자동 생성
//   }
// )

// const Topic = mongoose.models.Topic || mongoose.model('Topic', topicSchema)
// export default Topic

//models/topic.ts
import mongoose, { Schema } from 'mongoose'

const topicSchema = new Schema(
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
        rating: { type: Number, required: true },
        review: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true, // createdAt, updatedAt 자동 생성
  }
)

const Topic = mongoose.models.Topic || mongoose.model('Topic', topicSchema)
export default Topic
