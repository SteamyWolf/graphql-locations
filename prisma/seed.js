const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const locations = [
    {
        name: "Luxembourg",
        description: "A small european country that most people forget about",
        coordinates: {
            create: [
                {
                    longitude: "6.1248779296875",
                    latitude: "49.616048816070425"
                },
                {
                    longitude: "2.603759765625",
                    latitude: "47.89424772020999"
                }
            ]
        }
    },
    {
        name: "Santa Clarita Valley",
        description: "A valley located north of Los Angeles that has Magic Mountain",
        coordinates: {
            create: [
                {
                    longitude: "-1.40625",
                    latitude: "52.82932091031373"
                },
                {
                    longitude: "-7.646484374999999",
                    latitude: "53.12040528310657"
                }
            ]
        }
    }
]


  
  async function main() {
      console.log('Seeding...')
      for (const loc of locations) {
          const location = await prisma.location.create({
              data: loc
          })
          console.log(`created location with id: ${location.id}`)
      }
      console.log('Seeding finished')
  }

  main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })