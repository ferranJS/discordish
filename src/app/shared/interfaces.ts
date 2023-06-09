export interface Server {
  id: string
  name: string
  image?: string
}
export interface User {
  id: string
  name: string
  status: UserStatus
}
export type UserStatus = "Online" | "Away" | "Do not disturb" | "Invisible"

export interface Alias {
  userId: User["id"]
  serverId: Server["id"]
  name: string
}

export interface Conversation {
  id: string
  // could have more properties like image, name, etc.
}

export interface ConversationUser {
  conversationId: Conversation["id"]
  userId: User["id"]
  // could have more properties like image, name, etc.
}

export interface Message {
  id: string
  conversationUserId: ConversationUser["conversationId"]
  content: string
  date: Date
}
