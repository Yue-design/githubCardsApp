import "./Quiz.css";

function Hero() {
  return (
    <div>
      <h1>Quiz</h1>
      <p>Select the result of 1 and 1 by the arithemic operation shown</p>
    </div>
  );
}

function Answer({ title }) {
  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
}

function Turn({ operation, abank }) {
  return (
    <div>
      <div>
        {/* <img src={operation.imageUrl} alt="operation" /> */}
        {/* <img src="addition.jpg" alt="operation" /> */}
      </div>
      <div>
        {abank.map(title => (
          <Answer title={title} key={title} />
        ))}
      </div>
    </div>
  );
}

function Continue() {
  return <div></div>;
}

function Footer() {
  return (
    <div>
      <p>
        Copyright yueliu 2020<a href=""></a>
      </p>
      <p>
        All the images are from<a href=""></a>
      </p>
    </div>
  );
}

function Quiz({ turnData }) {
  return (
    <div>
      <Hero />
      <Turn {...turnData} />
      <Continue />
      <Footer />
    </div>
  );
}

export default Quiz;
