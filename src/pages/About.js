import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <header className="page-header">
        <h1>About</h1>
        <p>Meet the person behind Parks Walks.</p>
      </header>

      <section className="section-card about-layout">

        <div className="about-img-container">
        <img
          className="about-photo"
          src={`${process.env.PUBLIC_URL}/assets/hero.png`}
          alt="Jasmine walking a dog"
        />

        <img
          className="about-photo"
          src={`${process.env.PUBLIC_URL}assets/about-4.png`}
          alt="Jasmine and a dog making eye contact"
        />

        <img
          className="about-photo"
          src={`${process.env.PUBLIC_URL}/assets/about-3.jpg`}
          alt="Photo of Jasmine"
        />
        </div>

        <div className="about-copy">
          <h2>Hi, I'm Jasmine!</h2>
          <p>
            Originally from St. Louis, Missouri, I moved to Chicago in 2010 to attend college. In pursuit of music, I came across dog-walking. At the time I was apart of a three-person team
            that services Wicker Park and surrounding neighborhoods. I enjoyed the work! I was touring a lot, so the work was physically demanding yet flexible and ever changing and challenging. 
          </p>

          <p> 
            In 2019, I began mostly pet sitting here and there on Rover for some extra cash but
            before I knew it, I was running a business, full-time. After walking dogs and 
            pet sitting for 10 years doing independent contractor work for various small - and some bigger - companies, Parks Walks was created in 2025.
          </p>

          <p>
            I have a 6 year old cat, Kopa! And he is an absolute motivating factor behind the care and attention I provide. Animals deserve 
            kindness, gentleness and stable lives like us all. I find joy in contributing to pets having healthy, fulfilling and well-rounded lives. 
            It's the circle of life! With your individual needs and your pet's needs in mind, my goal is to provide
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
      <>
        {/* routes or page content */}
        <Footer />
      </>   

    </div>

    
  );
}