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
    cta = "View case study →"
}) {
    return (
        <Link href={href} className="project-card" id={id}>
            <div className="project-card__thumbnail">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    loading="lazy"
                />
            </div>
            <div className="project-card__content">
                <h2 className="project-card__headline">{headline}</h2>
                <p className="project-card__subtitle">{subtitle}</p>
                <div className="project-card__tags">
                    {tags.map((tag) => (
                        <span key={tag} className="project-card__tag">
                            {tag}
                        </span>
                    ))}
                </div>
                <span className="project-card__cta">{cta}</span>
            </div>
        </Link>
    );
}
