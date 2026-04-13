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
          <h2>Hi, I&apos;m Jasmine!</h2>
          <p>
            I created Parks Walks in 2025 when I was tired of the hustle of dead-end service jobs.
            I wanted to build something I genuinely love and can be proud of.
          </p>
          <p>
            Every animal has their own routine, personality, and needs — and my goal is to provide
            dependable, compassionate care that gives pet parents peace of mind.
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