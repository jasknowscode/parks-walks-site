import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

const services = [
  {
    title: "Dog Walking",
    desc: "Structured walks tailored to your dog's energy level, routine and schedule.",
    img: `${process.env.PUBLIC_URL}/assets/service-walk.png`,
    alt: "Dog walking in the neighborhood",
  },
  {
    title: "Cat, Critter, Elder and Puppy Care",
    desc: "Gentle, attentive care for small pets, cats, puppies and elderly dogs with limited mobility.",
    img: `${process.env.PUBLIC_URL}/assets/service-dropin.png`,
    alt: "Cat receiving gentle care at home",
  },
  {
    title: "In-Home Pet Sitting",
    desc: "Comfortable, stress-free care in your home.",
    img: `${process.env.PUBLIC_URL}/assets/service-sit.png`,
    alt: "Pet sitting in a cozy living room",
  },
  {
    title: "Hotel Concierge Pet Care",
    desc: "Trusted pet care services for travelers staying in pet-friendly hotels.",
    img: `${process.env.PUBLIC_URL}/assets/service-hotel.png`,
    alt: "Dog on leash outside a hotel",
  },
  {
    title: "Wedding Pet Handling",
    desc: "Professional pet handling so your furry family members can be part of your special day.",
    img: `${process.env.PUBLIC_URL}/assets/service-wedding.png`,
    alt: "Dog dressed for a wedding photo",
  },
];

export default function Home() {
  return (
    <>
      <header className="hero">
        <h1>RELIABLE, INSURED PET CARE YOU CAN RELY ON.</h1>
        
        <Carousel />

        <Link className="btn-primary" to="/contact">
          Book Now
        </Link>
      </header>

      <section id="service-grid" aria-labelledby="services-heading">
        <h2 id="services-heading">Services</h2>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
               <img className="service-image" src={service.img} alt={service.alt} />
                <div className="service-content">
                <h3>{service.title}</h3>
                
                <p>{service.desc}</p>
                    <div className="service-actions">
                    <Link className="btn-secondary" to="/services">
                    Learn More
                    </Link>

                    </div>
                </div>
              
            </article>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h2>How it works</h2>

        <div className="steps">
            <div className="step">
                <h3>1 Request</h3>
                <p> Tell us what you need and your neighborhood.</p>
            </div>
            <div className="step">
                <h3>2 Schedule a Meet &amp; Greet</h3>
                <p>We'll meet you and your pet, confirm routines, and answer any lingering questions, free of charge.</p>
            </div>
            <div className="step">
                <h3>3 Confirm + Care</h3>
                <p>You will be onboarded to our platform "Scout" to receive booking confirmation, notes, photo updates and invoices. 
                   Payment and a signed 'Agreement of Services' is required to confirm booking.
                </p>
            </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 18 }}>
            <Link className="btn-primary" to="/contact">
                Book a Meet &amp; Greet
            </Link>
        </div>
      </section>

      <section className="section-card">
        <h2>Service Areas</h2>
        <p>
            Serving Chicago neighborhoods including: West Town, Tri-Taylor, South Loop, Bronzeville, Hyde Park, Southshore, Grand Boulevard, Kenwood
            Logan Square, Avondale, Bucktown, Humboldt Park and Ukranian Village. 
        </p>
        <p>Not sure? Send a message and we'll confirm.</p>
      </section>
    </>
 );
}
