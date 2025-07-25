import Title from "./Title.jsx";

function Name(){
  return <h1>my  name</h1>
}

function Fragment() {
  return (
    <>
      <Title />
      <p>Hello guys</p>
      <Name />
      <h1>Hello</h1>
    </>
  );
}

export default Fragment;