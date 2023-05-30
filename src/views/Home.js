import React, { useState } from 'react';
function Home() {
    const [uname, setUname] = React.useState(null);
    const [message, setMessage] = React.useState(null);

    const  handleGenerateButtonClick =  () => {
        setMessage("Hello!! "+ uname);
    };

    return (
       <div>
            <input type="text" value={uname}  onChange={(e) => setUname(e.target.value)}/>
            <input type="button" value="Say Hello" onClick={handleGenerateButtonClick}/>
            <br/>
            {message}
       </div>
    );
}

export default Home;