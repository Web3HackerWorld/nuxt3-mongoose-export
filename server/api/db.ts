import { Parser } from '@json2csv/plainjs'
import fs from 'fs'
import path from 'path'
export default defineEventHandler(async (event) => {
  try {
    const query = {
        mobile: { $exists: true },
        $expr: { $eq: [{ $strLenCP: '$mobile' }, 11] }
    }
      
    const count = await UserModel.count(query) 
    const data = await UserModel.find(query)
      .select('_id, mobile')
      // .limit(20)
      .lean()
    console.log('====> data :', data)

    try {
      const parser = new Parser();
      const csv = parser.parse(data);
      const filePath = 'data.csv'
      fs.writeFile(filePath, csv, err => {
        console.log('====> cb err :', err)
      })
    } catch (err) {
      console.log('====> err :', err)
    }

    return {count}
  }
  catch (error) {
    return error
  }
})
