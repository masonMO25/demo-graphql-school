import classController from "../class/controller.js";
import professorController from "../professor/controller.js";
import schoolController from "../school/controller.js";

const resolvers = {
  Query: {
    async classes() {
      // Resolve the promise and return the result (not a promise)
      return await classController.index();
    },
    async professors() {
      return await professorController.index();
    },
    async schools() {
      return await schoolController.index();
    },
    async class(_, args) {
      console.log(args);
      return await classController.show(args._id);
    },
  },
};

export default resolvers;
