import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import ServiceAreaMap from "../components/ServiceAreaMap";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const services = [
  {
    slug: "dog-walking",
    title: "Dog Walking",
    price: "Starting at $25",
    img: `${process.env.PUBLIC_URL}/assets/service-walk.png`,
    alt: "Dog walking in the neighborhood",
    details: [
      "20 / 30 / 55 minute walk options",
      "Fresh water + quick home check included",
      "GPS + photo updates after each walk",
      "Ideal for busy workdays or high-energy pups",
    ],
  },
  {
    slug: "drop-ins",
    title: "Drop-In",
    price: "Starting at $25",
    img: `${process.env.PUBLIC_URL}/assets/service-dropin.png`,
    alt: "Gentle drop-in visit with a pet at home",
    details: [
      "Perfect for puppies, seniors, cats, and critters",
      "Medication support if needed",
      "Litter / potty cleanup and fresh water",
      "Quick playtime + enrichment",
    ],
  },
  {
    slug: "in-home-care",
    title: "Overnight",
    price: "Starting at $175/night",
    img: `${process.env.PUBLIC_URL}/assets/service-sit.png`,
    alt: "Pet resting at home during a sit",
    details: [
      "Overnight presence to maintain routine",
      "Time left alone caps at 4-6 hours depending on pets needs",
      "Feedings, potty breaks, play, and medication support",
      "Home care: bring in packages, lights, basic tidying",
      "Photo + written updates included",
    ],
  },
  {
    slug: "hotel",
    title: "Hotel Concierge",
    price: "Starting at $65/hour",
    img: `${process.env.PUBLIC_URL}/assets/service-hotel.png`,
    alt: "Dog lying on a hotel bed",
    details: [
      "Minimum booking of two hours",
      "Great for travelers with events, dinners, or work meetings",
      "Walks + in-room companionship",
      "Flexible timing based on your schedule",
      "Photo updates while you’re out",
    ],
  },
  {
    slug: "wedding",
    title: "Wedding Handler",
    price: "Starting at $375",
    img: `${process.env.PUBLIC_URL}/assets/service-wedding.png`,
    alt: "Dog prepared for a wedding photo",
    details: [
      "Pre-ceremony walk and calming support",
      "Handling for photos + aisle moments",
      "Transport coordination (as needed)",
      "Comfort breaks, water, cleanup supplies",
    ],
  },
];

export default function Home() {
  const [openSlug, setOpenSlug] = useState(null);

  function toggle(slug) {
    setOpenSlug((cur) => (cur === slug ? null : slug));
  }

  return (
    <>
      <div className="landing-hero" id="home">
        <header className="hero">
          <Carousel />
          <h1>Reliable, insured pet care you can trust.</h1>

          <Link className="btn-primary" to="/contact">
            Book Now
          </Link>
        </header>
      </div>

<section id="service-grid" aria-labelledby="services-heading">
  <h2 className="section-heading">Services</h2>

  <div className="services-grid">
    {services.map((s) => {
      const isOpen = openSlug === s.slug;

      return (
        <article className={`service-card service-card--stack`} key={s.slug}>
          <img className="service-image service-image--wide" src={s.img} alt={s.alt} />

          <div className="service-content">
            <h3>{s.title}</h3>
            <p className="price">{s.price}</p>

          <div id="button-container">
            <div className="service-actions">
              <button
                type="button"
                className="btn-secondary"
                aria-expanded={isOpen}
                aria-controls={`${s.slug}-details`}
                onClick={() => toggle(s.slug)}
              >
                {isOpen ? "Hide details" : "View details"}
              </button>

              <Link
                className="btn-primary btn-primary--sm"
                to={`/contact?service=${encodeURIComponent(s.title)}`}
              >
                Book This
              </Link>
            </div>
          </div>

            <div
              id={`${s.slug}-details`}
              className={`service-details ${isOpen ? "is-open" : ""}`}
            >
              <ul>
                {s.details.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      );
    })}
  </div>
</section>


      <section className="section-card">
        <h2 className="section-heading">How it works!</h2>

        <div className="steps">
            <div className="step">
                <h3>Step 1: Complete the "Contact" Form</h3>
                <p> Tell us about your pet's needs and your specify your neighborhood.</p>
            </div>
            <div className="step">
                <h3>Step 2: Schedule a Meet &amp; Greet</h3>
                <p>Meet & greet is on us! We'll meet you and your pet, confirm dates, and discuss details about the visit.</p>
            </div>
            <div className="step">
                <h3>Step 3: Onboard &amp; Confirm</h3>
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

      <section className="service-area">
        <h2 className="section-heading">Service Area</h2>
        <p>
          Serving Hyde Park, Kenwood, South Shore, Woodlawn, Bridgeport,
          McKinley Park, South Loop, West Town, Bucktown, Wicker Park, and Ukrainian Village.
        </p>     
        <ServiceAreaMap />
      </section>


      <Reviews />
      <>

      <Footer />
      </>    
    </>
 );
}
