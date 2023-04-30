import { useState } from "react";

const Therapy = () => {
  const [userInput, setUserInput] = useState("");
  const [apiOutput, setApiOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const onUserChangedText = (event) => {
    // console.log(event.target.value);
    setUserInput(event.target.value);
  };

  const callGenerateEndpoint = async () => {
  
    setIsGenerating(true);

    console.log("Calling OpenAI...");
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });
    
    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };

  return (
    <div className="root">
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>AI-Therapy</h1>
            {/* <h2>Experience the Future of Blogging with Our AI-Powered Web3 Platform</h2> */}
          </div>
          <div className="header-subtitle">
            <h2>Your round-the-clock companion for mental wellness</h2>
            {/* <h2>Let NeuralScribe do the heavy lifting (or heavy thinking) for you</h2> */}
          </div>
        </div>
        
        <div className="prompt-container">
          <textarea
            placeholder="Enter the message here"
            className="prompt-box"
            value={userInput}
            onChange={onUserChangedText}
          />
          <div className="prompt-buttons">
            <button className={isGenerating ? 'generate-button loading' : 'generate-button'} onClick={callGenerateEndpoint}>
              <div className="generate">
              {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
              </div>
            </button>
          </div>
          {apiOutput && (
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                  <h3>Output</h3>
                </div>
              </div>
              <div className="output-content">
                <p>{apiOutput}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Therapy;
