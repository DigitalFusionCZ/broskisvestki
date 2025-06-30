'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.title = "Automatizovaná správa TLS certifikátů | SecureCert Solutions";
    
    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#212529" /><stop offset="100%" stop-color="#E9ECEF" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.setAttribute('rel', 'icon');
      document.head.appendChild(faviconLink);
    }
    (faviconLink as HTMLLinkElement).href = faviconUrl;
  }, []);

  return (
    <div className="font-sans text-[#212529] bg-[#FFFFFF] antialiased">
      <header className="fixed top-0 left-0 w-full bg-[#FFFFFF] z-50 shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight text-[#212529]">
            SecureCert Solutions s.r.o.
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-[#E9ECEF] transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-[#E9ECEF] transition-colors duration-300">O nás</a>
            <a href="#services" className="hover:text-[#E9ECEF] transition-colors duration-300">Služby</a>
            <a href="#contact" className="hover:text-[#E9ECEF] transition-colors duration-300">Kontakt</a>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#212529] focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-[#FFFFFF] py-4 shadow-md">
            <nav className="flex flex-col items-center space-y-4">
              <a href="#home" onClick={toggleMenu} className="block text-[#212529] hover:text-[#E9ECEF] transition-colors duration-300">Home</a>
              <a href="#about" onClick={toggleMenu} className="block text-[#212529] hover:text-[#E9ECEF] transition-colors duration-300">O nás</a>
              <a href="#services" onClick={toggleMenu} className="block text-[#212529] hover:text-[#E9ECEF] transition-colors duration-300">Služby</a>
              <a href="#contact" onClick={toggleMenu} className="block text-[#212529] hover:text-[#E9ECEF] transition-colors duration-300">Kontakt</a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="min-h-screen pt-24 flex items-center justify-center text-center bg-[#E9ECEF]">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-5xl md:text-7xl font-light leading-tight text-[#212529]">
              SecureCert Solutions s.r.o.
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-[#212529]">
              Certifikáty pod kontrolou – automatizace, která šetří čas i nervy.
            </p>
          </div>
        </section>

        <section id="about" className="py-24 bg-[#FFFFFF]">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-4xl text-center font-light mb-12 text-[#212529]">O nás</h2>
            <p className="text-lg leading-relaxed mb-6 text-center text-[#212529]">
              SecureCert Solutions je česká technologická firma specializující se na automatizovanou správu TLS/SSL certifikátů. Vyvíjíme vlastní nástroje, které umožňují bezpečné, rychlé a bezchybné ověřování, generování a obnovu certifikátů v rámci moderní infrastruktury.
            </p>
            <p className="text-lg leading-relaxed text-center text-[#212529]">
              Naším cílem je ulehčit IT správcům každodenní rutinu, zvýšit bezpečnost a předejít výpadkům způsobeným expirovanými certifikáty. Zaměřujeme se na zařízení bez snadno přístupného webového rozhraní, přičemž využíváme DNS-01 nebo TLS-ALPN-01 challenge protokolu ACME, ale také umíme pomocí Selenium přímo interagovat s webovými zařízeními a zabezpečit je.
            </p>
            <p className="mt-8 text-xl font-medium text-center text-[#212529]">
              Váš klid = naše technologie.
            </p>
          </div>
        </section>

        <section id="services" className="py-24 bg-[#E9ECEF]">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-4xl text-center font-light mb-12 text-[#212529]">Služby</h2>
            <p className="text-lg leading-relaxed text-center text-[#212529]">
              Automated TLS/SSL Certificate Management: Streamlined certificate lifecycle for secure and uninterrupted operations.
            </p>
            <p className="text-lg leading-relaxed text-center text-[#212529] mt-4">
              Custom Tools Development: Bespoke solutions for secure, rapid, and error-free certificate verification, generation, and renewal.
            </p>
            <p className="text-lg leading-relaxed text-center text-[#212529] mt-4">
              Infrastructure Integration: Seamless management of certificates in modern IT environments.
            </p>
          </div>
        </section>

        <section id="contact" className="py-24 bg-[#FFFFFF]">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-4xl text-center font-light mb-12 text-[#212529]">Kontakt</h2>
            <div className="text-lg text-center leading-relaxed space-y-4 text-[#212529]">
              <p>📧 info@securecert.cz</p>
              <p>📞 +420 777 123 456</p>
              <p>🏢 Nádražní 10, 110 00 Praha 1, Česká republika</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#212529] text-[#E9ECEF] py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#FFFFFF] transition-colors duration-300">DigitalFusion</a>
          </p>
        </div>
      </footer>
    </div>
  );
}