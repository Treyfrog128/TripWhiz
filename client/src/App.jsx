import React from "react";
import './App.css';
import Main from './app/Main'

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/events/getevent")
      .then((res) => res.json())
      .then((data) => setData(data[0].name));
  }, []);

  // React.useEffect(() => {
  //   const dat =   {
  //     "name": "Zipline at Kualoa", 
  //     "time": "Tue May 24 2022 22:52:50 GMT-1000 (Hawaii-Aleutian Standard Time)",
  //     "location": "Kulaoa Ranch",
  //     "weather": "Sunny 80-85"
  //   }
  //   fetch("/events/newevent", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(dat)
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
      <Main />
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
