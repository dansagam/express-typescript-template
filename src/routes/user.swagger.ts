const getAuthUsersSwagger = {
  "api/v1/auth": {
    get: {
      summary: "Get all the list of application users",
      description: "Get all the list of available user of the application",
      tags: ["bg app api"],
      responses: {
        "200": {
          description: "OK",
          content: {
            "application/json": {
              schema: {
                $ref: "#/definittions/Users",
              },
            },
          },
        },
      },
    },
  },
};

const getAuthUserSchema = {
  Incident: {
    type: "object",
    properties: {
      _id: {
        type: "String",
        example: "037c28efde11e8d86e2233738f0c20be",
      },
      _rev: {
        type: "String",
        example: "1-2e66ec5df0bb2bc18d8b30084bdc4475",
      },
      timestamp: {
        type: "Timestamp",
        example: 1597322893635,
      },
      lat: {
        type: "Number",
        example: 37.33233141,
      },
      lon: {
        type: "Number",
        example: -122.0312186,
      },
      description: {
        type: "String",
        example: "Police use tear gas and riot rounds against protestors",
      },
      city: {
        type: "String",
        example: "Long Beach",
      },
      country: {
        type: "String",
        example: "United States",
      },
      dateTime: {
        type: "String",
        example: "6/1/2020 16:12",
      },
      state: {
        type: "String",
        example: "California",
      },
      url1: {
        type: "String",
        example: "https://www.tiktok.com/@scottmbark/video/6833632749052628230",
      },
      url2: {
        type: "String",
        example: "https://www.tiktok.com/@scottmbark/video/6833477841808657669",
      },
      badge: {
        type: "String",
        example: "12346572",
      },
      icon: {
        type: "String",
        example: "/img/bullseye.png",
      },
      type: {
        type: "String",
        example: 37.33233141,
      },
      incidentVideos: {
        type: "array",
        items: {
          type: "String",
          example: [
            "incidentVideo-1597397050965",
            "incidentVideo-15973970509652",
            "incidentVideo-15973970509653",
          ],
        },
      },
    },
  },
};

export const authSwagger = {
  ...getAuthUsersSwagger,
};

export const authSchema = {
  ...getAuthUserSchema,
};
