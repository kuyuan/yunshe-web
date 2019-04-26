import gql from "graphql-tag";

export default gql`
  scalar Date

  type PageInfo {
    hasNextPage: Boolean
    hasPreviousPage: Boolean
  }
`;
