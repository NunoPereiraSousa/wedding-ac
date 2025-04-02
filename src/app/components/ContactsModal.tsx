"use client";

// import Image from "next/image";
import { XLg } from "react-bootstrap-icons";
// import contactVector1 from "../../../public/contact-icon-1.svg";
// import contactVector2 from "../../../public/contact-icon-2.svg";

interface Props {
  isOpen: boolean;
  onClose?: () => void;
}

export default function ContactsModal({ isOpen, onClose }: Props) {
  return isOpen ? (
    <>
      <div className="overlay"></div>

      <div className="modal">
        <div className="contacts">
          <button className="contacts-close-button" onClick={onClose}>
            <XLg size={16} className="contacts-x" />
          </button>
          <div className="wrapper">
            <h2 className="contacts-headline">
              Napisz do nas, wyceniamy oferty do 24 godzin!
            </h2>

            <form action="" className="form">
              <input
                type="text"
                className="form-input"
                id="name"
                placeholder="Full Name"
              />
              <div className="form-row">
                <input
                  type="email"
                  className="form-input"
                  id="email"
                  placeholder="Email"
                />
                <input
                  type="tel"
                  className="form-input"
                  id="telephone"
                  placeholder="Phone Number"
                />
              </div>
              <input
                type="text"
                className="form-input"
                id="company"
                placeholder="Company"
              />
              <textarea
                name=""
                id="message"
                placeholder="Your Message"
                rows={10}
                className="form-textarea"
              ></textarea>
              <button role="submit" className="cta-button form-button">
                Submit
              </button>
            </form>
          </div>

          {/* <Image src={contactVector1} alt="Icon" className="contact-vector-1" />
    <Image src={contactVector2} alt="Icon" className="contact-vector-2" /> */}
        </div>
      </div>
    </>
  ) : (
    ""
  );
}
