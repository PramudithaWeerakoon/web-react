import React, { useState, useEffect } from 'react';
import { 
  //Music, 
  Calendar, 
  Youtube, 
  Instagram, 
  //Facebook, 
  //Twitter, 
  //Mail, 
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Linkedin
} from 'lucide-react';

function App() {
  const [showCookies, setShowCookies] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const performanceImages = [
    "images/p1.jpg",
    "images/p2.jpg",
    "images/p3.jpg",
    "images/p4.jpg"
  ];

  const videos = [
    {
      thumbnail: "images/v1.jpg",
      title: "Crystallize",
      url: "https://www.youtube.com/embed/aHjpOzsQ9YI"
    },
    {
      thumbnail: "images/v2.jpeg",
      title: "Underground",
      url: "https://www.youtube.com/embed/EJ09pSuA9hw"
    },
    {
      thumbnail: "images/v3.jpg",
      title: "Guardian",
      url: "https://www.youtube.com/embed/4MCjU-Du3eI"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % performanceImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + performanceImages.length) % performanceImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-sky-50 text-gray-800">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              Tikirimali Wickramasinghe
            </h1>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Videos', 'Tour', 'Social', 'Contact'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`hover:text-pink-500 transition-colors duration-300 animate-fade-in opacity-0 stagger-${index + 1}`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen relative overflow-hidden gradient-overlay">
        <div className="absolute inset-0">
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-6">
              <h2 className={`text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-orange-400 to-sky-400 bg-clip-text text-transparent transform ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
                Tikirimali Wickramasinghe
              </h2>
              <p className={`text-xl md:text-2xl text-gray-600 transform ${isVisible ? 'animate-fade-in stagger-1' : 'opacity-0'}`}>
                Classical Fusion Cellist
              </p>
              <button 
                onClick={() => {
                  setShowVideo(true);
                  setCurrentVideo(videos[0].url);
                }}
                className={`bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto transform ${isVisible ? 'animate-fade-in stagger-2' : 'opacity-0'}`}
              >
                <Play size={20} />
                <span>Watch Latest Performance</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in opacity-0">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                About Tikirimali Wickramasinghe
              </h1>
                <p className="text-lg text-gray-600">
                A virtuoso cellist known for blending classical mastery with contemporary innovation. 
                Her performances captivate audiences worldwide, bringing fresh perspective to both 
                traditional and modern compositions.
                </p>
                <p className="text-lg text-gray-600">
                Tikirimali has collaborated with numerous renowned artists and orchestras, 
                showcasing her versatility and passion for music. Her dedication to her craft 
                and her ability to connect with audiences make her a standout performer in the 
                world of classical fusion.
                </p>
              <p className="text-lg text-gray-600">
                With a unique approach to classical fusion, she creates unforgettable musical 
                experiences that bridge the gap between classical tradition and modern expression.
              </p>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500 animate-fade-in opacity-0 stagger-1">
              <img 
              src="images/icon.jpg" 
              alt="Tikirimali Wickramasinghe performing"
              className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 gradient-overlay">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent animate-fade-in opacity-0">
        Performance Gallery
          </h2>
          <div className="relative overflow-hidden rounded-lg shadow-xl animate-scale-in opacity-0 max-w-3xl mx-auto">
        <img 
          src={performanceImages[currentImageIndex]}
          alt="Performance"
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
        />
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 bg-white/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent animate-fade-in opacity-0">
            Latest Videos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div 
                key={index} 
                className={`group relative cursor-pointer animate-fade-in opacity-0 stagger-${index + 1}`}
                onClick={() => {
                  setShowVideo(true);
                  setCurrentVideo(video.url);
                }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full aspect-video object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/50 to-orange-400/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Play size={48} className="text-white transform scale-75 group-hover:scale-100 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mt-4 text-gray-800">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Section */}
      <section id="tour" className="py-20 gradient-overlay">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent animate-fade-in opacity-0">
            Tour Dates
          </h2>
          <div className="space-y-6">
            {[
              { date: 'TBA', location: 'TBA', status: 'TBA' },
              { date: 'TBA', location: 'TBA', status: 'TBA' },
              { date: 'TBA', location: 'TBA', status: 'TBA' },
              { date: 'TBA', location: 'TBA', status: 'TBA' }
            ].map((show, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-between p-6 bg-white/80 backdrop-blur-sm rounded-lg hover:shadow-lg transition-all duration-300 animate-fade-in opacity-0 stagger-${index + 1}`}
              >
                <div className="flex items-center space-x-6">
                  <Calendar className="text-pink-500" />
                  <div>
                    <p className="font-bold text-gray-800">{show.date}</p>
                    <p className="text-gray-600">{show.location}</p>
                  </div>
                </div>
                <button 
                  className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                    show.status === 'Sold Out' 
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-pink-500 to-orange-400 text-white hover:shadow-lg hover:scale-105'
                  }`}
                >
                  {show.status}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section id="socials" className="py-20 bg-white/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent animate-fade-in opacity-0">
            Connect
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Youtube size={32} className="text-red-500" />, name: 'YouTube', url: 'https://www.youtube.com/channel/UC30emywZD2tz7epYVRWujGQ' },
              { icon: <Instagram size={32} className="text-pink-500" />, name: 'Instagram', url: 'https://www.instagram.com/tikiriii.w/' },
              { icon: <Linkedin size={32} className="text-blue-500" />, name: 'Linkedin', url: 'https://www.linkedin.com/in/tikirimali-wickramasinghe-2653a3262/?originalSubdomain=lk' },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><path fill="#25D366" d="M16 0C7.163 0 0 7.163 0 16c0 2.82.735 5.47 2.02 7.78L0 32l8.22-2.02A15.92 15.92 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.29 23.71c-.34.95-1.68 1.75-2.75 1.98-.73.16-1.68.3-5.03-1.07-4.23-1.75-6.94-6.03-7.15-6.3-.21-.28-1.7-2.27-1.7-4.33 0-2.06 1.08-3.08 1.47-3.5.34-.36.9-.52 1.42-.52.17 0 .32.01.46.02.4.02.6.04.86.66.34.78 1.1 2.68 1.2 2.88.1.2.17.44.03.7-.13.26-.2.42-.4.64-.2.22-.42.5-.6.67-.2.2-.42.42-.18.82.24.4 1.06 1.74 2.28 2.82 1.57 1.4 2.88 1.84 3.28 2.04.4.2.64.18.88-.1.24-.28 1.02-1.18 1.3-1.58.28-.4.56-.34.94-.2.38.14 2.4 1.13 2.8 1.34.4.2.66.3.76.46.1.16.1.92-.24 1.87z" /></svg>, name: 'WhatsApp', url: 'https://wa.me/+94741164427' }
            ].map((social, index) => (
              <a 
              key={index}
              href={social.url}
              className={`flex flex-col items-center p-8 bg-white/80 backdrop-blur-sm rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 group animate-fade-in opacity-0 stagger-${index + 1}`}
              >
              <div className="group-hover:text-orange-400 transition-colors duration-300 animate-float">
              {social.icon}
              </div>
              <span className="font-bold text-gray-800 mt-4">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 gradient-overlay">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent animate-fade-in opacity-0">
        Contact
          </h2>
          <div className="max-w-2xl mx-auto">
        <form 
          className="space-y-6 animate-scale-in opacity-0"
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const data = {
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message')
            };

            try {
          await fetch('https://api.emailservice.com/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic ' + btoa('tikiriicontact@gmail.com:Tikiri2003@')
            },
            body: JSON.stringify({
              to: 'tikiriii.w@gmail.com',
              from: 'tikiriicontact@gmail.com',
              subject: 'New Contact Form Submission',
              text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`
            })
          });
          alert('Message sent successfully!');
            } catch (error) {
          console.error('Error sending email:', error);
          alert('Failed to send message. Please try again later.');
            }
          }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">Name</label>
            <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
          required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">Email</label>
            <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
          required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">Message</label>
            <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
          required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Send Message
          </button>
        </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-50 via-orange-50 to-sky-50 py-12 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">© 2024 Tikirimali Wickramasinghe. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">Terms of Service</a>
                <a href="#contact" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      {showCookies && (
        <div className="fixed bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 p-4 z-50 animate-slide-in">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => setShowCookies(false)}
                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white hover:shadow-lg hover:scale-105 rounded-lg transition-all duration-300"
              >
                Accept
              </button>
              <button 
                onClick={() => setShowCookies(false)}
                className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg transition-all duration-300"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-4xl animate-scale-in">
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-pink-300 transition-colors duration-300"
            >
              <X size={24} />
            </button>
            <div className="relative pt-[56.25%] rounded-lg overflow-hidden shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={currentVideo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;