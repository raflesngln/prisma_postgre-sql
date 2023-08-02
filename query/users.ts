// const { PrismaClient } = require('@prisma/client');
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();

async function createNewUser() {
  const newUser = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'johndoe@example.com',
    },
  });
  console.log('Created new user:', newUser);
}

createNewUser().catch((error) => {
  console.error('Error creating user:', error);
});
