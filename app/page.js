"use client";
import { useState } from "react";

export default function Home() {
  const [activeCard, setActiveCard] = useState(null);

  const products = [
    { id: 1, name: "Makeup Kit", section: "girls-low", img: "PASTE_IMAGE_LINK" },
    { id: 2, name: "Designer Dress", section: "girls-lux", img: "PASTE_IMAGE_LINK" },
    { id: 3, name: "Casual T-Shirt", section: "boys-low", img: "PASTE_IMAGE_LINK" },
    { id: 4, name: "Luxury Watch", section: "boys-lux", img: "PASTE_IMAGE_LINK" },
  ];

  const sections = [
    { id: "girls-low", title: "Girls Fashion – Low Price" },
    { id: "girls-lux", title: "Girls Fashion – Luxury" },
    { id: "boys-low", title: "Boys Fashion – Low Price" },
    { id: "boys-lux", title: "Boys Fashion – Luxury" },
  ];

  return (
    <div style={{ background: "#f3f3f3", minHeight: "100vh" }}>
      
      {/* HEADER */}
      <header style={headerStyle}>
        <h1 className="rgb-text">🔥 FireProducts</h1>
        <nav>
          {sections.map(sec => (
            <a key={sec.id} href={`#${sec.id}`} style={navLink}>
              {sec.title.split("–")[0]}
            </a>
          ))}
        </nav>
      </header>

      {/* HERO */}
      <div style={heroStyle}>
        <h2>Shop Smart. Shop Stylish.</h2>
      </div>

      {/* SECTIONS */}
      {sections.map(sec => (
        <section key={sec.id} id={sec.id} style={sectionStyle}>
          <h2>{sec.title}</h2>
          <div style={gridStyle}>
            {products
              .filter(p => p.section === sec.id)
              .map(product => (
                <div
                  key={product.id}
                  style={cardStyle}
                  onClick={() => setActiveCard(product.id)}
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    style={imgStyle}
                  />
                  <h3>{product.name}</h3>

                  {activeCard === product.id && (
                    <button
                      style={btnStyle}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href =
                          "mailto:konwarsantanu687@gmail.com?subject=Interested in " +
                          product.name;
                      }}
                    >
                      Email to Buy
                    </button>
                  )}
                </div>
              ))}
          </div>
        </section>
      ))}

      {/* FOUNDER */}
      <section style={founderStyle}>
        <img
          src="PASTE_FOUNDER_PHOTO_LINK"
          alt="Founder"
          style={founderImg}
        />
        <h2>Founder: Santanu Konwar</h2>
        <p>Creative Web & App Designer</p>
      </section>

      {/* RGB Animation */}
      <style jsx>{`
        .rgb-text {
          background: linear-gradient(90deg, red, orange, yellow, green, cyan, blue, violet);
          background-size: 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rgbMove 6s linear infinite;
        }

        @keyframes rgbMove {
          0% { background-position: 0% }
          100% { background-position: 400% }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

/* STYLES */

const headerStyle = {
  background: "#131921",
  color: "white",
  padding: "15px 40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const navLink = {
  color: "white",
  marginLeft: "20px",
  textDecoration: "none",
  fontSize: "14px",
};

const heroStyle = {
  background: "#232f3e",
  color: "white",
  textAlign: "center",
  padding: "50px 20px",
};

const sectionStyle = {
  padding: "40px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
  gap: "20px",
  marginTop: "20px",
};

const cardStyle = {
  background: "white",
  padding: "15px",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  cursor: "pointer",
  transition: "0.3s",
};

const imgStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "5px",
};

const btnStyle = {
  marginTop: "10px",
  padding: "8px 12px",
  background: "#ff9900",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const founderStyle = {
  background: "white",
  padding: "50px 20px",
  textAlign: "center",
  marginTop: "40px",
};

const founderImg = {
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  marginBottom: "15px",
};
