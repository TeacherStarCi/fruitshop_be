const express = require('express');
const app = express();
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const { getAllFruits, createFruit } = require('./database/fruit');
const prisma = new PrismaClient()

// Định nghĩa route cho trang chủ
app.get('/', (req, res) => {
  res.send('Xin chào, đây là trang chủ!');
});

app.use(cors({
  origin: '*'
}));

app.route('/fruit')
  .get(async (req, res) => {
    const fruits = await getAllFruits()
    // Lấy danh sách người dùng từ cơ sở dữ liệu và trả về
    res.send(fruits);
  }).put(async (req, res) => {
    const fruit = req.body
    await createFruit(fruit)
    // Lấy danh sách người dùng từ cơ sở dữ liệu và trả về
  }

  );

app.get('/get_fruit', async (req, res) => {
    const fruits = await prisma.fruit.findMany()
    res.send(fruits);
  });

  app.get('/set_fruit', async (req, res) => {
    res.send(fruits);
  });

// Khởi động server
app.listen(3001, () => {
  console.log('Ứng dụng đang chạy trên http://localhost:3001');
});
// server front end đang chạy trên 3000, thì ta để backend chạy trên 1 server khác, thường là 3001
