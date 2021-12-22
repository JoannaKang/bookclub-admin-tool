export interface Member {
  isAdmin: boolean
  name: string | null | undefined
  userId?: string
  email: string | null | undefined
  id?: number
  updateAt?: string
}
