// function Greeting({ isLoggedIn }) {
//   if (isLoggedIn) {
//     return <h2>Welcome back!</h2>;
//   } else {
//     return <h2>Please log in.</h2>;
//   }
// }

function Greeting({ isLoggedIn }) {
  return <h2>{isLoggedIn ? "Welcome back!" : "Please log in."}</h2>;
}
export default Greeting;
