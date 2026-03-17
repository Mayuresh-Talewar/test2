import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const Navbar = () => (
        <nav className="bg-blue-600 p-4 text-white">
            <ul className="flex justify-around">
                <li onClick={() => setCurrentPage('home')}>Home</li>
                <li onClick={() => setCurrentPage('about')}>About</li>
                <li onClick={() => setCurrentPage('contact')}>Contact</li>
            </ul>
        </nav>
    );

    const HomePage = () => (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Welcome to Our Website</h1>
            <p>Explore our content and learn more about what we offer.</p>
        </div>
    );

    const AboutPage = () => (
        <div className="p-4">
            <h1 className="text-2xl font-bold">About Us</h1>
            <p>We are a team dedicated to providing the best service.</p>
        </div>
    );

    const ContactPage = () => (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Contact Us</h1>
            <p>Reach out via our email: contact@ourwebsite.com</p>
        </div>
    );

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />;
            case 'about':
                return <AboutPage />;
            case 'contact':
                return <ContactPage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-900 text-white">
            <Navbar />
            {renderPage()}
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);