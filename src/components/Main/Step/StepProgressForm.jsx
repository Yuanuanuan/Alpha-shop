function StepProgress({ stepPhase, children }) {
  return (
    <section
      className="register-container col col-lg-6 col-sm-12"
      data-phase="1"
      data-total-price="0"
    >
      <h2 className="register-title col col-12">結帳</h2>

      <section className="progress-container col col-12">
        <span className="progress-group" data-phase="address">
          <span className="progress-icon">
            <span className="text">{stepPhase === 1 ? "1" : null}</span>
            {stepPhase !== 1 ? (
              <svg
                className="icon cursor-point"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="#333333" />
                <path
                  d="M9.99997 16.1699L5.82997 11.9999L4.40997 13.4099L9.99997 18.9999L20.5 8.49994L19.09 7.08994L9.99997 16.1699Z"
                  fill="white"
                />
              </svg>
            ) : null}
          </span>
          <span className="progress-label">寄送地址</span>
        </span>
        <span className="progress-bar" data-order="1"></span>
        <span className="progress-group" data-phase="shipping">
          <span className="progress-icon">
            <span className="text">{stepPhase <= 2 ? "2" : null}</span>
            {stepPhase === 3 && stepPhase !== 2 ? (
              <svg
                className="icon cursor-point"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="#333333" />
                <path
                  d="M9.99997 16.1699L5.82997 11.9999L4.40997 13.4099L9.99997 18.9999L20.5 8.49994L19.09 7.08994L9.99997 16.1699Z"
                  fill="white"
                />
              </svg>
            ) : null}
          </span>
          <span className="progress-label">運送方式</span>
        </span>
        <span className="progress-bar" data-order="2"></span>
        <span className="progress-group" data-phase="credit-card">
          <span className="progress-icon">
            <span className="text">{stepPhase <= 3 ? "3" : null}</span>
            {/* <svg class="icon cursor-point" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="12" fill="#333333"/>
<path d="M9.99997 16.1699L5.82997 11.9999L4.40997 13.4099L9.99997 18.9999L20.5 8.49994L19.09 7.08994L9.99997 16.1699Z" fill="white"/>
                </svg> */}
          </span>
          <span className="progress-label">付款資訊</span>
        </span>
      </section>
      {children}
    </section>
  );
}

export default StepProgress;
