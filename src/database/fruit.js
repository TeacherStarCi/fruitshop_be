const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
// crud
const getFruit = async (id) => {
    const fruit = await prisma.fruit.findUnique({
        where: {
          id: id
        }
      });
      return fruit
}

const getFruits = async (id_part) => {
    const fruits = await prisma.fruit.findMany({
        where: {
          id: id_part
        }
      });
      return fruits
}

const getAllFruits = async () => {
    const fruits = await prisma.fruit.findMany()
    return fruits
}

const createFruit = async (fruit) => {
    await prisma.fruit.create( 
        {data: fruit}
        )
}

const updateFruit = (fruit) => {

}

const deleteFruit = (id) => {

}

module.exports = {
    getAllFruits,
    createFruit
  };