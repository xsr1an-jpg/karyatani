import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="bg-[#3e5b3f] text-[#f6f2ea] py-20 px-6 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f6f2ea]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-4xl font-black mb-4">
              Karya Tani
            </h3>

            <p className="text-[#d8d1c5] leading-relaxed">
              Brand makanan ringan berbasis hasil tani Indonesia yang menghadirkan cita rasa nusantara berkualitas.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/karyatani.id"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#f6f2ea]/10 flex items-center justify-center hover:bg-[#f6f2ea]/20 hover:scale-110 transition-all"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://wa.me/6285294964110"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#f6f2ea]/10 flex items-center justify-center hover:bg-[#f6f2ea]/20 hover:scale-110 transition-all"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5">
              Produk
            </h4>

            <div className="space-y-3 text-[#d8d1c5]">
              <p>Keripik Singkong</p>
              <p>Keripik Pisang</p>
              <p>Keripik Talas</p>
              <p>Pangsit & Sistik</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5">
              Perusahaan
            </h4>

            <div className="space-y-3 text-[#d8d1c5]">
              <p>Tentang Kami</p>
              <p>Visi & Misi</p>
              <p>Legalitas</p>
              <p>Reseller</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5">
              Hubungi Kami
            </h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 shrink-0" />
                <span className="text-[#d8d1c5]">
                  info@karyatani.id
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 shrink-0" />
                <span className="text-[#d8d1c5]">
                  +62 852-9496-4110
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0" />
                <span className="text-[#d8d1c5]">
                  Bandung Barat, Jawa Barat
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#f6f2ea]/15 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#cfc6b8] text-sm">
            © 2026 Karya Tani. Semua hak dilindungi.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/karyatani.id"
              target="_blank"
              rel="noreferrer"
              className="text-[#f6f2ea] hover:text-white transition"
            >
              Instagram
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#f6f2ea] font-semibold"
            >
              Store Resmi
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
