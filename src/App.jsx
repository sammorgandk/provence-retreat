import React, { useState } from 'react';
import { Calendar, MapPin, Users, Mail, Phone, Sun, Wine, Palmtree } from 'lucide-react';

export default function RetreatWebsite() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sun className="text-amber-600" size={28} />
            <span className="text-2xl font-serif text-amber-900">Provence Retreat</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm tracking-wide">
            <a href="#about" className="text-amber-800 hover:text-amber-600 transition-colors">ABOUT</a>
            <a href="#itinerary" className="text-amber-800 hover:text-amber-600 transition-colors">ITINERARY</a>
            <a href="#pricing" className="text-amber-800 hover:text-amber-600 transition-colors">PRICING</a>
            <a href="#register" className="text-amber-800 hover:text-amber-600 transition-colors">REGISTER</a>
            <a href="#contact" className="text-amber-800 hover:text-amber-600 transition-colors">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-7xl md:text-8xl font-serif text-amber-900 mb-6 leading-tight">
              A Week in<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
                Provence
              </span>
            </h1>
            <p className="text-2xl text-amber-800 font-light tracking-wide mb-4">
              Summer 2026 • South of France
            </p>
            <div className="flex justify-center gap-6 text-amber-700 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>7 Days, 6 Nights</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Provence</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>Small Group</span>
              </div>
            </div>
          </div>

          {/* Decorative Image Placeholder */}
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl mb-20 group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-400 to-rose-400 opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <Wine size={64} className="mx-auto mb-4 opacity-80 group-hover:scale-110 transition-transform" />
                <p className="text-xl font-serif">Your Journey Awaits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-serif text-amber-900 mb-8 text-center">The Experience</h2>
          <div className="prose prose-lg max-w-none text-amber-900/80 leading-relaxed">
            <p className="text-xl font-light text-center mb-12">
              We design high-aesthetic, small-group trips and residencies that merge nature, culture, 
              and community. Our retreats are all-inclusive, design-driven stays that blend personal growth, 
              social connection, and French hospitality — where you can truly relax, connect, and expand your circles.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 hover:shadow-lg transition-shadow">
                <Sun className="mx-auto mb-4 text-amber-600" size={40} />
                <h3 className="text-xl font-serif mb-2">Nature</h3>
                <p className="text-sm">Immerse yourself in lavender fields, rolling hills, and the natural beauty of Provence</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-100 to-rose-100 hover:shadow-lg transition-shadow">
                <Wine className="mx-auto mb-4 text-rose-600" size={40} />
                <h3 className="text-xl font-serif mb-2">Culture</h3>
                <p className="text-sm">Experience authentic French hospitality, cuisine, and centuries of art and tradition</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-rose-100 to-amber-100 hover:shadow-lg transition-shadow">
                <Palmtree className="mx-auto mb-4 text-green-700" size={40} />
                <h3 className="text-xl font-serif mb-2">Community</h3>
                <p className="text-sm">Connect with thoughtful, creative individuals in an intimate setting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Overview Section */}
      <section id="itinerary" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-serif text-amber-900 mb-12 text-center">Your Week at a Glance</h2>
          <div className="space-y-6">
            {[
              { day: "Day 1", title: "Arrival & Welcome", desc: "Settle into our villa and enjoy a traditional Provençal welcome dinner" },
              { day: "Day 2", title: "Lavender & Wine", desc: "Morning visit to lavender fields, afternoon at a local vineyard" },
              { day: "Day 3", title: "Culinary Journey", desc: "Hands-on cooking workshop with a local chef, market visit" },
              { day: "Day 4", title: "Medieval Villages", desc: "Explore charming hilltop villages and artisan markets" },
              { day: "Day 5", title: "Coastal Escape", desc: "Day trip to the Mediterranean coast" },
              { day: "Day 6", title: "Yoga & Wellness", desc: "Morning yoga, afternoon leisure, spa time at the villa" },
              { day: "Day 7", title: "Celebration", desc: "Farewell dinner under the stars with live music" }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:scale-[1.02] border border-amber-100"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-serif">
                    {item.day.split(' ')[1]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif text-amber-900 mb-2">{item.title}</h3>
                    <p className="text-amber-700">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl text-center">
            <p className="text-amber-900 font-serif text-lg">
              📋 Registered attendees will receive a detailed day-by-day itinerary with timings, addresses, and insider tips!
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-serif text-amber-900 mb-8 text-center">Investment</h2>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-10 border-2 border-amber-200 shadow-xl">
            <div className="text-center mb-8">
              <p className="text-2xl font-serif text-amber-900 mb-4">All-Inclusive Experience</p>
              <p className="text-amber-800 leading-relaxed max-w-2xl mx-auto">
                Seven days and six nights of relaxation in France. Yoga, wine, connection, 
                and networking with thoughtful individuals — all in a beautifully curated setting.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-serif text-xl text-amber-900 mb-4">What's Included</h3>
                <ul className="space-y-2 text-amber-800">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Private villa accommodation (6 nights)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>All meals & beverages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Daily yoga sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Wine tastings & vineyard visits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Cooking workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Guided excursions & activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Local transportation during retreat</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-serif text-xl text-amber-900 mb-4">Optional Add-Ons</h3>
                <p className="text-sm text-amber-700 mb-4 italic">
                  Available for additional cost (details provided upon registration):
                </p>
                <ul className="space-y-2 text-amber-800">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">+</span>
                    <span>Private spa treatments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">+</span>
                    <span>Extended stay options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">+</span>
                    <span>Airport transfers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">+</span>
                    <span>Additional excursions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-100 rounded-xl p-6 text-center border border-amber-300">
              <p className="text-lg font-serif text-amber-900 mb-2">Secure Your Spot</p>
              <p className="text-amber-800">
                A <strong>15% deposit</strong> is required to reserve your place.
              </p>
              <p className="text-sm text-amber-700 mt-3 italic">
                Full pricing and payment details will be shared upon inquiry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-serif text-amber-900 mb-8 text-center">Express Your Interest</h2>
          <p className="text-center text-amber-800 mb-12 text-lg">
            Fill out the form below to receive more information and secure your spot for this transformative experience.
          </p>
          
          {/* Google Form Embed Area */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <button
                onClick={() => setShowForm(!showForm)}
                className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl"
              >
                {showForm ? 'Hide Form' : 'Show Interest Form'}
              </button>
            </div>
            
            {showForm && (
              <div className="mt-6 border-2 border-amber-200 rounded-xl p-4 bg-amber-50">
                <p className="text-center text-amber-800 mb-4 font-serif text-lg">
                  📝 Replace this section with your Google Form embed code
                </p>
                <div className="bg-white rounded-lg p-6 text-sm text-gray-600">
                  <p className="mb-2"><strong>To embed your Google Form:</strong></p>
                  <ol className="list-decimal ml-6 space-y-1">
                    <li>Open your Google Form</li>
                    <li>Click "Send" in the top right</li>
                    <li>Click the "&lt;/&gt;" (embed) icon</li>
                    <li>Copy the iframe code</li>
                    <li>Replace this placeholder div with the iframe</li>
                  </ol>
                  <p className="mt-4 text-xs italic">
                    Example: &lt;iframe src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true" width="100%" height="800"&gt;&lt;/iframe&gt;
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-serif text-amber-900 mb-8">Get in Touch</h2>
          <p className="text-xl text-amber-800 mb-8">
            Have questions? We'd love to hear from you.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <div className="flex items-center justify-center gap-3 text-amber-800">
              <Mail size={24} className="text-amber-600" />
              <a href="mailto:info@provenceretreat.com" className="hover:text-amber-600 transition-colors">
                info@provenceretreat.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-amber-800">
              <Phone size={24} className="text-amber-600" />
              <a href="tel:+1234567890" className="hover:text-amber-600 transition-colors">
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sun className="text-amber-400" size={32} />
            <span className="text-2xl font-serif">Provence Retreat</span>
          </div>
          <p className="text-sm opacity-80">
            © 2025 Provence Retreat. Creating unforgettable experiences in the South of France.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&display=swap');
        
        * {
          font-family: 'Lato', sans-serif;
        }
        
        h1, h2, h3, .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}