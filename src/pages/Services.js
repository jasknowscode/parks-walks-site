import { useMemo, useState } from "react";
import { Link } from "react-router-dom";


export default function Services() {
  const services = useMemo(
    () => [
      {
        slug: "dog-walking",
        title: "Dog Walking",
        short: "Structured walks tailored to your dog’s pace, age, and energy level.",
        price: "Starting at $25",
        img: `${process.env.PUBLIC_URL}/assets/service-walk.png`,
        alt: "Dog walking in the neighborhood",
        details: [
          "20 / 30 / 60 minute walk options",
          "Fresh water + quick home check included",
          "GPS + photo updates after each walk",
          "Ideal for busy workdays or high-energy pups",
        ],
      },
      {
        slug: "in-home-care",
        title: "Pet Sitting & In-Home Care",
        short: "Overnight or extended care in your pet’s home for comfort and routine.",
        price: "Starting at $175/night",
        img: `${process.env.PUBLIC_URL}/assets/service-sit.png`,
        alt: "Pet resting at home during a sit",
        details: [
          "Overnight presence to maintain routine",
          "Feedings, potty breaks, play, and medication support",
          "Home care: bring in packages, lights, basic tidying",
          "Photo + written updates included",
        ],
      },
      {
        slug: "drop-ins",
        title: "Drop-In Visits",
        short: "Drop-ins for puppies, seniors, meds, and small pets.",
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
        slug: "hotel",
        title: "Hotel Concierge",
        short: "Care during your pet-friendly hotel stay so your pet gets attention and routine.",
        price: "Starting at $65/hour (2-hour minimum)",
        img: `${process.env.PUBLIC_URL}/assets/service-hotel.png`,
        alt: "Dog on leash outside a hotel",
        details: [
          "Great for events, dinners, and travel days",
          "Walks + in-room companionship",
          "Flexible timing based on your schedule",
          "Photo updates while you’re out",
        ],
      },
      {
        slug: "wedding",
        title: "Wedding Handler",
        short: "Support so your pet can be part of your special day—photos, ceremony, transitions.",
        price: "$375",
        img: `${process.env.PUBLIC_URL}/assets/service-wedding.png`,
        alt: "Dog prepared for a wedding photo",
        details: [
          "Pre-ceremony walk and calming support",
          "Handling for photos + aisle moments",
          "Transport coordination (as needed)",
          "Comfort breaks, water, cleanup supplies",
        ],
      },
    ],
    []
  );

  const [openSlug, setOpenSlug] = useState(null);

  function toggle(slug) {
    setOpenSlug((cur) => (cur === slug ? null : slug));
  }

  return (
    <div>
      <header className="page-header">
        <h1>Services</h1>
        
        <p>Flexible care options designed around your pet&apos;s needs.</p>
      </header>

      <section className="section-card" aria-labelledby="services-grid-heading">
        <h2 id="services-grid-heading">CHOOSE A SERVICE</h2>

        <div className="services-grid">
          {services.map((s) => {
            const isOpen = openSlug === s.slug;

            return (
              <article className={`service-card service-card--stack`} key={s.slug}>
                <img className="service-image service-image--wide" src={s.img} alt={s.alt} />

                <div className="service-content">
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <p className="price">{s.price}</p>

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
                      Book this
                    </Link>
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
        <p style={{ textAlign: "center", margin: 0 }}>
          Have a specific need or question? <Link to="/contact">Get in touch here.</Link>
        </p>
      </section>
    </div>
  );
}