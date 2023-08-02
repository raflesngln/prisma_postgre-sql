import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function createNewUser() {
  const newUser = await prisma.user.create({
    data: {
      name: 'Rafles',
      email: 'Rafles@gmail.com', // Corrected the email value to lowercase
      phone: '0456789',
      password:'123456789'
    },
  });
  console.log('Created new user:', newUser);
}

createNewUser().catch((error) => {
  console.error('Error creating user:', error);
});
