import React , {useState}from "react";
import { Award, X } from "lucide-react";

const certificates = [
  {
    id: 1,
    image: "/certificate/cer1.png",
  },
  {
    id: 2,
    image: "/certificate/cer2.png",
  },
  {
    id: 3,
    image: "/certificate/cer3.png",
  },
];

export default function Certificate() {
    const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section
      id="certificates"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="container max-w-5xl mx-auto text-center z-10">
        {/* Title */}
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1">
            My <span className="text-primary">Certificates</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2 mb-15">
            Here are some of the certifications I have earned while improving my
            web development skills.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 opacity-0 animate-fade-in-delay-3">
          {certificates.map((cert) => (
            <button
              key={cert.id}
              onClick={() => setSelectedImage(cert.image)}
              className="block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 focus:outline-none"
            >
              <img
                src={cert.image}
                alt={`Certificate ${cert.id}`}
                className="w-full h-64 object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-[-15px] right-[-15px] text-white hover:text-red-400"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
