import React from 'react';
import Contact from "./components/Contact";

function App() {
  return (
  <div>
       <Contact
          avatar = "https://randomuser.me/api/portraits/women/47.jpg"
          name = "Beverley Barrett"
          online = {true}
          />
        <Contact
        avatar = "https://randomuser.me/api/portraits/women/46.jpg"
        name = "April Craig"
        online = {false}
        />
        <Contact
        avatar = "https://randomuser.me/api/portraits/women/48.jpg"
        name = "Letitia Gibson"
        online = {true}
        />
    </div>
  );
}

export default App;
