import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
  id = "",
  href,
  imageSrc,
  imageAlt,
  headline,
  subtitle,
  tags = [],
}) {
  return (
    <Link href={href} className="project-card" id={id}>
      <div className="project-card__img-wrap">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1120}
          height={630}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 1120px"
        />
      </div>
      <div className="project-card__body">
        <h2 className="project-card__headline">{headline}</h2>
        <p className="project-card__subtitle">{subtitle}</p>
        {tags.length > 0 && (
          <div className="project-card__tags">
            {tags.map((tag) => (
              <span key={tag} className="project-card__tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
