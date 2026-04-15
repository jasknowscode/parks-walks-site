export default function About() {
  return (
    <div>
      <header className="page-header">
        <h1>About</h1>
        <p>Meet the person behind Parks Walks.</p>
      </header>

      <section className="section-card about-layout">
        <img
          className="about-photo"
          src={`${process.env.PUBLIC_URL}/assets/hero.png`}
          alt="Jasmine with a dog"
        />

        <div className="about-copy">
          <h2>Hi, I'm Jasmine!</h2>
          <p>
            Originally form St. Louis, Missouri, I moved to Chicago to attend college. In pursuit of music, I came across dog-walking. At the time I was apart of a three-person team
            that services Wicker Park and surrounding neighborhoods. I enjoyed the work. Physically demanding yet never changing and challenging. 
          </p>

          <p> 
            In 2019, I began sitting on Rover and
            from there, I found myself scheduling meet & greets back to back and running a legit business. I created Parks Walks in 2025 and took this leap after walking dogs and 
            pet sitting for 10 years both doing independent contractor work.
            I wanted to build a rewarding and fulfilling career in pet care, doing what comes most natural to me: taking care of our furry friends!
          </p>

          <p>
            I have a 6 year old cat, Kopa! And he is absolutely a motivating factor in the way that I care. 
            With your individual needs and pet's needs in mind, my goal is to provide
            reliable, dependable, compassionate care that gives pet parents peace of mind.
          </p>
          
          <p>
            Parks Walks primarily services south Chicago - Hyde Park and surrounding neighborhoods. 
          </p>

          <div className="about-highlights">
            <div className="about-pill">Reliable updates</div>
            <div className="about-pill">Routine-focused care</div>
            <div className="about-pill">Gentle handling</div>
          </div>
        </div>
      </section>
    </div>
  );
}