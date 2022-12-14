import { useRef } from "react";

function App() {
  const IFrameRef = useRef(null);
  const token = 'test'

  const handleClick = (e) =>{
    if (IFrameRef) {
      console.log("send message")
      IFrameRef.current.contentWindow.postMessage(
        token,
        "*"
      );
    }
  }

  return (
    <>
    <button onClick={handleClick}>Click me</button>
    <iframe ref={IFrameRef} width='1200px' height='800px' title='test' src="http://localhost:9000/"></iframe>
    </>

  );
}

export default App;
