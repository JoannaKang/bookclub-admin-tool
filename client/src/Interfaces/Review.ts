export interface IReview {
  memberId?: number
  meetingId: number
  title: string
  author: string
  genre: string
  review: string
  rate: number
  createdAt?: string
  updatedAt?: string
  id?: number
}
