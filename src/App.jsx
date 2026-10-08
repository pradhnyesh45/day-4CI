import React from "react";
import "./App.css";

const pipelineSteps = [
  { name: "Build", status: "Passed", time: "1m 12s" },
  { name: "Unit Tests", status: "Passed", time: "48s" },
  { name: "Lint", status: "Passed", time: "21s" },
  { name: "Deploy", status: "Running", time: "32s" },
];

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">C</div>
          <span>CI Dashboard</span>
        </div>

        <nav>
          <a className="nav-item active">Dashboard</a>
          <a className="nav-item">Pipelines</a>
          <a className="nav-item">Builds</a>
          <a className="nav-item">Deployments</a>
          <a className="nav-item">Settings</a>
        </nav>

        <div className="sidebar-bottom">
          <div className="user-avatar">JD</div>
          <div>
            <strong>John Doe</strong>
            <span>Developer</span>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="header">
          <div>
            <p className="eyebrow">PROJECT</p>
            <h1>go for it</h1>
          </div>

          <button className="deploy-btn">
            + Run Pipeline
          </button>
        </header>

        <section className="stats">
          <div className="stat-card">
            <div className="stat-icon blue">↗</div>
            <div>
              <span>Total Builds</span>
              <h2>128</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">✓</div>
            <div>
              <span>Successful</span>
              <h2>119</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon red">!</div>
            <div>
              <span>Failed</span>
              <h2>9</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">⚡</div>
            <div>
              <span>Success Rate</span>
              <h2>92.9%</h2>
            </div>
          </div>
        </section>

        <section className="content-grid">
          <div className="card pipeline-card">
            <div className="card-header">
              <div>
                <p className="eyebrow">LATEST PIPELINE</p>
                <h2>Pipeline #128</h2>
              </div>

              <span className="status running">
                ● Running
              </span>
            </div>

            <div className="pipeline">
              {pipelineSteps.map((step, index) => (
                <div className="pipeline-step" key={step.name}>
                  <div
                    className={`step-circle ${
                      step.status === "Passed"
                        ? "passed"
                        : "running-circle"
                    }`}
                  >
                    {step.status === "Passed" ? "✓" : "↻"}
                  </div>

                  {index !== pipelineSteps.length - 1 && (
                    <div
                      className={`step-line ${
                        step.status === "Passed"
                          ? "completed-line"
                          : ""
                      }`}
                    />
                  )}

                  <div className="step-info">
                    <strong>{step.name}</strong>
                    <span>{step.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pipeline-footer">
              <span>Started 2 minutes ago</span>
              <button>View Details →</button>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div>
                <p className="eyebrow">ENVIRONMENT</p>
                <h2>Production</h2>
              </div>

              <span className="status healthy">
                ● Healthy
              </span>
            </div>

            <div className="environment">
              <div className="environment-row">
                <span>Application</span>
                <strong>React App</strong>
              </div>

              <div className="environment-row">
                <span>Version</span>
                <strong>v1.4.2</strong>
              </div>

              <div className="environment-row">
                <span>Branch</span>
                <strong className="branch">main</strong>
              </div>

              <div className="environment-row">
                <span>Last Deploy</span>
                <strong>Today, 10:24 AM</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="card builds-card">
          <div className="card-header">
            <div>
              <p className="eyebrow">CI ACTIVITY</p>
              <h2>Recent Builds</h2>
            </div>

            <button className="view-all">
              View All
            </button>
          </div>

          <div className="build-table">
            <div className="table-header">
              <span>BUILD</span>
              <span>BRANCH</span>
              <span>COMMIT</span>
              <span>STATUS</span>
              <span>TIME</span>
            </div>

            <div className="table-row">
              <strong>#128</strong>
              <span className="branch">main</span>
              <code>a82f91c</code>
              <span className="badge success">Passed</span>
              <span>2 min ago</span>
            </div>

            <div className="table-row">
              <strong>#127</strong>
              <span className="branch">develop</span>
              <code>f13a22d</code>
              <span className="badge success">Passed</span>
              <span>18 min ago</span>
            </div>

            <div className="table-row">
              <strong>#126</strong>
              <span className="branch">feature/login</span>
              <code>91bc442</code>
              <span className="badge failed">Failed</span>
              <span>42 min ago</span>
            </div>

            <div className="table-row">
              <strong>#125</strong>
              <span className="branch">main</span>
              <code>772bc91</code>
              <span className="badge success">Passed</span>
              <span>1 hour ago</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;