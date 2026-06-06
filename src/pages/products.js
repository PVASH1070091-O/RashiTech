export const products = [
  {
    id: 'aether-lamp',
    name: 'Aether Lamp',
    category: 'Ambient Lighting',
    price: '$249',
    accent: '#ff7a18',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'A sculptural lamp designed to soften late-night rooms with a cinematic glow and a brushed metal silhouette.',
    bullets: ['Warm dimmable core', 'Touch-sensitive brass ring', 'Built for reading corners'],
  },
  {
    id: 'nova-chair',
    name: 'Nova Chair',
    category: 'Modern Seating',
    price: '$389',
    accent: '#29d3a3',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'A lounge chair with a low, enveloping profile that turns everyday corners into design moments.',
    bullets: ['High-density foam', 'Powder-coated steel frame', 'Textured woven upholstery'],
  },
  {
    id: 'solis-table',
    name: 'Solis Table',
    category: 'Statement Furniture',
    price: '$519',
    accent: '#6f78ff',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'A compact table with soft geometry and a polished stone top that anchors a room without overpowering it.',
    bullets: ['Solid ash base', 'Sealed travertine top', 'Designed for compact spaces'],
  },
];

export const serviceCategories = {
  educational: {
    eyebrow: 'Education & Presentation',
    title: 'Presentation & EdTech Solutions',
    intro:
      'Empowering classrooms, boardrooms, and auditoriums with cutting-edge interactive and presentation technology.',
    heroImage: '/images/EducationMain.jpeg',
    accent: '#4f8ef7',
    products: [
      {
        name: 'Interactive Flat Panels / Digital Boards',
        image: '/images/InteractiveFlatPanel.jpeg',
        description:
          'Next-generation interactive flat panels built for modern classrooms and corporate boardrooms. Featuring multi-touch displays, built-in Android OS, and seamless integration with learning management systems for an immersive collaborative experience.',
      },
      {
        name: 'Interactive Touch Panels With Sliding Board',
        image: '/images/InteractiveTouchPanel.png',
        description:
          'Responsive multi-touch panels that transform any meeting or classroom into an interactive hub. Designed for precision touch, smooth annotation, and effortless connectivity with laptops and conferencing platforms.',
      },
      {
        name: 'Digital Podiums',
        image: '/images/DigiPodium.png',
        description:
          'Elegant digital podiums combining a built-in display, document camera, and AV controls into a single presenter-friendly unit — ideal for lecture halls, conference rooms, and training centers.',
      },
      {
        name: 'Smart Podiums / Electronic Lecterns',
        image: '/images/smPodium-removebg-preview.png',
        description:
          'Feature-rich smart lecterns with integrated microphones, touch screens, and AV switching capabilities, enabling presenters to deliver professional, seamless lectures and keynotes.',
      },
      {
        name: 'Presentation Systems',
        image: '/images/presentationSystem-removebg-preview.png',
        description:
          'All-in-one wireless presentation systems that allow multiple participants to share content from any device instantly — no cables, no adapters, no friction.',
      },
      {
        name: 'TV & Interactive Panel Trolleys',
        image: '/images/panelTrolley-removebg-preview.png',
        description:
          'Height-adjustable, mobile trolleys designed to hold large-format TVs and interactive panels securely, making it easy to move your display between classrooms, conference rooms, or event spaces.',
      },
      {
        name: 'VC (Video Conferencing) Solutions',
        image: '/images/VCSystem.jpeg',
        description:
          'Professional-grade video conferencing systems with wide-angle cameras, echo-cancelling microphones, and seamless integration with Zoom, Teams, and Google Meet for crystal-clear remote collaboration.',
      },
      {
        name: 'OPS',
        image: '/images/Router-removebg-preview.png',
        description:
          'OPS (Open Pluggable Specification) modules are compact computing solutions designed for interactive panels and digital displays, enabling seamless integration and high-performance operation. They provide efficient processing power for smart classrooms, conferencing systems, and digital signage applications.',
      }
    ],
  },

  entertainment: {
    eyebrow: 'Audio & Entertainment',
    title: 'Audio & Home Entertainment',
    intro:
      'Transforming living spaces and demo rooms into cinematic and acoustic masterpieces with world-class audio and entertainment systems.',
    heroImage: '/images/AudioHomeMain.jpeg',
    accent: '#f7874f',
    products: [
      {
        name: 'Home Theatre Systems',
        image: '/images/HTSystem-removebg-preview.png',
        description:
          'Immersive home theatre systems combining high-lumen projectors or OLED displays with surround sound, acoustic paneling, and professional-grade calibration for a true cinema experience at home.',
      },
      {
        name: 'Professional Audio Solutions',
        image: '/images/ProfessionalAudioSystem-removebg-preview.png',
        description:
          'Engineered audio systems for auditoriums, performance venues, and large conference halls — delivering powerful, balanced sound with line arrays, subwoofers, amplifiers, and DSP processing.',
      },
      {
        name: 'Acoustic Solutions',
        image: '/images/AcousticSol.jpeg',
        description:
          'Custom acoustic treatment panels, diffusers, and bass traps designed to eliminate unwanted reflections and reverb, creating perfectly tuned sonic environments for studios, theatres, and meeting rooms.',
      },
      {
        name: 'Recliners for Home Theatre & Demo Rooms',
        image: '/images/Recliners-removebg-preview.png',
        description:
          'Premium motorized recliners and tiered seating systems purpose-built for home theatres and showroom demo spaces, combining ergonomic comfort with cinematic aesthetics.',
      },
      {
        name: 'Amplifiers & Power amplifiers',
        image: '/images/Amplifiers-removebg-preview.png',
        description:
          'Professional amplifiers and power amplifiers deliver clear, powerful, and distortion-free audio performance for auditoriums, conference halls, entertainment venues, and commercial spaces. Designed for reliability and efficiency, they ensure consistent sound quality across various audio environments.',
      },
    ],
  },

  displaySol: {
    eyebrow: 'Display & Visual',
    title: 'Display & Visual Solutions',
    intro:
      'Delivering stunning visual experiences across classrooms, command centers, retail spaces, and immersive environments with cutting-edge display technology.',
    heroImage: '/images/Display&VisualSol.jpeg',
    accent: '#8bb8ff',
    products: [
      {
        name: 'Projectors',
        image: '/images/Projector1-removebg-preview.png',
        description:
          'High brightness laser and 4K projectors designed for classrooms, auditoriums, simulation environments, and immersive entertainment spaces.',
      },
      {
        name: 'Projector Screens',
        image: '/images/FixedBoard.jpeg',
        description:
          'Premium fixed-frame and motorized projector screens delivering sharp visuals, deep contrast, and cinematic presentation quality.',
      },
      {
        name: 'Tripod Stand Screens',
        image: '/images/tripodstandscreeen-removebg-preview.png',
        description:
          'Portable tripod projection screens suitable for training rooms, events, educational sessions, and business presentations.',
      },
      {
        name: 'Active LED Walls / LED Display Solutions',
        image: '/images/reliable-active-led-display.webp',
        description:
          'Large-scale LED display systems for command centers, events, immersive spaces, advertising, and digital experiences.',
      },
      {
        name: 'Signages / Digital Signage',
        image: '/images/DigitalSingage.png',
        description:
          'Dynamic digital signage solutions for retail, hospitality, education, transportation, and enterprise communication.',
      },
    ],
  },

  camera: {
    eyebrow: 'Camera & Conferencing',
    title: 'Camera & Conferencing',
    intro:
      'Enabling seamless hybrid collaboration and professional broadcasting with advanced camera and conferencing systems.',
    heroImage: '/images/CameraConferecing.jpeg',
    accent: '#4fcfb0',
    products: [
      {
        name: '4K PTZ Cameras',
        image: '/images/PTZCamera-removebg-preview copy.png',
        description:
          'Remote-controlled 4K Pan-Tilt-Zoom cameras with ultra-low latency, wide dynamic range, and smooth motorized movement — perfect for lecture capture, live streaming, and boardroom conferencing.',
      },
      {
        name: 'Conference Room Solutions',
        image: '/images/ConferenceSol.jpeg',
        description:
          'End-to-end conference room setups integrating displays, cameras, microphone arrays, and control systems into a unified, one-touch meeting experience compatible with all major platforms.',
      },
      {
        name: 'Hybrid Classroom Solutions',
        image: '/images/HybridClassSol.jpeg',
        description:
          'Intelligent hybrid classroom systems that bridge in-person and remote learners with auto-tracking cameras, ceiling microphones, and interactive displays — ensuring every student is seen and heard.',
      },
      {
        name: 'Cable cubby',
        image: '/images/CabelCubby-removebg-preview.png',
        description:
          'Cable cubbies provide organized and concealed connectivity solutions for conference tables, workstations, and collaborative environments. They ensure easy access to power, data, and AV ports while maintaining a clean and professional workspace appearance.',
      },
    ],
  },

  accessories: {
    eyebrow: 'Accessories & Support',
    title: 'Accessories & Support Products',
    intro:
      'Completing every AV installation with premium mounts, connectivity solutions, and professional integration services.',
    heroImage: '/images/Accessories.jpeg',
    accent: '#c084fc',
    products: [
      {
        name: 'Mounts & Stands',
        image: '/images/stand-removebg-preview.png',
        description:
          'Heavy-duty wall mounts, ceiling brackets, and floor stands engineered for flat panels, projectors, and interactive displays — adjustable, secure, and aesthetically clean.',
      },
      {
        name: 'AV Accessories',
        image: '/images/AVAccessories.png',
        description:
          'A comprehensive range of AV accessories including switchers, splitters, extenders, and signal converters to optimize and extend your audiovisual infrastructure.',
      },
      {
        name: 'Connectivity Accessories',
        image: '/images/Connectivity.jpeg',
        description:
          'High-speed HDMI cables, USB-C hubs, wireless presentation dongles, and structured cabling solutions ensuring reliable, high-bandwidth connectivity across all your devices.',
      },
      {
        name: 'Installation & Integration Solutions',
        image: '/images/Installation&IntegratedCol.jpeg',
        description:
          'Professional AV design, installation, commissioning, and after-sales support — ensuring every system is deployed correctly, calibrated perfectly, and maintained reliably.',
      },
     {
  name: 'Projector Lift – Smart & Elegant Ceiling Integration',
  image: '/images/projectorLift.jpeg',
  description: `
A Projector Lift is a motorized mechanism that conceals your projector inside the ceiling when not in use and smoothly lowers it at the touch of a button whenever needed.

• Clean and clutter-free appearance

• Enhances the aesthetics of home theatres, boardrooms, and auditoriums

• Protects the projector from dust and accidental damage

• Quiet and smooth motorized operation

• Compatible with most projector models

• Ideal for luxury home theatres and professional AV installations
`
}
    ],
  },
};
