export default function ReviewQuote({ quote, author, date, source = "TripAdvisor", className = "" }) {
  return (
    <div className={`review-quote ${className}`}>
      <div className="review-quote__content">
        <svg className="review-quote__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M10 11L8 17H5L7 11H5V7H10V11ZM19 11L17 17H14L16 11H14V7H19V11Z" fill="currentColor" fillOpacity="0.2"/>
        </svg>
        <p className="review-quote__text">&quot;{quote}&quot;</p>
      </div>
      <div className="review-quote__footer">
        {author && <span className="review-quote__author">{author}</span>}
        {(author && date) && <span className="review-quote__separator">&middot;</span>}
        <span className="review-quote__meta">
          {source} &middot; {date}
        </span>
      </div>
    </div>
  );
}
