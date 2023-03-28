import * as React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <h3>Hi I'm Home component</h3>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  console.log("calling get static props on server!!!");
}
