import { GlobalStyles } from "styles/global";
import { MainComponent } from "components/main-component";

import { Modal } from "shared/components/modal/modal";
export function App() {
  return (
    <>
      <GlobalStyles />

      <MainComponent />

      <Modal />
    </>
  );
}

export default App;
