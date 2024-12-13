import { NextRequest, NextResponse } from 'next/server'
import connectMongoDB from 'src/lib/mongodb'
import Log from 'src/models/log'
export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()
    await connectMongoDB()
    await Log.create({ email })
    return NextResponse.json({ message: 'Login event logged' }, { status: 201 })
  } catch (error) {
    console.error('Error logging login event:', error)
  }
}
