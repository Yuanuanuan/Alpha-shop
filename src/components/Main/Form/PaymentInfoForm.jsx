import { useContext } from "react";
import { FormContext } from "./FormContext";

function Step3() {
  const { formData, updateFormData } = useContext(FormContext);

  return (
    <form className="col col-12" data-phase="credit-card">
      <h3 className="form-title">付款資訊</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className="input-label">持卡人姓名</div>
            <input
              type="text"
              placeholder="John Doe"
              value={formData.cardHolderName}
              onChange={(e) => updateFormData("cardHolderName", e.target.value)}
            />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className="input-label">卡號</div>
            <input
              type="text"
              placeholder="1111 2222 3333 4444"
              value={formData.cardNumber}
              onChange={(e) => updateFormData("cardNumber", e.target.value)}
            />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-3 input-w-sm-s3">
            <div className="input-label">有效期限</div>
            <input
              type="text"
              placeholder="MM/YY"
              value={formData.validityPeriod}
              onChange={(e) => updateFormData("validityPeriod", e.target.value)}
            />
          </div>
          <div className="input-group input-w-lg-3 input-w-sm-s3">
            <div className="input-label">CVC / CCV</div>
            <input
              type="text"
              placeholder="123"
              value={formData.cardVC}
              onChange={(e) => updateFormData("cardVC", e.target.value)}
            />
          </div>
        </div>
      </section>
    </form>
  );
}

export default Step3;
