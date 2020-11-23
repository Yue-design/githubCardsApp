import "./Quiz.css";

const Introduction = () => {
  return (
    <div>
      <h1>Information Iteracy Quiz</h1>
      <p>Select the correct picture about information iteracy.</p>
    </div>
  );
};

const Category = ({ title, onClick }) => {
  return (
    <div
      className="answer"
      onClick={() => {
        onClick(title);
      }}
    >
      <h4>{title}</h4>
    </div>
  );
};

const Turn = ({ question, category, highlight, onAnswerSelected }) => {
  const bgc = highlight => {
    const mapping = {
      none: "white",
      correct: "green",
      wrong: "red"
    };
    return mapping[highlight];
  };
  return (
    <div className="turn" style={{ backgroundColor: bgc(highlight) }}>
      <div>
        <img src={question.imageUrl} className="questionImage" alt="Name" />
      </div>
      <div>
        {category.map(title => (
          <Category title={title} key={title} onClick={onAnswerSelected} />
        ))}
        {/* {category.map(title => (
          <p>{title}</p>
        ))} */}
      </div>
    </div>
  );
};

const Continue = () => {
  return <div></div>;
};

const Footer = () => {
  return (
    <div>
      <p>
        All images are from
        <a href="http://commons.wikimedia.org/wiki/Main_Page">
          Wikemedia Commons
        </a>
        and are in the public domain
      </p>
    </div>
  );
};

const Quiz = ({ turnData, highlight, onAnswerSelected }) => {
  return (
    <div>
      <Introduction />
      <Turn
        {...turnData}
        highlight={highlight}
        onAnswerSelected={onAnswerSelected}
      />
      <Continue />
      <Footer />
    </div>
  );
};

export default Quiz;
