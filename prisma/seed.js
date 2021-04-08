const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const locations = [
    {
        name: "Luxembourg",
        description: "A small european country that most people forget about",
        coordinates: {
            create: [
                {
                    longitude: "6.117663",
                    latitude: "49.642787"
                },
            ]
        }
    },
    {
        name: "Santa Clarita Valley",
        description: "A valley located north of Los Angeles that has Magic Mountain",
        coordinates: {
            create: [
                {
                    longitude: "-118.622177",
                    latitude: "34.484244"
                },
                {
                    longitude: "-118.487640",
                    latitude: "34.404434"
                }
            ]
        }
    },
    {
      name: "France",
      description: "European country that that eats snails",
      coordinates: {
          create: [
              {
                  longitude: "3.195113",
                  latitude: "46.804799"
              },
              {
                  longitude: "3.806491",
                  latitude: "46.284795"
              },
              {
                  longitude: "3.438529",
                  latitude: "48.818752"
              }
          ]
      }
  },
  {
    name: "Cambodia",
    description: "A South Eastern Asian country known for its amazing ancient temples",
    coordinates: {
        create: [
            {
                longitude: "104.891729",
                latitude: "11.807676"
            },
            {
                longitude: "103.992257",
                latitude: "12.881029"
            },
        ]
      }
  },
  {
    name: "Kathmandu",
    description: "The main city of Nepal located near the Himalayan Mountains",
    coordinates: {
        create: [
            {
                longitude: "85.324676",
                latitude: "27.699145"
            },
        ]
      }
  },
  {
    name: "Mt. Everest",
    description: "The main city of Nepal located near the Himalayan Mountains",
    coordinates: {
        create: [
            {
                longitude: "86.924759",
                latitude: "27.987912"
            },
            {
                longitude: "86.730262",
                latitude: "27.690085"
            },
        ]
      }
  },
  {
    name: "Mother Russia",
    description: "The world's largest country with an interesting past... and present",
    coordinates: {
        create: [
            {
                longitude: "174.915651",
                latitude: "67.247958"
            },
            {
                longitude: "37.910326",
                latitude: "55.541904"
            },
            {
                longitude: "96.200840",
                latitude: "75.736706"
            },
        ]
      }
  },
  {
    name: "Svalbard",
    description: "A frozen and forgotten landmass far north of Scandanavia",
    coordinates: {
        create: [
            {
                longitude: "15.638146",
                latitude: "78.219702"
            },
            {
                longitude: "15.340171",
                latitude: "79.271018"
            },
        ]
      }
  },
  {
    name: "Piura",
    description: "A peruvian desert wasteland home to the nicest people on Earth. This API creator spent 2 years living here.",
    coordinates: {
        create: [
            {
                longitude: "-80.642385",
                latitude: "-5.205064"
            },
            {
                longitude: "-80.338535",
                latitude: "-4.926781"
            },
        ]
      }
  },
  {
    name: "Talkeetna",
    description: "Alaskan village close to Denali with a cat for a mayor. Since deceased.",
    coordinates: {
        create: [
            {
                longitude: "-150.107440",
                latitude: "62.319828"
            },
        ]
      }
  },
  {
    name: "Tokyo",
    description: "アニメ愛好家の首都",
    coordinates: {
        create: [
            {
                longitude: "139.511732",
                latitude: "35.579639"
            },
            {
              longitude: "139.848143",
              latitude: "35.820252"
            }
        ]
      }
  },
  {
    name: "Papa New Guinea",
    description: "A strange tropical country where tribes still remain uncontacted",
    coordinates: {
        create: [
            {
                longitude: "142.543980",
                latitude: "-7.755324"
            },
            {
              longitude: "143.395344",
              latitude: "-5.659095"
            }
        ]
      }
  },
  {
    name: "French Polynesia",
    description: "A French owned set of islands located in the southern pacific",
    coordinates: {
        create: [
            {
                longitude: "-149.469640",
                latitude: "-17.640681"
            },
        ]
      }
  },
  {
    name: "Antarctica",
    description: "A large frozen continent where penguins live",
    coordinates: {
        create: [
            {
                longitude: "38.510367",
                latitude: "-77.605229"
            },
            {
                longitude: "166.687446",
                latitude: "-77.844963"
            },
            {
                longitude: "-58.470118",
                latitude: "-62.091752"
            },
        ]
      }
  },
  {
    name: "Alert",
    description: "The northenmost populated town in the entire world. Its name makes sense",
    coordinates: {
        create: [
            {
                longitude: "-62.358266",
                latitude: "82.501133"
            },
        ]
      }
  },
  {
    name: "Luxor",
    description: "An ancient city in Egypt where pharoes sat on their thrones",
    coordinates: {
        create: [
            {
                longitude: "32.648628",
                latitude: "25.692079"
            },
        ]
      }
  },
  {
    name: "Jerusalem",
    description: "A holy city where Jesus spent much of his time teaching",
    coordinates: {
        create: [
            {
                longitude: "35.232069",
                latitude: "31.778629"
            },
            {
                longitude: "35.239653",
                latitude: "31.779589"
            },
        ]
      }
  },
  {
    name: "Lesotho",
    description: "A country located within South Africa within South Africa within a valley",
    coordinates: {
        create: [
            {
                longitude: "28.462954",
                latitude: "-29.687540"
            },
        ]
      }
  },
  {
    name: "Chad",
    description: "An African country with a common name for a name. Part desert, past jungle",
    coordinates: {
        create: [
            {
                longitude: "19.255471",
                latitude: "14.432408"
            },
            {
                longitude: "17.931088",
                latitude: "10.492697"
            },
        ]
      }
  },
  {
    name: "Ulaanbaatar",
    description: "The capital of Mongolia where the Khan rulers sat upon their thrones",
    coordinates: {
        create: [
            {
                longitude: "106.938488",
                latitude: "47.921402"
            },
        ]
      }
  },
  {
    name: "Lake Baikal",
    description: "Researchers say that this russian lake is the deepest in the world",
    coordinates: {
        create: [
            {
                longitude: "108.004691",
                latitude: "53.190205"
            },
        ]
      }
  },
  {
    name: "Singapore",
    description: "A small nation in southeast asia with the highest amount of millionaires per capita",
    coordinates: {
        create: [
            {
                longitude: "103.685056",
                latitude: "1.387918"
            },
        ]
      }
  },
  {
    name: "Australia",
    description: "A continent and a country where kangaroos run wild",
    coordinates: {
        create: [
            {
                longitude: "125.91894744646198",
                latitude: "-30.89894119482"
            },
            {
                longitude: "145.1857187684755",
                latitude: "-37.83963724250374"
            },
            {
                longitude: "142.4853921287048",
                latitude: "-13.013852872873978"
            },
            {
                longitude: "147.84029196518622",
                latitude: "-42.87222575489737"
            }, 
        ]
      }
  },
  {
    name: "Chatham Island",
    description: "A small island east of New Zealand and the second easternmost settlement of New Zealand",
    coordinates: {
        create: [
            {
                longitude: "-176.3722603683561",
                latitude: "-44.041692564822874"
            }
        ]
      }
  },
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