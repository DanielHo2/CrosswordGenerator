import React from "react";

const Faq = () => {
  return (
    <section className="faq">
      <div className="container">
        <h2>FAQ's</h2>
        <div className="faq-box">
          <div className="faq-item">
            <h4>FAQ #1</h4>
            <h3>How does the crossword puzzle generator work?</h3>
            <p>
              Enter a keyword into the input field and our generator will create
              you a personalized crossword puzzle themed around your keyword,
              ready for action!
            </p>
          </div>
          <div className="faq-item">
            <h4>FAQ #2</h4>
            <h3>Is there a limit to how long my crossword can be?</h3>
            <p>
              Nope! You can specifiy how long you want your crossword puzzle to
              be and you will get exactly that.
            </p>
          </div>
          <div className="faq-item">
            <h4>FAQ #3</h4>
            <h3>Can I enter any word that I want?</h3>
            <p>
              Yes, you can enter any word you want in the input field and your
              crossword will be generated around that keyword! We've used a
              database that contains multiple words and clues so that there is
              no limitations to the crossword you want.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
