import { defineMongooseModel } from '#nuxt/mongoose'

export const UserModel = defineMongooseModel('User', {
 
}, {
  strict: false,
  timestamps: true,
})