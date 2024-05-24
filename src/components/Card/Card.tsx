import { useState } from "react";
import "./card.css";
import women from "/public/images/illustration-woman-online-mobile.svg";
import arrow from "/public/images/icon-arrow-down.svg";

export default function Card() {
  // const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const click = (index) => {
    if (activeIndex === index) {
      setActiveIndex(true);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="card">
      <div className="photo-container-mobile">
        <img className="main-img" src={women} alt="" />
        <img src="" alt="" />
      </div>
      <div className="question-section">
        <h1>FAQ</h1>
        <div onClick={() => click(0)} className="faq-item first-item">
          <div className="img-p">
            <p
              style={
                activeIndex === 0 ? { color: "red", fontSize: "13px" } : {}
              }
              className="faq-question"
            >
              How many team members can I invite?
            </p>
            <img
              className="arrow"
              src={arrow}
              alt=""
              style={activeIndex === 0 ? { transform: "rotate(180deg)" } : {}}
            />
          </div>
          {activeIndex === 0 ? (
            <p className="faq-text">
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </p>
          ) : null}
        </div>
        <div onClick={() => click(1)} className="faq-item first-item">
          <div className="img-p">
            <p
              style={activeIndex === 1 ? { color: "red" } : {}}
              className="faq-question"
            >
              How many team members can I invite?
            </p>
            <img
              className="arrow"
              src={arrow}
              alt=""
              style={activeIndex === 1 ? { transform: "rotate(180deg)" } : {}}
            />
          </div>
          {activeIndex === 1 ? (
            <p className="faq-text">
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </p>
          ) : null}
        </div>
        <div onClick={() => click(2)} className="faq-item first-item">
          <div className="img-p">
            <p
              style={activeIndex === 2 ? { color: "red" } : {}}
              className="faq-question"
            >
              How many team members can I invite?
            </p>
            <img
              className="arrow"
              src={arrow}
              alt=""
              style={activeIndex === 2 ? { transform: "rotate(180deg)" } : {}}
            />
          </div>
          {activeIndex === 2 ? (
            <p className="faq-text">
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </p>
          ) : null}
        </div>
        <div onClick={() => click(3)} className="faq-item first-item">
          <div className="img-p">
            <p
              style={activeIndex === 3 ? { color: "red" } : {}}
              className="faq-question"
            >
              How many team members can I invite?
            </p>
            <img
              className="arrow"
              src={arrow}
              alt=""
              style={activeIndex === 3 ? { transform: "rotate(180deg)" } : {}}
            />
          </div>
          {activeIndex === 3 ? (
            <p className="faq-text">
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
