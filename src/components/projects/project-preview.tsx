export function ProjectPreview({ kind }: { kind: string }) {
  if (!["credit", "gallery"].includes(kind))
    return (
      <div className="project-preview custom-preview">
        <span className="accent">&lt; / &gt;</span>
        <p>Project overview</p>
      </div>
    );
  return (
    <div
      className={`project-preview ${kind === "credit" ? "credit-preview" : "iot-preview"}`}
      aria-label={
        kind === "credit"
          ? "Smart Credit application preview"
          : "Shooting gallery telemetry preview"
      }
    >
      {kind === "credit" ? (
        <>
          <div className="preview-top">
            <span>09:41</span>
            <span>● ▰</span>
          </div>
          <div className="preview-brand">
            <strong>Smart Credit+</strong>
            <span className="mini-status">Low risk</span>
          </div>
          <div className="preview-box">
            <small>Active Microloan</small>
            <strong className="balance">$1,250.00</strong>
            <div className="preview-meta">
              <span>Repaid: $900.00</span>
              <span>72%</span>
            </div>
            <div className="progress">
              <span style={{ width: "72%" }} />
            </div>
          </div>
          <div className="preview-columns">
            <div className="preview-box">
              <small>Credit score</small>
              <strong className="accent">
                785 <small>/ 850</small>
              </strong>
            </div>
            <div className="preview-box">
              <small>Repayment rate</small>
              <strong>99.4%</strong>
            </div>
          </div>
          <div className="preview-tabs">
            <span>Pay now</span>
            <span>Upload receipt</span>
            <span>Schedule</span>
          </div>
          <div className="preview-note">● Repayment confirmed</div>
        </>
      ) : (
        <>
          <div className="preview-brand">
            <strong>Target Station Alpha</strong>
            <span className="mini-status">● Online</span>
          </div>
          <div className="preview-columns">
            <div className="preview-box">
              <small>WebSocket uplink</small>
              <span className="green">Connected</span>
            </div>
            <div className="preview-box">
              <small>RF link</small>
              <span>−48 dBm</span>
            </div>
          </div>
          <div className="preview-box">
            <div className="preview-meta">
              <strong>Wireless glove telemetry</strong>
              <span className="green">Armed</span>
            </div>
            <small>Flex sensor</small>
            <div className="progress purple">
              <span style={{ width: "84%" }} />
            </div>
            <small>Pitch / roll</small>
            <div className="progress">
              <span style={{ width: "64%" }} />
            </div>
          </div>
          <small>Target actuator matrix</small>
          <div className="target-grid">
            <span>
              TGT 01
              <br />
              Aligned
            </span>
            <span>
              TGT 02
              <br />
              Hit +50
            </span>
            <span>
              TGT 03
              <br />
              Ready
            </span>
          </div>
          <div className="preview-meta">
            <span>
              Accuracy: <b className="green">94.2%</b>
            </span>
            <span>Latency: 14ms</span>
          </div>
        </>
      )}
    </div>
  );
}
