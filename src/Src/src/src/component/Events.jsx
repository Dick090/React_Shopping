function Events() {
  const shoot = () => {
    alert("He Scored the goal!!!");
  };

  const missedGoal = () => {
    alert("He took a shot but missed the goal");
  };

  const doubleClickHandler = () => {
    alert("Remaining 3 times for yoir attempt");
  };

  const Languages = [
    {
      id: 1,
      name: "Html",
      tutor: "Mr. Destiny",
    },
    {
      id: 2,
      name: "Css and BootStrap",
      tutor: "Mr. Destiny",
    },
    {
      id: 3,
      name: "React.js",
      tutor: "Mr. Osas",
    },
    {
      id: 4,
      name: "Python",
      tutor: "Mr. ThankGod",
    },
    {
      id: 5,
      name: "Django",
      tutor: "Mr. ThankGod",
    },
  ];

  return (
    <div>
      <button onClick={shoot}>Shoot</button>
      <button onDoubleClick={doubleClickHandler}>Login</button>
      {Languages.map((Language) => {
        return (
          <>
            <div>
              <div>
                <h1>{Language.name}</h1>
                <h5>{Language.tutor}</h5>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Events;
