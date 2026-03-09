import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
        <div
          className="bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg"
          role="tooltip"
        >
          Chat with us on WhatsApp
        </div>
      </div>
      <a
        href="https://wa.me/61488841883"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="whatsapp.primary_button"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </a>
    </div>
  );
}
