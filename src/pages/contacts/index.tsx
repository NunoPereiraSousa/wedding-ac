import Footer from "@/app/components/Footer";
import NavigationBar from "@/app/components/NavigationBar";

export default function Contacts() {
  return (
    <div className="">
      <NavigationBar />

      <main className="container">
        <section className="contacts">
          <div className="wrapper">
            <h2 className="contacts-headline">
              Napisz do nas, wyceniamy oferty do 24 godzin!
            </h2>

            <form action="" className="form">
              <div className="form-item">
                {/* <label htmlFor="name">
                  Name <span className="asterisk">*</span>
                </label> */}
                <input
                  type="text"
                  className="form-input"
                  id="name"
                  placeholder="Full Name"
                />
              </div>
              <div className="form-row">
                <div className="form-item">
                  {/* <label htmlFor="email">
                    Email <span className="asterisk">*</span>
                  </label> */}
                  <input
                    type="email"
                    className="form-input"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-item">
                  {/* <label htmlFor="mobile">
                    Mobile Phone <span className="asterisk">*</span> 
                  </label> */}
                  <input
                    type="tel"
                    className="form-input"
                    id="telephone"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="form-item">
                {/* <label htmlFor="company">
                  Company <span className="asterisk">*</span>
                </label> */}
                <input
                  type="text"
                  className="form-input"
                  id="company"
                  placeholder="Company"
                />
              </div>
              <div className="form-item">
                {/* <label htmlFor="message">
                  Message <span className="asterisk">*</span>
                </label> */}
                <textarea
                  name=""
                  id="message"
                  placeholder="Your Message"
                  rows={10}
                  className="form-textarea"
                ></textarea>
              </div>
              {/* <small>* means the inputs are required fields.</small> */}
              <button role="submit" className="cta-button form-button">
                Submit
              </button>
            </form>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
