const FirstComponent = (props) => {
  return <h1>My Very First Component</h1>;
};



const NamedComponent = (props) => {
  const name = props.name;
  return (
  <p>
    My Name Is {name}
  </p>)
};

