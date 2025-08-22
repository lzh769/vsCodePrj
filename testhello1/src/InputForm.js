import React, { useState } from 'react';

function InputForm() {
  const [text11, setText1] = useState('');

  return (
    <div>
      <input
        type="text"
        value={text11}
        onChange={(e) => setText1(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: {text11}</p>
    </div>
  );
}

export default InputForm;