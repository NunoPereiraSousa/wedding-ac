"use client";

import Image from "next/image";
import bola from "../../public/assets/bola.png";
import plantaEsquerda from "../../public/assets/planta-esquerda.png";
import rj from "../../public/assets/rj.jpeg";
import arrowDown from "../../public/assets/arrowDown.png";
import arrowLeft from "../../public/assets/arrowLeft.png";
import arrowRight from "../../public/assets/arrowRight.png";
import mosteiro from "../../public/assets/mosteiro.png";
import borboletas from "../../public/assets/borboletas.png";
import plantaDireita from "../../public/assets/planta-direita.png";
import preloader from "../../public/assets/preloader.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  useGSAP(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    gsap.to(".preloader-image", {
      opacity: 1,
      duration: 1,
    });

    gsap.to(".preloader p", { opacity: 1, y: 10, duration: 1, stagger: 0.2 });

    gsap.to(".preloader", {
      opacity: 0,
      duration: 1,
      delay: 3,
      onComplete: () => {
        document.documentElement.style.overflow = "auto";
        document.body.style.overflow = "auto";
        const preloader = document.querySelector(".preloader");
        if (preloader) {
          preloader.remove();
        }
      },
    });
  });

  return (
    <main>
      <div className="preloader">
        <div className="preloader-wrapper wrapper">
          <p className="preloader-text-1">23</p>
          <p className="preloader-text-2">06</p>
          <p className="preloader-text-3">20</p>
          <p className="preloader-text-4">25</p>
          <Image src={preloader} alt="Preloader" className="preloader-image" />
        </div>
      </div>

      <a
        className="cta"
        href="https://forms.gle/YJDR978shABFii5P6"
        target="_blank"
      >
        Confirmar presença
      </a>

      <section className="hero">
        <Image src={plantaEsquerda} alt="Palmeira" className="hero-vector" />
        <div className="hero-wrapper wrapper">
          <h1 className="hero-headline">
            Do primeiro “sim”
            <br />
            <span>ao grande “sim”</span>
          </h1>

          <figure className="hero-figure">
            <Image src={bola} alt="Bola" className="hero-image" />
          </figure>

          <p className="hero-label">Foram 10 anos a ensaiar a pergunta</p>
        </div>
      </section>

      <section className="gallery">
        <div className="gallery-wrapper wrapper">
          <h2 className="gallery-headline">
            e não podíamos deixar de recordar a <span>nossa história</span> até
            agora
          </h2>
          <video
            width="600"
            loop
            autoPlay
            muted
            playsInline
            className="gallery-vector"
          >
            <source src="/assets/tucano.mp4" type="video/mp4" />
          </video>

          <div className="gallery-grid">
            <div className="gallery-card">
              <figure className="gallery-card-figure">
                <Image src={rj} alt="RJ" className="gallery-card-image" />
              </figure>

              <div className="gallery-card-footer">
                <p className="gallery-card-label">Rio de Janeiro</p>
                <p className="gallery-card-label">2024</p>
              </div>
            </div>

            <div className="gallery-card">
              <figure className="gallery-card-figure">
                <Image src={rj} alt="RJ" className="gallery-card-image" />
              </figure>

              <div className="gallery-card-footer">
                <p className="gallery-card-label">Rio de Janeiro</p>
                <p className="gallery-card-label">2024</p>
              </div>
            </div>

            <div className="gallery-card">
              <figure className="gallery-card-figure">
                <Image src={rj} alt="RJ" className="gallery-card-image" />
              </figure>

              <div className="gallery-card-footer">
                <p className="gallery-card-label">Rio de Janeiro</p>
                <p className="gallery-card-label">2024</p>
              </div>
            </div>

            <div className="gallery-card">
              <figure className="gallery-card-figure">
                <Image src={rj} alt="RJ" className="gallery-card-image" />
              </figure>

              <div className="gallery-card-footer">
                <p className="gallery-card-label">Rio de Janeiro</p>
                <p className="gallery-card-label">2024</p>
              </div>
            </div>

            <div className="gallery-card">
              <figure className="gallery-card-figure">
                <Image src={rj} alt="RJ" className="gallery-card-image" />
              </figure>

              <div className="gallery-card-footer">
                <p className="gallery-card-label">Rio de Janeiro</p>
                <p className="gallery-card-label">2024</p>
              </div>
            </div>

            <div className="gallery-card">
              <figure className="gallery-card-figure">
                <Image src={rj} alt="RJ" className="gallery-card-image" />
              </figure>

              <div className="gallery-card-footer">
                <p className="gallery-card-label">Rio de Janeiro</p>
                <p className="gallery-card-label">2024</p>
              </div>
            </div>

            <div className="gallery-card">
              <figure className="gallery-card-figure">
                <Image src={rj} alt="RJ" className="gallery-card-image" />
              </figure>

              <div className="gallery-card-footer">
                <p className="gallery-card-label">Rio de Janeiro</p>
                <p className="gallery-card-label">2024</p>
              </div>
            </div>

            <div className="gallery-card">
              <figure className="gallery-card-figure">
                <Image src={rj} alt="RJ" className="gallery-card-image" />
              </figure>

              <div className="gallery-card-footer">
                <p className="gallery-card-label">Rio de Janeiro</p>
                <p className="gallery-card-label">2024</p>
              </div>
            </div>

            <div className="gallery-card">
              <figure className="gallery-card-figure">
                <Image src={rj} alt="RJ" className="gallery-card-image" />
              </figure>

              <div className="gallery-card-footer">
                <p className="gallery-card-label">Rio de Janeiro</p>
                <p className="gallery-card-label">2024</p>
              </div>
            </div>

            <div className="gallery-card">
              <figure className="gallery-card-figure">
                <Image src={rj} alt="RJ" className="gallery-card-image" />
              </figure>

              <div className="gallery-card-footer">
                <p className="gallery-card-label">Rio de Janeiro</p>
                <p className="gallery-card-label">2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="date">
        <div className="date-wrapper wrapper">
          <h3 className="date-headline">
            O PRÓXIMO CAPÍTULO Será AINDA MELHOR... <br />
            <br /> E QUEREMOS CELEBRÁ-LO <br /> na vossa companhia!
          </h3>

          <div className="date-container">
            <div className="date-video-wrapper">
              <video
                width="600"
                loop
                autoPlay
                muted
                playsInline
                className="date-video"
              >
                <source src="/assets/leopardo.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="date-content">
              <div className="date-content-box">
                <p className="date-content-number">23</p>
                <div className="date-content-box-info first">
                  <Image
                    src={arrowDown}
                    alt="Arrow Down"
                    className="date-content-arrow-down"
                  />
                  <p className="first">O dia do nosso aniversário de namoro</p>
                </div>
              </div>
              <div className="date-content-box">
                <p className="date-content-number">06</p>
                <div className="date-content-box-info second">
                  <p className="second">O nosso mês preferido</p>
                  <Image
                    src={arrowLeft}
                    alt="Arrow Left"
                    className="date-content-arrow-left"
                  />
                </div>
              </div>
              <div className="date-content-box">
                <p className="date-content-number">2025</p>
                <div className="date-content-box-info third">
                  <Image
                    src={arrowRight}
                    alt="Arrow Right"
                    className="date-content-arrow-right"
                  />
                  <Image
                    src={arrowDown}
                    alt="Arrow Right"
                    className="date-content-arrow-right-2"
                  />
                  <p className="third">
                    O ano em que completamos 10 anos juntos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="catch">
        <div className="catch-wrapper wrapper">
          <h3 className="catch-headline">Contamos convosco?</h3>

          <p className="catch-label">
            Se sim, ficamos muito felizes!
            <br />
            <br />
            Partilhamos de seguida alguns detalhes que vão precisar
          </p>

          <video loop autoPlay muted playsInline className="catch-video">
            <source src="/assets/trompete.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="ceremony">
        <div className="ceremony-wrapper wrapper">
          <Image
            src={borboletas}
            alt="Borboletas"
            className="ceremony-vector"
          />

          <h3 className="ceremony-headline">A CERIMÓNIA</h3>
          <p className="ceremony-label">26.06.2025 | 14h30</p>

          <div className="ceremony-container">
            <Image src={mosteiro} alt="Mosteiro" className="ceremony-image" />

            <div className="ceremony-info">
              <p className="ceremony-info-paragraph">
                A cerimónia terá lugar no
              </p>

              <h5 className="ceremony-info-title">
                Mosteiro de S. Salvador de Grijó, às 14h30
              </h5>

              <p className="ceremony-info-paragraph">
                Pedimos, por favor, que cheguem 15 minutos antes do horário
                indicado para que não haja grande atraso.
              </p>

              <div className="ceremony-info-map-wrapper">
                <div>
                  <h6 className="ceremony-info-map-title">Como chegar?</h6>

                  <p className="ceremony-info-map-label">Cliquem no mapa</p>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.8495707372995!2d-8.58211202375674!3d41.028546918176275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24794efec5dcf1%3A0x8c7432573c9d17ee!2sMonastery%20of%20Grij%C3%B3!5e0!3m2!1sen!2spl!4v1743456652097!5m2!1sen!2spl"
                  className="ceremony-map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="party">
        <div className="party-wrapper wrapper">
          <h3 className="party-headline">O copo-de-água</h3>
          <p className="party-label">26.06.2025 | 16h30</p>

          <div className="party-container">
            <div className="party-info">
              <p className="party-info-paragraph">
                O nosso copo-de-água terá lugar na
              </p>

              <h5 className="party-info-title">Quinta do Alferes de Crasto</h5>

              <p className="party-info-paragraph">
                Não vai faltar boa música, boa disposição e muita diversão!
              </p>

              <div className="party-info-map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3477339422097!2d-8.683071323744453!3d41.323051299983014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd244322c9a42bb1%3A0x415f431e5627e4f!2sQuinta%20do%20Alferes%20de%20Crasto!5e0!3m2!1sen!2spl!4v1743457448691!5m2!1sen!2spl"
                  className="party-map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div>
                  <h6 className="party-info-map-title">Como chegar?</h6>

                  <p className="party-info-map-label">Cliquem no mapa</p>
                </div>
              </div>
            </div>

            <video loop autoPlay muted playsInline className="party-video">
              <source src="/assets/cocktail.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="end">
        <div className="end-wrapper wrapper">
          <h3 className="end-headline">SÓ FALTA O vosso “SIM”</h3>

          <p className="end-label">
            Confirmem a vossa presença para celebrarmos juntos
          </p>

          <a
            className="end-button"
            href="https://forms.gle/YJDR978shABFii5P6"
            target="_blank"
          >
            Claro que sim!
          </a>

          <h3 className="end-headline-2">presente</h3>

          <p className="end-label-2">
            A vossa companhia já é o nosso melhor presente! <br />
            <br /> Mas se quiserem contribuir para a nossa lua-de-mel, poderão
            fazê-lo para o nosso IBAN:
          </p>

          <p className="end-number">PT50 0018 0003 6540 5631 0208 4 </p>

          <h2 className="end-big-title">
            VEMO-NOS NA <br /> VÉSPERA DE SÃO JOÃO!
            <br />
            <br />
            23 DE JUNHO DE 2025
          </h2>

          <p className="end-copyright">Carol & Alex</p>

          <video loop autoPlay muted playsInline className="end-video">
            <source src="/assets/macaco.mp4" type="video/mp4" />
          </video>

          <Image src={plantaDireita} alt="Palmeira" className="end-tree" />
        </div>
      </section>
    </main>
  );
}
