import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";

const GET_POSTS = gql`
  {
    posts {
      id
      title
    }
  }
`;

const Demo = () => (
  <React.Fragment>
    <h1>Welcome</h1>
    <Query query={GET_POSTS}>
      {({ loading, error, data }) => {
        if (loading) { return <div>Loading...</div>; }
        if (error) { return <div>Error! {error.message}</div>; }

        return (
          <ul>{data.posts.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
        );
      }}
    </Query>
  </React.Fragment>
);

export default Demo;
