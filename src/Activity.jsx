export default function Activity({username, textcolor}) {

  const style = {color: textcolor};
  return (
    <div>
      <h1 style={style}>Hello, {username}</h1>
    </div>
  );
}
