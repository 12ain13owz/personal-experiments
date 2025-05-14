const express = require('express')
const app = express()
const port = 3000
const line = require('@line/bot-sdk')

// กำหนดค่า configuration สำหรับ LINE Bot
const lineConfig = {
  channelSecret: process.env.CHANNEL_SECRET, // Token สำหรับการเชื่อมต่อกับ LINE
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN, // Secret สำหรับการยืนยัน webhook
}

// สร้าง LINE Messaging API Client
const client = new line.messagingApi.MessagingApiClient(lineConfig)

// Webhook endpoint สำหรับรับ event จาก LINE
app.post('/webhook', line.middleware(lineConfig), (req, res) => {
  // Log ข้อมูลทั้งหมดที่ได้รับจาก webhook
  console.log('Received webhook:', JSON.stringify(req.body, null, 2))

  // ประมวลผลทุก event ที่ได้รับ
  Promise.all(req.body.events.map(handleEvent))
    .then((result) => {
      console.log('Event processing result:', result)
      res.json(result)
    })
    .catch((err) => {
      console.error('Error processing events:', err)
      res.status(500).end()
    })
})

// ฟังก์ชันสำหรับจัดการ event ต่างๆ จาก LINE
function handleEvent(event) {
  // Log ข้อมูล event ทั้งหมด
  console.log('Processing event:', JSON.stringify(event, null, 2))

  // ตรวจสอบและ log source ของ event
  if (event.source) {
    console.log('Source type:', event.source.type)
    if (event.source.userId) console.log('User ID:', event.source.userId)
    if (event.source.groupId) console.log('Group ID:', event.source.groupId)
    if (event.source.roomId) console.log('Room ID:', event.source.roomId)
  }

  // จัดการตามประเภทของ event
  switch (event.type) {
    case 'message':
      return handleMessageEvent(event)
    case 'follow':
      return handleFollowEvent(event)
    case 'unfollow':
      return handleUnfollowEvent(event)
    case 'join':
      return handleJoinEvent(event)
    case 'leave':
      return handleLeaveEvent(event)
    default:
      console.log('Unhandled event type:', event.type)
      return Promise.resolve(null)
  }
}

// ฟังก์ชันจัดการ event ประเภท message
function handleMessageEvent(event) {
  if (event.message.type !== 'text') {
    console.log('Non-text message received:', event.message.type)
    return client.replyMessage(event.replyToken, {
      type: 'text',
      text: `Received a ${event.message.type} message`,
    })
  }

  console.log('Text message:', event.message.text)
  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: `You said: ${event.message.text}`,
  })
}

// ฟังก์ชันจัดการ event เมื่อผู้ใช้เพิ่มบอทเป็นเพื่อน
function handleFollowEvent(event) {
  console.log('Follow event received')
  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: 'Thanks for following me!',
  })
}

// ฟังก์ชันจัดการ event เมื่อผู้ใช้เลิกเป็นเพื่อน
function handleUnfollowEvent(event) {
  console.log('Unfollow event received')
  return Promise.resolve(null) // ไม่สามารถ reply ได้เพราะผู้ใช้เลิกติดตามแล้ว
}

// ฟังก์ชันจัดการ event เมื่อบอทถูกเพิ่มเข้า group หรือ room
function handleJoinEvent(event) {
  console.log('Join event received')
  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: 'Thanks for adding me to the group!',
  })
}

// ฟังก์ชันจัดการ event เมื่อบอทถูกนำออกจาก group หรือ room
function handleLeaveEvent(event) {
  console.log('Leave event received')
  return Promise.resolve(null) // ไม่สามารถ reply ได้เพราะถูกนำออกแล้ว
}

// เริ่มเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`LINE bot listening on port ${port}`)
})
