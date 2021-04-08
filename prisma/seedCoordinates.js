const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const coordinates = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            6.1248779296875,
            49.616048816070425
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            2.603759765625,
            47.89424772020999
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            -1.40625,
            52.82932091031373
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            -7.646484374999999,
            53.12040528310657
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            17.666015625,
            27.332735136859146
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            34.541015625,
            -6.0094592380595495
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.168945312499996,
            -29.382175075145277
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            17.885742187499996,
            -11.652236404115387
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            84.19921875,
            28.998531814051795
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            149.58984375,
            66.37275500247455
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            67.32421875,
            48.28319289548349
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            139.04296875,
            36.59788913307022
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            105.380859375,
            12.726084296948196
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            131.8359375,
            -23.644524198573677
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            108.720703125,
            36.1733569352216
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            102.83203125,
            47.57652571374621
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            70.224609375,
            39.57182223734374
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            209.53125,
            61.48075950007598
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            225.439453125,
            58.309488840677645
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            248.203125,
            39.639537564366684
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            287.314453125,
            51.23440735163459
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            279.66796875,
            -5.178482088522876
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            297.59765625,
            -30.977609093348676
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            314.912109375,
            -10.660607953624762
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            291.181640625,
            67.23806155909902
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            317.548828125,
            74.6367480410086
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            342.24609375,
            64.73664139557683
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            379.6875,
            79.03843742487174
          ]
        }
      }
    ]
  }
  
  async function main() {
      console.log('Seeding...')
      for (const coor of coordinates) {
          const coordinate = await prisma.coordinate.create({
              data: coor
          })
          console.log(`created coordinate with id: ${coordinate.id}`)
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