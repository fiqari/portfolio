import Image from 'next/image';

export default function AnnotatedImage({ src, alt, annotations, caption, align = 'right' }) {
  // align can be 'left' or 'right' depending on where we want the annotations on desktop
  
  return (
    <div className={`annotated-image annotated-image--${align}`}>
      <div className="annotated-image__visual">
        <Image 
          src={src} 
          alt={alt} 
          width={600} 
          height={1200}
          className="annotated-image__img"
          quality={100}
        />
        {/* Render markers directly on the image if coordinates are provided */}
        {annotations.map((ann, i) => (
          ann.x && ann.y && (
            <div 
              key={`marker-${i}`}
              className="annotated-image__marker" 
              style={{ left: `${ann.x}%`, top: `${ann.y}%` }}
              aria-hidden="true"
            >
              {i + 1}
            </div>
          )
        ))}
      </div>
      <div className="annotated-image__content">
        <div className="annotated-image__callouts">
          {annotations.map((ann, i) => (
            <div key={`callout-${i}`} className="callout">
              <span className="callout__number">{i + 1}</span>
              <div className="callout__text">
                <h4 className="callout__title">{ann.title}</h4>
                <p className="callout__desc">{ann.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {caption && (
          <p className="case-image__caption annotated-image__caption">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
