import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../posts-data";
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
          <Link href="/healthherald" className="blog-nav__logo">
            Health<span>Herald</span>
          </Link>
          <nav className="blog-nav__links">
            <Link href="/about" className="blog-nav__link">
              Designer Bio
            </Link>
            <Link href="/" className="blog-nav__link">
              Portfolio
            </Link>
            <Link href="/healthherald" className="blog-nav__btn">
              Back to Feed
            </Link>
          </nav>
        </div>
      </header>

      <main className="blog-width-limit py-12">
        <article className="blog-width-narrow">
          
          {/* Post Header */}
          <header className="post-header">
            <span className="post-header__category">{post.category}</span>
            <h1 className="post-header__title">{post.title}</h1>
            
            <div className="post-header__meta-box">
              <span className="post-header__author">By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          {/* Scroll progress & share actions */}
          <PostClient postTitle={post.title} />


          {/* Post Content */}
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

          {/* End of article footer line */}
          <div className="broadsheet-double-rule" style={{ marginTop: "64px" }}></div>

          <div className="back-to-writing-nav">
            <Link href="/healthherald" className="back-to-writing-btn">
              ← Back to Dispatch
            </Link>
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
