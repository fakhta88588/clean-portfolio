export default function Home() {
  const stats = [
    { label: "Fast loading", value: "99%" },
    { label: "Mobile ready", value: "100%" },
    { label: "Premium UI", value: "4K" },
  ];

  const features = [
    "Modern glass design",
    "Clean app landing page",
    "Responsive mobile layout",
    "Smooth premium cards",
  ];

  return (
    <main className="page">
      <nav className="nav">
        <div className="brand">
          <span className="logo">A</span>
          <span>App Studio</span>
        </div>
        <div className="links">
          <a href="#features">Features</a>
          <a href="#preview">Preview</a>
          <a className="navBtn" href="#contact">Start</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Premium design for your Vercel app</p>
          <h1>Beautiful, modern and mobile-friendly app design.</h1>
          <p className="subtitle">
            Aapki app ab simple page ki jagah professional landing page jaisi lagegi — clean sections,
            glass cards, bright gradient aur smooth responsive layout ke sath.
          </p>
          <div className="actions">
            <a className="primary" href="#preview">View design</a>
            <a className="secondary" href="#features">See features</a>
          </div>
          <div className="stats">
            {stats.map((item) => (
              <div className="stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="phone" id="preview">
          <div className="phoneTop" />
          <div className="screen">
            <div className="card bigCard">
              <span className="badge">Live Preview</span>
              <h2>Premium Dashboard</h2>
              <p>Clean UI, soft shadows and modern glass effect.</p>
            </div>
            <div className="miniGrid">
              <div className="miniCard">Design</div>
              <div className="miniCard">Speed</div>
              <div className="miniCard">Mobile</div>
              <div className="miniCard">Vercel</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        {features.map((feature, index) => (
          <article className="feature" key={feature}>
            <span>0{index + 1}</span>
            <h3>{feature}</h3>
            <p>Professional look ke liye spacing, rounded cards, gradient aur readable typography add ki gayi.</p>
          </article>
        ))}
      </section>

      <section className="cta" id="contact">
        <h2>Ready for launch on Vercel</h2>
        <p>GitHub me change push ho gaya to Vercel automatic deploy kar sakta hai.</p>
      </section>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .page {
          min-height: 100vh;
          color: #ffffff;
          overflow: hidden;
          background:
            radial-gradient(circle at 10% 10%, rgba(98, 0, 255, 0.55), transparent 34%),
            radial-gradient(circle at 90% 20%, rgba(255, 0, 132, 0.45), transparent 30%),
            linear-gradient(135deg, #080816 0%, #111535 52%, #271047 100%);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          padding: 28px;
        }

        .nav {
          width: min(1180px, 100%);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 18px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(18px);
          box-shadow: 0 20px 70px rgba(0, 0, 0, 0.25);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
          letter-spacing: 0.3px;
        }

        .logo {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b);
          box-shadow: 0 10px 28px rgba(236, 72, 153, 0.35);
        }

        .links {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .links a {
          color: rgba(255, 255, 255, 0.82);
          text-decoration: none;
          font-weight: 600;
        }

        .navBtn,
        .primary,
        .secondary {
          border-radius: 999px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .navBtn {
          padding: 10px 18px;
          background: rgba(255, 255, 255, 0.16);
        }

        .hero {
          width: min(1180px, 100%);
          margin: 86px auto 0;
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 54px;
          align-items: center;
        }

        .eyebrow {
          display: inline-flex;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #f8d8ff;
          font-weight: 700;
          margin: 0 0 22px;
        }

        h1 {
          font-size: clamp(42px, 7vw, 82px);
          line-height: 0.95;
          margin: 0;
          letter-spacing: -4px;
        }

        .subtitle {
          max-width: 650px;
          color: rgba(255, 255, 255, 0.76);
          font-size: 18px;
          line-height: 1.8;
          margin: 28px 0 0;
        }

        .actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 34px;
        }

        .primary,
        .secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 24px;
          text-decoration: none;
          font-weight: 800;
        }

        .primary {
          color: #121225;
          background: #ffffff;
          box-shadow: 0 18px 40px rgba(255, 255, 255, 0.22);
        }

        .secondary {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.16);
        }

        .primary:hover,
        .secondary:hover,
        .navBtn:hover {
          transform: translateY(-3px);
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 42px;
          max-width: 650px;
        }

        .stat,
        .feature,
        .cta,
        .card,
        .miniCard {
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.09);
          backdrop-filter: blur(18px);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.24);
        }

        .stat {
          border-radius: 22px;
          padding: 18px;
        }

        .stat strong {
          display: block;
          font-size: 28px;
        }

        .stat span {
          display: block;
          color: rgba(255, 255, 255, 0.65);
          margin-top: 5px;
          font-size: 14px;
        }

        .phone {
          position: relative;
          min-height: 610px;
          border-radius: 48px;
          padding: 18px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.05));
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 34px 120px rgba(0, 0, 0, 0.42);
          transform: rotate(2deg);
        }

        .phoneTop {
          width: 110px;
          height: 10px;
          border-radius: 999px;
          margin: 0 auto 18px;
          background: rgba(255, 255, 255, 0.22);
        }

        .screen {
          min-height: 546px;
          border-radius: 36px;
          padding: 24px;
          background:
            radial-gradient(circle at top right, rgba(236, 72, 153, 0.5), transparent 35%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.06));
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .bigCard {
          border-radius: 30px;
          padding: 28px;
        }

        .badge {
          display: inline-flex;
          padding: 8px 12px;
          border-radius: 999px;
          color: #17172b;
          background: #ffffff;
          font-weight: 800;
          font-size: 13px;
        }

        .bigCard h2 {
          margin: 20px 0 10px;
          font-size: 36px;
          letter-spacing: -1px;
        }

        .bigCard p,
        .feature p,
        .cta p {
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.7;
        }

        .miniGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .miniCard {
          min-height: 104px;
          border-radius: 24px;
          display: grid;
          place-items: center;
          font-weight: 800;
        }

        .features {
          width: min(1180px, 100%);
          margin: 90px auto 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .feature {
          border-radius: 28px;
          padding: 24px;
        }

        .feature span {
          color: #f0abfc;
          font-weight: 900;
        }

        .feature h3 {
          margin: 18px 0 12px;
          font-size: 22px;
        }

        .cta {
          width: min(1180px, 100%);
          margin: 30px auto 20px;
          border-radius: 32px;
          padding: 34px;
          text-align: center;
        }

        .cta h2 {
          margin: 0;
          font-size: clamp(30px, 4vw, 48px);
          letter-spacing: -2px;
        }

        @media (max-width: 900px) {
          .page {
            padding: 18px;
          }

          .links a:not(.navBtn) {
            display: none;
          }

          .hero {
            margin-top: 48px;
            grid-template-columns: 1fr;
          }

          h1 {
            letter-spacing: -2px;
          }

          .stats,
          .features {
            grid-template-columns: 1fr;
          }

          .phone {
            min-height: auto;
            transform: none;
          }

          .screen {
            min-height: 480px;
          }
        }
      `}</style>
    </main>
  );
}
