export interface Server {
  id: string
  name: string
  image?: string
}

export interface User {
  id: string
  name: string
  status: UserStatus
  aliases: string[]
}

export type UserStatus = 'Online' | 'Away' | 'Do not disturb' | 'Invisible'

// export enum UserStatus {
//    Online, Away, DoNotDisturb, Invisible
// }
