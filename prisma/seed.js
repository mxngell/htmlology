const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const ShortUniqueId = require('short-unique-id')
const { randomUUID } = new ShortUniqueId({ length: 7 });

async function main() {
  await prisma.roles.createMany({
    data: [
        { role_id: randomUUID(), name: 'Администратор' },
        { role_id: randomUUID(), name: 'Преподаватель' },
        { role_id: randomUUID(), name: 'Обучающийся' },
    ]
  })
  await prisma.users.createMany({
    data: [
        { user_id: randomUUID(), name: 'Админ', surname: 'Админ', middle_name: 'Админ', email: 'admin', password: '$2b$07$MBjVI8xdj2OQsZ6.JVo/duYaaSO0sKqRFaZnjabozfGH.p73U7l3G', role: 'grsAng2'},
        { user_id: randomUUID(), name: 'Егор', surname: 'Малышенко', middle_name: 'Романович', email: 'egor@mail.ru', password: '$2b$07$ThG6fC38oH3AZIE7YKFYS.u0TTtkQiIJ2k.AlLFRNlrH1YTr2tNdK', role: 'hdhBAIy'},
        { user_id: randomUUID(), name: 'Малик', surname: 'Никаев', middle_name: 'Магамедович', email: 'madmalik@inbox.ru', password: '$2b$07$oUWG3IiYr6.5qhfwyMpz6.Ph9gZN2Id66gk179DGcZUEh2XyFRkfK', role: 'vWve72x'},
    ]
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })