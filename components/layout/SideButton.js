'use client';

import { useState } from 'react';
import { Phone, MessageCircle, Download } from 'lucide-react';

export default function SideButton() {
  const [isHovered, setIsHovered] = useState({
    call: false,
    whatsapp: false,
    download: false,
  });

  const handleCall = () => {
    window.location.href = 'tel:+919606260928';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/+919606260928', '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/sample.pdf';
    link.download = 'download.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMouseEnter = (button) => {
    setIsHovered((prev) => ({ ...prev, [button]: true }));
  };

  const handleMouseLeave = (button) => {
    setIsHovered((prev) => ({ ...prev, [button]: false }));
  };

  return (
    <div className="side-button-container">
      <div className="button-wrapper">
        <button
          type="button"
          onClick={handleCall}
          onMouseEnter={() => handleMouseEnter('call')}
          onMouseLeave={() => handleMouseLeave('call')}
          className={`btn call ${isHovered.call ? 'hovered' : ''}`}
          aria-label="Call"
        >
          <Phone size={24} />
        </button>

        <button
          type="button"
          onClick={handleWhatsApp}
          onMouseEnter={() => handleMouseEnter('whatsapp')}
          onMouseLeave={() => handleMouseLeave('whatsapp')}
          className={`btn whatsapp ${isHovered.whatsapp ? 'hovered' : ''}`}
          aria-label="WhatsApp"
        >
          <MessageCircle size={24} />
        </button>

        <button
          type="button"
          onClick={handleDownload}
          onMouseEnter={() => handleMouseEnter('download')}
          onMouseLeave={() => handleMouseLeave('download')}
          className={`btn download ${isHovered.download ? 'hovered' : ''}`}
          aria-label="Download"
        >
          <Download size={24} />
        </button>
      </div>

      <style>{`
        .side-button-container {
          position: fixed;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 100;
        }

        .button-wrapper {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-right: 4px;
        }

        @media (max-width: 768px) {
          .side-button-container {
            z-index: 50;
          }
        }

        .btn {
          border: none;
          padding: 16px;
          border-radius: 5px 0 0 5px;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease-in-out;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          transform: scale(1);
          min-width: 60px;
          min-height: 60px;
          background: #E6C714;
        }

        .btn:hover {
          transform: scale(1.1);
          background: #d4b613;
        }

        .btn.hovered {
          transform: scale(1.1);
          background: #d4b613;
        }

        /* Specific button styles if needed */
        .call {
          background: #E6C714;
        }

        .whatsapp {
          background: #E6C714;
        }

        .download {
          background: #E6C714;
        }
      `}</style>
    </div>
  );
}