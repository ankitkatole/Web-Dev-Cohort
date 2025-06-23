import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, age: string, city: string) {
  const res = await prisma.user.create({
    data: {
      username,
      password,
      age: parseInt(age),
      city
    }
  })
  console.log(res);
}
async function deleteUser(id: number) {
  const res = await prisma.user.delete({
    where: {
      id: id
    }
  })
  console.log(res);
}

async function updateUser(id: number, username: string, password: string, age: string, city: string) {
  const res = await prisma.user.update({
    where: {
      id: id
    },
    data: {
      username,
      password,
      age: parseInt(age),
      city
    }
  })
  console.log(res);
}

async function findUser(id: number) {
  const res = await prisma.user.findUnique({
    where: {
      id: id
    },
    include: {
      todos: true
    }
  })
  console.log(res);
}

// insertUser("john_dave", "securepassword", "30", "New York");
// insertUser("jane_doe", "anotherpassword", "25", "Los Angeles");
// deleteUser(2);
// findUser(3);