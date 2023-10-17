// ./src/shared/constants/env.ts
export const isServer = typeof window === "undefined"

export const isClient = !isServer

export const { NODE_ENV } = process.env

export const PORT = process.env.PORT || 3000

export const MONGO_URI = "mongodb://localhost:27017/telebot"
