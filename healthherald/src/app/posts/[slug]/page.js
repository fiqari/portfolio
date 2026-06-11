import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../../posts-data";
import PostClient from "./post-client";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} — Health Herald`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <header className="blog-nav">
        <div className="blog-width-limit blog-nav__inner">
          <Link href="/" className="blog-nav__logo">
            Health<span>Herald</span>
          </Link>
          <nav className="blog-nav__links">
            <a href="https://wainaina.tech/about" className="blog-nav__link">
              Designer Bio
            </a>
            <a href="https://wainaina.tech" className="blog-nav__link">
              Portfolio
            </a>
            <Link href="/" className="blog-nav__btn">
              Back to Feed
            </Link>
          </nav>
        </div>
      </header>

      <main className="nyt-card-wrapper py-12">
        <article className="nyt-card">
          {/* Card Header Logo (representing NYT logo) */}
          <div className="nyt-card__logo-container">
            <Link href="/" className="nyt-card__logo">
              The Health Herald
            </Link>
          </div>
          <hr className="nyt-card__divider" />

          {/* Card Body */}
          <div className="nyt-card__body">
            <span className="nyt-card__category">{post.category}</span>
            <h1 className="nyt-card__title">{post.title}</h1>
            <p className="nyt-card__subtitle">{post.excerpt}</p>

            {/* Client interactions row: share/bookmark buttons */}
            <PostClient postTitle={post.title} />
          </div>

          {/* Card Image */}
          <div className="nyt-card__image-container">
            <img
              src={`/images/${
                post.slug === "digitising-nhif"
                  ? "nhif_illustration"
                  : post.slug === "mobile-health-rails"
                  ? "money_illustration"
                  : "county_illustration"
              }.png`}
              alt={post.title}
              className="nyt-card__image"
            />
          </div>

          {/* Article Full Body */}
          <div className="nyt-card__article-content">
            <div className="post-body">
              {post.blocks.map((block, idx) => {
                switch (block.type) {
                  case "paragraph":
                    return <p key={idx}>{block.text}</p>;
                  case "heading":
                    return <h2 key={idx}>{block.text}</h2>;
                  case "quote":
                    return <blockquote key={idx}>{block.text}</blockquote>;
                  case "list":
                    return (
                      <ul key={idx}>
                        {block.items.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    );
                  default:
                    return null;
                }
              })}
            </div>

            <div className="back-to-writing-nav" style={{ marginTop: "40px" }}>
              <Link href="/" className="back-to-writing-btn">
                ← Back to Dispatch
              </Link>
            </div>
          </div>
        </article>
      </main>

      <footer className="blog-footer">
        <div className="blog-width-limit">
          <p className="blog-footer__copyright">
            © {new Date().getFullYear()} Health Herald. Written and curated by Wainaina Thomas.
          </p>
        </div>
      </footer>
    </>
  );
}
