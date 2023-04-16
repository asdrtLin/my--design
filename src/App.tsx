import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button>hello</Button>
      <Button disabled>hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        hello
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
        hello
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>
        hello
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        hello
      </Button>
      <Button
        btnType={ButtonType.Link}
        target="_blank"
        href="https://www.baidu.com"
      >
        hello-link
      </Button>
      <Button
        target="_blank"
        btnType={ButtonType.Link}
        disabled
        href="https://www.baidu.com"
      >
        hello-link
      </Button>
    </div>
  );
}

export default App;
