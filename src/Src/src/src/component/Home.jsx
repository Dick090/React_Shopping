import React from "react";

function Home() {
  const name = "Nnamdi";
  const age = 12;
  return (
    <div>
      <h1>My name is {name} </h1>
      <NewHomeComponent name={name} age={age} />
    </div>
  );
}

const NewHomeComponent = ({ name, age }) => {
  return (
    <>
      My name is {name} and am age {age}
    </>
  );

  // const NewHomeComponent = (prop) => {
  //   console.log(prop);
  //   return (
  //     <>
  //       My name is {prop.name} and am age {prop.age}
  //     </>
  //   );
};

export default Home;
