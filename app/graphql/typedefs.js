import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    "Get all the classes. If there are no classes, return an empty array."
    classes: [Class!]!
    schools: [School!]!
    professors: [Professor!]!
    class(_id: ID!): Class
  }

  "A class in our 🏫."
  type Class {
    "The unique identifier for the class. This is a MongoDB ID."
    _id: ID!
    "The name of the class."
    name: String!
    building: String!
    "The number of credit hours for the class."
    creditHours: Int!
    professor: Professor
  }
  # TODO: Add the 'Type'/Query for school
  # TODO: Add the 'Type'/Query for professor
  type School {
    _id: ID!
    name: String!
    location: String!
    studentCount: Int
    classes: [Class]
  }

  type Professor {
    _id: ID!
    name: String!
    studentScore: Int
    officeHours: String
    officeLocation: String
    classes: [Class]
  }
`;

export default typeDefs;
