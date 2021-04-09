const {
  intArg,
  makeSchema,
  nonNull,
  objectType,
  stringArg,
  inputObjectType,
  arg,
  asNexusMethod,
  enumType,
} = require('nexus')
const { GraphQLDateTime } = require('graphql-iso-date')

const DateTime = asNexusMethod(GraphQLDateTime, 'date')

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('allLocations', {
      type: 'Location',
      resolve: (_parent, _args, context) => {
        return context.prisma.location.findMany()
      },
    })

    t.nonNull.list.nonNull.field('allCoordinates', {
      type: 'Coordinate',
      resolve: (_parent, _args, context) => {
        return context.prisma.coordinate.findMany()
      },
    })

    t.nullable.field('coordinateById', {
      type: 'Coordinate',
      args: {
        id: intArg(),
      },
      resolve: (_parent, args, context) => {
        return context.prisma.coordinate.findUnique({
          where: { id: args.id || undefined },
        })
      },
    })

    // t.nonNull.list.nonNull.field('feed', {
    //   type: 'Post',
    //   args: {
    //     searchString: stringArg(),
    //     skip: intArg(),
    //     take: intArg(),
    //     orderBy: arg({
    //       type: 'PostOrderByUpdatedAtInput',
    //     }),
    //   },
    //   resolve: (_parent, args, context) => {
    //     const or = args.searchString
    //       ? {
    //           OR: [
    //             { title: { contains: args.searchString } },
    //             { content: { contains: args.searchString } },
    //           ],
    //         }
    //       : {}

    //     return context.prisma.post.findMany({
    //       where: {
    //         published: true,
    //         ...or,
    //       },
    //       take: args.take || undefined,
    //       skip: args.skip || undefined,
    //       orderBy: args.orderBy || undefined,
    //     })
    //   },
    // })

    // t.list.field('draftsByUser', {
    //   type: 'Post',
    //   args: {
    //     userUniqueInput: nonNull(
    //       arg({
    //         type: 'UserUniqueInput',
    //       }),
    //     ),
    //   },
    //   resolve: (_parent, args, context) => {
    //     return context.prisma.user
    //       .findUnique({
    //         where: {
    //           id: args.userUniqueInput.id || undefined,
    //           email: args.userUniqueInput.email || undefined,
    //         },
    //       })
    //       .posts({
    //         where: {
    //           published: false,
    //         },
    //       })
    //   },
    // })
  },
})

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.nonNull.field('createLocation', {
      type: 'Location',
      args: {
        data: nonNull(
          arg({
            type: 'LocationCreateInput',
          }),
        ),
      },
      resolve: (_, args, context) => {
        return context.prisma.location.create({
          data: {
            name: args.data.name,
            description: args.data.description,
          },
        })
      },
    })

    t.field('createCoordinate', {
      type: 'Coordinate',
      args: {
        data: nonNull(
          arg({
            type: 'CoordinateCreateInput',
          }),
        ),
        locationName: nonNull(stringArg()),
      },
      resolve: (_, args, context) => {
        return context.prisma.coordinate.create({
          data: {
            longitude: args.data.longitude,
            latitude: args.data.latitude,
            location: {
              connect: { name: args.locationName },
            },
          },
        })
      },
    })

    // t.field('togglePublishPost', {
    //   type: 'Post',
    //   args: {
    //     id: nonNull(intArg()),
    //   },
    //   resolve: async (_, args, context) => {
    //     const post = await context.prisma.post.findUnique({
    //       where: { id: args.id || undefined },
    //       select: {
    //         published: true,
    //       },
    //     })

    //     if (!post) {
    //       throw new Error(
    //         `Post with ID ${args.id} does not exist in the database.`,
    //       )
    //     }

    //     return context.prisma.post.update({
    //       where: { id: args.id || undefined },
    //       data: { published: !post.published },
    //     })
    //   },
    // })

    // t.field('incrementPostViewCount', {
    //   type: 'Post',
    //   args: {
    //     id: nonNull(intArg()),
    //   },
    //   resolve: (_, args, context) => {
    //     return context.prisma.post.update({
    //       where: { id: args.id || undefined },
    //       data: {
    //         viewCount: {
    //           increment: 1,
    //         },
    //       },
    //     })
    //   },
    // })

    // t.field('deletePost', {
    //   type: 'Post',
    //   args: {
    //     id: nonNull(intArg()),
    //   },
    //   resolve: (_, args, context) => {
    //     return context.prisma.post.delete({
    //       where: { id: args.id },
    //     })
    //   },
    // })
  },
})

const Location = objectType({
  name: 'Location',
  definition(t) {
    t.nonNull.string('name')
    t.nonNull.int('id')
    t.nonNull.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('updatedAt', { type: 'DateTime' })
    t.string('description')
    t.nonNull.list.nonNull.field('coordinates', {
      type: 'Coordinate',
      resolve: (parent, _, context) => {
        return context.prisma.location
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .coordinates()
      },
    })
  },
})

const Coordinate = objectType({
  name: 'Coordinate',
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.string('longitude')
    t.nonNull.string('latitude')
    t.field('location', {
      type: 'Location',
      resolve: (parent, _, context) => {
        return context.prisma.coordinate
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .location()
      },
    })
  },
})

// const SortOrder = enumType({
//   name: 'SortOrder',
//   members: ['asc', 'desc'],
// })

// const PostOrderByUpdatedAtInput = inputObjectType({
//   name: 'PostOrderByUpdatedAtInput',
//   definition(t) {
//     t.nonNull.field('updatedAt', { type: 'SortOrder' })
//   },
// })

// const UserUniqueInput = inputObjectType({
//   name: 'UserUniqueInput',
//   definition(t) {
//     t.int('id')
//     t.string('email')
//   },
// })

const CoordinateCreateInput = inputObjectType({
  name: 'CoordinateCreateInput',
  definition(t) {
    t.nonNull.string('longitude')
    t.nonNull.string('latitude')
  },
})

const LocationCreateInput = inputObjectType({
  name: 'LocationCreateInput',
  definition(t) {
    t.nonNull.string('name')
    t.string('description')
  },
})

const schema = makeSchema({
  types: [
    Query,
    Mutation,
    Location,
    Coordinate,
    // UserUniqueInput,
    LocationCreateInput,
    CoordinateCreateInput,
    // SortOrder,
    // PostOrderByUpdatedAtInput,
    DateTime,
  ],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
})

module.exports = {
  schema: schema,
}
