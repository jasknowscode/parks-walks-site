import { useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

function Contact() {
  const location = useLocation();
  const containerRef = useRef(null);

  const selectedService = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get("service") || "";
  }, [location.search]);

  useEffect(() => {
    // 1) Ensure widget config exists BEFORE app.js runs
    window.formWidget = {
      apiKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJidXNpbmVzc0lkIjoiODE1MSIsImlhdCI6MTc2OTIyMzQ1Nn0.wvLyCdBeA_MPdaa0fL2t8ODsWjX6ltk83KRzLBe8IzU",
      schemaUrl: "https://api.scoutforpets.com/leads/schema",
      useAuthHeader: true,

      // Best effort: only helpful if Scout supports it.
      defaultValues: selectedService ? { service: selectedService } : undefined,
    };

    // 2) Inject CSS once
    const cssId = "scout-leads-form-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href = "https://dyoqr306barbt.cloudfront.net/leads-form/css/app.css";
      document.head.appendChild(link);
    }

    // 3) Helper: load script once (by id)
    const loadScript = (id, src) =>
      new Promise((resolve, reject) => {
        // If it exists already, resolve immediately
        const existing = document.getElementById(id);
        if (existing) return resolve(true);

        const s = document.createElement("script");
        s.id = id;
        s.type = "text/javascript";
        s.async = true;
        s.src = src;
        s.onload = () => resolve(true);
        s.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(s);
      });

    // 4) Re-mount strategy:
    // - clear container
    // - remove Scout app.js script tag so it re-executes
    // - insert the placeholder element Scout expects:
    //     <script class="embedded-form-widget"></script>
    // - reload Scout app.js
    const remount = async () => {
      if (!containerRef.current) return;

      // Clear anything Scout may have added
      containerRef.current.innerHTML = "";

      // Remove previous Scout script so it can re-run
      const scoutScriptId = "scout-leads-form-js";
      const oldScout = document.getElementById(scoutScriptId);
      if (oldScout) oldScout.remove();

      // Insert the exact placeholder Scout’s embed uses
      const placeholder = document.createElement("script");
      placeholder.type = "text/javascript";
      placeholder.className = "embedded-form-widget";
      containerRef.current.appendChild(placeholder);

      // Load Google Places if not already there //
      await loadScript(
        "google-places-sdk",
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyA0Z_MG1r4Yz2EooX13nnWLpC1JHk-jFQw&libraries=places"
      );

      // Load Scout app.js fresh (so it finds the new placeholder //
      await loadScript(
        scoutScriptId,
        "https://dyoqr306barbt.cloudfront.net/leads-form/js/app.js"
      );
    };

    remount().catch((err) => console.error(err));
  }, [selectedService]);

  return (
    <div>
      <header className="page-header">
        <h1>Contact</h1>
        <p>Tell us about your pet and the care you&apos;re looking for.</p>

        {selectedService ? (
          <p className="contact-selected">
            You&apos;re booking: <strong>{selectedService}</strong>
          </p>
        ) : null}
      </header>

      <section className="section-card contact">
        <h2>Let&apos;s Find the Right Fit</h2>
        <p>
          Share your pet&apos;s routine, needs, and your preferred dates. I&apos;ll follow up
          personally.
        </p>

        {/* Scout embed mounts into this container */}
        <div ref={containerRef} className="scout-embed-container" />
      </section>
      <>
        {/* routes or page content */}
        <Footer />
      </>   
    </div>
  );
}

export default Contact;