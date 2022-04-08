import React from "react";
import Login from "./login";
//Using another way of expression

const currentTime = new Date(2022, 4, 1, 13).getHours();
console.log(currentTime)

var isLoggedIn = false;
function App() {
  return (
    <div className="container"> 
    {/* { isLoggedIn ? <h1>Hello</h1> : <Login /> } */}
    {currentTime >12 && <h1>Why are you still working at this time?</h1>}
    </div>
    //[What this condition means is that: if the currentTime is greater than 12 then the second expression will not be rendered.
  );
}
export default App;
