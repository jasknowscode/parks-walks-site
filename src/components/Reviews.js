function Reviews() {
  const reviews = [
    {
      author: "Alicia",
      rating: 5,
      text: "Jasmine was reliable, communicative, and so sweet with my dog. I felt completely at ease while I was away.",
    },
    {
      author: "Marcus",
      rating: 5,
      text: "Very professional and caring. Updates were thoughtful and consistent, and my cat clearly loved her.",
    },
    {
      author: "Danielle",
      rating: 5,
      text: "Would absolutely book again. Dependable, kind, and attentive from start to finish.",
    },
  ];

  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <section className="section-card reviews-section">
      <h2 className="section-heading">Reviews</h2>
      <p className="reviews-subtitle">
        Trusted by pet parents across Chicago.
      </p>

      <div className="reviews-summary">
        <span className="reviews-summary-rating">
          {averageRating.toFixed(1)} ★
        </span>
        <span className="reviews-summary-count">
          Based on {reviews.length} client reviews
        </span>
      </div>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <article
            className="review-card review-card-animate"
            key={index}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="review-stars">{"★".repeat(review.rating)}</div>
            <p className="review-text">“{review.text}”</p>
            <p className="review-author">— {review.author}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Reviews;