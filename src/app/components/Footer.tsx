"use client";
import { useLanguage } from "../context/LanguageContext";
import en from "../../../i18n/en.json";
import ge from "../../../i18n/ge.json";

export default function Footer() {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : ge;

  const usefulLinks = [
    { name: "MESCS", url: "https://mescs.gov.ge" },
    { name: "Technical University of Munich", url: "https://www.tum.de" },
    { name: "NAEC", url: "https://naec.ge" },
    { name: "NCEQE", url: "https://nceqe.ge" },
  ];

  const socialLinks = [
    { name: "Facebook", url: "https://facebook.com", icon: "f" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "in" },
    { name: "YouTube", url: "https://youtube.com", icon: "▶" },
  ];

  return (
    <footer className="bg-[#15396F] text-white mt-16">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Useful Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t.footer.usefulLinks}</h3>
            <div className="space-y-3">
              {usefulLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white hover:text-blue-200 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t.footer.contactUs}</h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold mb-2">{t.footer.legalAddress}</p>
                <p className="text-white/90">{t.footer.address}</p>
              </div>

              <div>
                <p className="font-bold mb-2">
                  {t.footer.internationalEnquiries}
                </p>
                <div className="space-y-1">
                  <a
                    href={`mailto:${t.footer.email}`}
                    className="block text-white hover:text-blue-200 transition-colors duration-200"
                  >
                    {t.footer.email}
                  </a>
                  <a
                    href={`tel:${t.footer.phone}`}
                    className="block text-white hover:text-blue-200 transition-colors duration-200"
                  >
                    {t.footer.phone}
                  </a>
                  <a
                    href={`mailto:${t.footer.infoEmail}`}
                    className="block text-white hover:text-blue-200 transition-colors duration-200"
                  >
                    {t.footer.infoEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-white/90">{t.footer.copyright}</div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-sm font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
