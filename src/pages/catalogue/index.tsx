import Footer from "@/app/components/Footer";
import NavigationBar from "@/app/components/NavigationBar";
import Image from "next/image";
import { EnvelopeArrowUp } from "react-bootstrap-icons";
import pinkFlour from "../../../public/pink-flour.svg";
import greenFlour from "../../../public/green-flour.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { bottles } from "@/data/bottles";
import { bottleCaps } from "@/data/bottle-caps";

export default function Products() {
  const router = useRouter();
  const [filter, setFilter] = useState<"All" | "Bottles" | "Bottle Caps">(
    "All"
  );

  const getFilteredItems = () => {
    if (filter === "Bottles") return bottles;
    if (filter === "Bottle Caps") return bottleCaps;
    return [...bottles, ...bottleCaps];
  };

  return (
    <div className="">
      <NavigationBar />

      <main className="container">
        <section className="catalogue">
          <div className="wrapper">
            <div className="catalogue-info">
              <h2 className="catalogue-title">Our Variety of Products</h2>

              <p className="catalogue-paragraph">
                We are on a mission to reduce single plastic use and minimize
                our carbon footprint.{" "}
              </p>
            </div>

            <div className="catalogue-filters">
              {["All", "Bottles", "Bottle Caps"].map((type) => (
                <button
                  key={type}
                  onClick={() =>
                    setFilter(type as "All" | "Bottles" | "Bottle Caps")
                  }
                  className={` ${
                    filter === type ? "cta-button" : "filter-button"
                  } `}
                >
                  {type}
                </button>
                // <button
                //   className={`px-4 py-2 rounded transition duration-200 ${
                //     filter === type
                //       ? "bg-blue-600 text-white"
                //       : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                //   }`}
                // >
                //   {type.charAt(0).toUpperCase() + type.slice(1)}
                // </button>
              ))}
            </div>

            <div className="catalogue-grid">
              {getFilteredItems().map((item) => (
                <div className="catalogue-card" key={item.id}>
                  <figure className="catalogue-figure">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="catalogue-image"
                    />
                  </figure>

                  <div className="catalogue-card-info">
                    <h4 className="catalogue-card-title">{item.name}</h4>

                    <ul className="catalogue-card-list">
                      {item.description.map((text, index) => (
                        <li key={index} className="catalogue-card-list-item">
                          {text}
                        </li>
                      ))}
                    </ul>

                    <button
                      className="cta-button"
                      onClick={() => router.push("/contacts")}
                    >
                      Know the price
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="banner">
          <div className="wrapper">
            <h2 className="banner-title">
              Your environmental impact, reduced. <span>#LeaveNoTrace</span>
            </h2>

            <button
              className="cta-button bw-variant"
              onClick={() => router.push("/contacts")}
            >
              Get Started
            </button>

            <Image
              src={greenFlour}
              alt="Card image"
              className="banner-vector-1"
            />

            <Image
              src={pinkFlour}
              alt="Card image"
              className="banner-vector-2"
            />
          </div>
        </section>

        <Footer />
      </main>

      <button className="email-cta" onClick={() => router.push("/contacts")}>
        <EnvelopeArrowUp size={28} />
      </button>
    </div>
  );
}
