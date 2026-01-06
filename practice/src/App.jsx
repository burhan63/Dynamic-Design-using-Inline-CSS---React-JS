import { useState } from "react";

function App() {
  const [txtcolor,settxtcolor] = useState('red');
  const [cardstyle, setCardStyle] = useState(
    {
      border: "1px solid #cccc",
      width: "250px",
      textAlign: "center",
      padding: "5px",
      boxShadow: "1px 0px 3px 1px #cccc",
      margin: "10px",
    }
  );


  const updatetheme = (bgcolor,txtcolor) => {
    setCardStyle({...cardstyle,backgroundColor:bgcolor});
    settxtcolor(txtcolor);
  }


  return (
    <>
      <h1>Inline CSS - React JS</h1>

      <button on onClick={()=>updatetheme('gray','red')}>Dark Theme</button>
      <button on onClick={()=>updatetheme('white','black')}>Light Theme</button>

      {/* Parent container */}
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        {/* Card 1 */}
        <div style={cardstyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanlasPgQjfGGU6anray6qKVVH-ZlTqmuTHw&s"
            alt=""
            width="100%"
          />
          <h2 style={{color:txtcolor}}>Burhan Ali</h2>
          <h2 style={{color:txtcolor}}>Software Developer - IT</h2>
        </div>

        {/* Card 2 */}
        <div style={cardstyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanlasPgQjfGGU6anray6qKVVH-ZlTqmuTHw&s"
            alt=""
            width="100%"
          />
          <h2 style={{color:txtcolor}}>Ahsan Hameed</h2>
          <h2 style={{color:txtcolor}}>Network Infrastructure - IT</h2>
        </div>

        {/* Card 3 */}
        <div style={cardstyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanlasPgQjfGGU6anray6qKVVH-ZlTqmuTHw&s"
            alt=""
            width="100%"
          />
          <h2 style={{color:txtcolor}}>Ahmed Hassan</h2>
          <h2 style={{color:txtcolor}}>Project Manager - IT</h2>
        </div>
      </div>
    </>
  );
}

export default App;
