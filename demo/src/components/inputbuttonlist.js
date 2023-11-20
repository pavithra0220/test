import {useState} from 'react';


function Apps() {
  const [message, setMessage] = useState ('');

  const handleChange = event => {
    setMessage(event.target.value);

   
  };

  

    return (
   <>
        <h2>Message: {message}</h2>
        <ul>
      <input type="text" id="message"  onClick={handleChange} />
      </ul>

      

      <button onClick={handleChange}>Click</button>
      </>
  );
};

export default Apps;
