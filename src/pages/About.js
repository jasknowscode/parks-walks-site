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
          alt="CEO and Owner Jasmine Parks"
        />
        </div>

        <div className="about-copy">
          <h2 className="section-heading">Hi, I'm Jasmine!</h2>
          <p>
            Pet care should feel calm, consistent, and personal — not like handing your pet off to someone new every time. 
            I’m Jasmine, the owner of Parks Walks. Originally from St. Louis, I moved to Chicago in 2010 to attend college and pursue a career in music. 
            Along the way, I found dog walking — what started as a side job quickly became something I genuinely loved.
          </p>

          <p>
            Over the past 10+ years, I’ve worked with a range of small and large pet care companies, as well as independently through platforms like Rover. 
            What I saw again and again was how inconsistent pet care could feel for both pets and their owners. That experience led me to build something more intentional. 
            Parks Walks was established in 2025 as a fully independent service focused on reliability, communication, and thoughtful care.
          </p>

          <p>
            My approach is intuitive and grounded in hands-on experience. 
            I work with leash-reactive dogs, senior pets, and animals with specific routines or medical needs, including medication administration. 
            I’m CPR trained and fully insured, and I keep my client list intentionally small to ensure every pet receives focused, consistent attention.
          </p>

          <p>
            At home, I have a 6-year-old orange American shorthair tabby cat named Kopa, who constantly reminds me how important patience, gentleness, and routine are in an animal’s life. 
            That perspective carries into every visit — whether it’s a quick walk, a drop-in, or extended care. 
            Parks Walks primarily serves Hyde Park and surrounding South Chicago neighborhoods, with a goal to provide dependable, compassionate care that gives you peace of mind and gives your pet a stable, positive experience.
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