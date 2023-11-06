import Step1 from "./DeliveryAddressInfoForm";
import Step2 from "./ShippingMethodForm";
import Step3 from "./PaymentInfoForm";

function FormBody({ stepPhase }) {
  return (
    <section className="form-container col col-12">
      {stepPhase === 1 && <Step1 />}
      {stepPhase === 2 && <Step2 />}
      {stepPhase === 3 && <Step3 />}
    </section>
  );
}

export default FormBody;
