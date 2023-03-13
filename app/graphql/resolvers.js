import classController from "../class/controller.js";

const resolvers = {
  Query: {
    async classes() {
      // Resolve the promise and return the result (not a promise)
      return await classController.index();
    },
  },
};

export default resolvers;
