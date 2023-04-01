const Box = (props) => {
  //  Write your code here.
  const { box, text } = props;
  return <button className={`${box}`}>{text}</button>;
};

const element = (
  //  Write your code here.
  <div class="bgContainer">
    <h1 class="heading">Boxes</h1>
    <div class="boxescontaines">
      <Box box="smallBox" text="Small" />
      <Box box="mediumBox" text="Medium" />
      <Box box="largeBox" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
