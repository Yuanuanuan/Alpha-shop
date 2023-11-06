import { useContext } from "react";
import { FormContext } from "./FormContext";
import { ReactComponent as RightArrowIcon } from "../../../icons/right-arrow.svg";
import { ReactComponent as LeftArrowIcon } from "../../../icons/left-arrow.svg";

function ProgressControl({ onClick, stepPhase }) {
  const { formData } = useContext(FormContext);

  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      {stepPhase === 1 ? (
        <section className={`button-group col col-12`} data-phase="address">
          <button className="next" onClick={onClick.handleNext}>
            下一步
            <RightArrowIcon />
          </button>
        </section>
      ) : null}

      {stepPhase === 2 ? (
        <section className={`button-group col col-12`} data-phase="shipping">
          <button className="prev" onClick={onClick.handlePrevious}>
            <LeftArrowIcon />
            上一步
          </button>
          <button className="next" onClick={onClick.handleNext}>
            下一步
            <RightArrowIcon />
          </button>
        </section>
      ) : null}

      {stepPhase === 3 ? (
        <section className={`button-group col col-12`} data-phase="credit-card">
          <button className="prev" onClick={onClick.handlePrevious}>
            <LeftArrowIcon />
            上一步
          </button>
          <button className="next" onClick={() => console.log(formData)}>
            確認訂單
          </button>
        </section>
      ) : null}
    </section>
  );
}

export default ProgressControl;
