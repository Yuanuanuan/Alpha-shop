import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main/Main";
import "./styles/_main.scss";

import StepProgress from "./components/Main/Step/StepProgressForm";
import Cart from "./components/Main/Cart/Cart";
import FormBody from "./components/Main/Form/FormBody";
import ProgressControl from "./components/Main/Form/ProgressControlButton";
import { CartProvider } from "./components/Main/Cart/CartContext";
import { FormProvider } from "./components/Main/Form/FormContext";

function App() {
  const [stepPhase, setStepPhase] = useState(1);

  const handlePrevious = () => {
    if (stepPhase > 1) {
      setStepPhase(stepPhase - 1);
    }
  };

  const handleNext = () => {
    if (stepPhase < 3) {
      setStepPhase(stepPhase + 1);
    }
  };

  return (
    <>
      <Header />
      <Main>
        <CartProvider>
          <FormProvider>
            <StepProgress stepPhase={stepPhase}>
              <FormBody stepPhase={stepPhase} />
            </StepProgress>
            <Cart />
            <ProgressControl
              stepPhase={stepPhase}
              onClick={{ handlePrevious, handleNext }}
            />
          </FormProvider>
        </CartProvider>
      </Main>
      <Footer />
    </>
  );
}

export default App;
