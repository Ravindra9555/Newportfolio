// src/data/projects.ts
export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  github?: string
  liveLink?: string
  features: string[]
  image: string
  category: 'professional' | 'personal'
  company?: string
  period?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'BaelHealth',
    description: 'Multi-tenant healthcare platform',
    longDescription: 'A comprehensive healthcare platform with multi-tenancy support for clinics, hospitals, and individual practitioners. Built with modern tech stack focusing on security and scalability for healthcare data management.',
    technologies: ['React.js', 'TypeScript', 'PostgreSQL', 'Express.js', 'Node.js', 'Recharts', 'JWT', 'Redis'],
    liveLink: 'https://baelhealth.com/',
    features: [
      'Secure e-prescription module with digital signatures',
      'Role-based access control (Admin, Doctor, Patient, Clinic Staff, Hospital)',
      'Real-time appointment scheduling system',
      'Digital health records management with audit trails',
      'Multi-tenant architecture supporting multiple clinics',
      'Vitals tracking and medical history dashboard'
    ],
    image: '/projects/bael.png',
    category: 'professional',
    company: 'Tecraki Technology Solutions',
    period: 'Dec 2023 - Present'
  },
  {
    id: 2,
    title: 'Saarthi Sangha',
    description: 'Mental Health Platform',
    longDescription: 'A comprehensive mental wellness platform offering mentorship, counseling, and educational resources. Focuses on creating a supportive community with professional guidance.',
    technologies: ['MERN Stack', 'Zustand', 'Razorpay', 'Next.js', 'Shadcn', 'Socket.io', 'Nodemailer'],
    liveLink: 'https://saarthisangha.com/',
    features: [
      'Complete booking & scheduling system with calendar integration',
      'Secure payment processing via Razorpay',
      'Educational content management system',
      'User progress tracking and session history',
      'Real-time chat support for immediate assistance',
      'Admin dashboard for counselor management'
    ],
    image: '/projects/saarthi.png',
    category: 'professional',
    company: 'Tecraki Technology Solutions',
    period: 'Dec 2023 - Present'
  },
  {
    id: 3,
    title: 'ProjectFlow',
    description: 'Collaborative Project Management Platform',
    longDescription: 'A full-featured project management tool with Kanban interface, designed for engineering teams to collaborate efficiently with real-time updates and role-based permissions.',
    technologies: ['Next.js', 'TypeScript', 'Mongoose', 'Zustand', 'dnd-kit', 'Socket.io', 'Chart.js'],
    liveLink: 'https://projectflow-eight.vercel.app/',
    github: 'https://github.com/Ravindra9555/Project_management_App',
    features: [
      'Kanban-style interface with intuitive drag-and-drop',
      'Real-time collaboration with Socket.io',
      'Secure invitation system with email verification',
      'Role-based access control (Admin, Engineer, Viewer)',
      'Task assignment and progress tracking',
      'File attachments and comment threads',
      'Analytics dashboard with project metrics'
    ],
    image: '/projects/projectflow.png',
    category: 'personal'
  },
  {
    id: 4,
    title: 'Shivam Medical',
    description: 'E-commerce & Clinic Management',
    longDescription: 'A dual-purpose platform combining medical e-commerce with clinic management. Features include online pharmacy, appointment booking, and inventory management.',
    technologies: ['MERN Stack', 'Zustand', 'Razorpay', 'Material UI', 'Cloudinary', 'Nodemailer'],
    liveLink: 'https://shivampharmacy.vercel.app/',
    github: 'https://github.com/Ravindra9555/Shivam_medical_MUI',
    features: [
      'Secure payment processing via Razorpay integration',
      'Comprehensive inventory management system',
      'Appointment booking with doctor availability',
      'Prescription management and refill requests',
      'Admin panel for orders and user management',
      'Product catalog with search and filters',
      'Order tracking and delivery status'
    ],
    image: '/projects/shivam.png',
    category: 'personal'
  },
  {
    id: 5,
    title: 'Expense Tracker',
    description: 'Personal Finance Management',
    longDescription: 'A personal finance application for tracking daily expenses, income, and generating detailed financial reports with visual analytics.',
    technologies: ['MERN Stack', 'Cloudinary', 'Chart.js', 'JWT', 'Express-validator'],
    liveLink: 'https://expensetracker-money.vercel.app/',
    github: 'https://github.com/Ravindra9555/Expense-Tracker-web-application-react-bootstrap',
    features: [
      'Receipt upload and management via Cloudinary',
      'Data visualization with Chart.js for spending patterns',
      'Monthly and yearly financial reports',
      'Category-based expense tracking',
      'Budget planning and alerts',
      'Export data to CSV/PDF',
      'Dark/light mode support'
    ],
    image: '/projects/expense-tracker.png',
    category: 'personal'
  },
  // {
  //   id: 6,
  //   title: 'Weather App',
  //   description: 'Real-time Weather Application',
  //   longDescription: 'A responsive weather application providing real-time weather data, forecasts, and location-based weather information with clean UI.',
  //   technologies: ['React.js', 'OpenWeather API', 'Axios', 'Tailwind CSS', 'Geolocation API'],
  //   liveLink: '#',
  //   github: 'https://github.com/Ravindra9555/weather-app',
  //   features: [
  //     'Real-time weather data from OpenWeather API',
  //     '5-day weather forecast with hourly breakdown',
  //     'Location-based weather using Geolocation API',
  //     'Search weather by city name',
  //     'Temperature unit conversion (Celsius/Fahrenheit)',
  //     'Responsive design for all devices',
  //     'Weather alerts and notifications'
  //   ],
  //   image: '/projects/weather-app.png',
  //   category: 'personal',
  //   period: 'Aug 2023 - Sep 2023'
  // }
]