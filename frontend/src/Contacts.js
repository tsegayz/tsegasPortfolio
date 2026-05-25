import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import proj2 from "./assets/images/W2.jpg";

const Contacts = () => {
  const softSkills = [
    { name: "Communication", className: "tag tag-rotate-neg3" },
    { name: "Leadership", className: "tag tag-rotate-pos2" },
    { name: "Adaptability", className: "tag tag-rotate-neg1" },
    { name: "Team-work", className: "tag tag-rotate-pos3" },
    { name: "Time-management", className: "tag tag-rotate-pos1" },
    { name: "Flexible", className: "tag tag-rotate-neg2" },
    { name: "Problem-solving", className: "tag tag-rotate-pos2" },
    { name: "Detailed", className: "tag tag-rotate-neg1" },
  ];

  const socialLinks = [
    {
      name: "@gracejjacob",
      url: "https://instagram.com/gracejjacob",
      icon: <FaInstagram />,
    },
    { name: "@gracegeo", url: "https://x.com/gracegeo", icon: <FaXTwitter /> },
    {
      name: "@tsegayaekob",
      url: "https://linkedin.com/in/tsegayaekob",
      icon: <FaLinkedinIn />,
    },
  ];

  return (
    <div className="contacts">
      <section className="section-wrapper">
        <div className="card-panel">
          <div className="card-flex">
            <div className="massive-number">01</div>
            <div className="content-block">
              <h2 className="section-title">
                Choose <br />
                <span className="text-highlight indented-1">
                  the right
                </span>{" "}
                <br />
                direction
              </h2>
              <div className="desc-row">
                <p className="section-desc">
                  Great things start with a conversation — let's have one. Tell
                  me about your project and let's build something worth talking
                  about
                </p>
                <div className="corner-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrapper">
        <div className="split-flex reverse-mobile">
          <div className="content-block">
            <h2 className="section-title">
              Let's <br />
              <span className="text-highlight indented-2">start</span> <br />
              something new
            </h2>
            <p className="section-desc">
              Whether you need a designer, a problem-solver, or both — I'm ready
              to show up for your vision.
            </p>
          </div>
          <div className="massive-number text-right">02</div>
        </div>
      </section>

      <section className="section-wrapper">
        <div className="split-flex relative-box">
          <div className="massive-number border-bottom-mobile">03</div>
          <div className="content-block flex-1 indented-left">
            <h2 className="section-title">
              Bring <br />
              <span className="text-highlight indented-3">your ideas</span>{" "}
              <br />
              alive
            </h2>

            {/* Grouped together on the same row */}
            <div className="desc-row">
              <p className="section-desc">
                From concept to creation, I'm here to make sure your vision
                becomes something real, bold, and unforgettable
              </p>
              <div className="corner-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-wrapper dense-py">
        <div className="card-panel relative-box overflow-hidden">
          <div className="ambient-glow"></div>
          <div className="grid-layout">
            <div className="grid-left">
              <h3 className="panel-subtitle">Real Talk.</h3>
              <p className="panel-hint">
                Since this doesn't fit in a GitHub repo.-
              </p>
              <div className="tags-container">
                {softSkills.map((skill, index) => (
                  <span key={index} className={skill.className}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid-right">
              <img
              src={proj2}
                alt="Team working together"
                className="panel-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrapper footer-padding">
        <div className="giant-contact-header">
          <h1>
            C<span className="geometric-circle"></span>NTACT
          </h1>
        </div>
        <div className="grid-layout items-start">
          <div className="form-field">
            <label htmlFor="email" className="field-label">
              Email address
            </label>
            <div className="field-input-wrapper">
              <input
                type="email"
                id="email"
                placeholder="yourname@domain.com"
                className="custom-input"
              />
              <button type="submit" className="input-submit-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="socials-container">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-item"
              >
                <div className="social-icon-box">{social.icon}</div>
                <span className="social-text-label">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
