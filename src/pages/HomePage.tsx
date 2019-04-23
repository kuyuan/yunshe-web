import React from "react";
import Button from "../components/Button";
import Demo from "../components/Demo";

class HomePage extends React.Component {
  public render() {
    return (
      <div>
        Home Page
        <Button />
        <Demo />
      </div>
    );
  }
}

export default HomePage;
