'use client'
import Layout from "@/components/layout/Layout"
import CounterUp from "@/components/elements/CounterUp"
import Link from "next/link"
import { useState } from 'react'
import Team from "@/components/sections/home3/Team"
import SideButton from "@/components/layout/SideButton"

const logos = [
  { name: "V4 Ply", image: "assets/images/brand/4.png" },
  { name: "Mikasa", image: "assets/images/brand/5.webp" },
  { name: "K-board", image: "assets/images/brand/6.webp" },
  { name: "Green Ply", image: "assets/images/brand/7.webp" },
  { name: "Green Lam", image: "assets/images/brand/8.webp" },
  { name: "Merino", image: "assets/images/brand/9.webp" },
  { name: "Century", image: "assets/images/brand/10.webp" },
  { name: "Aica Lam", image: "assets/images/brand/11.webp" },
  { name: "Airo Lam", image: "assets/images/brand/12.webp" },
  { name: "Croma", image: "assets/images/brand/13.webp" },
  { name: "Virgo", image: "assets/images/brand/14.webp" },
  { name: "Royal Touche", image: "assets/images/brand/15.webp" },
  { name: "Kridha", image: "assets/images/brand/16.webp" },
  { name: "Glorio", image: "assets/images/brand/17.webp" },
  { name: "Glo", image: "assets/images/brand/18.webp" },
  { name: "Pebble", image: "assets/images/brand/19.webp" },
  { name: "Godrej", image: "assets/images/brand/20.webp" },
  { name: "Yale", image: "assets/images/brand/21.webp" },
  { name: "Dorset", image: "assets/images/brand/22.webp" },
  { name: "Sleek", image: "assets/images/brand/23.webp" },
  { name: "Hafle", image: "assets/images/brand/24.webp" },
  { name: "Blum", image: "assets/images/brand/25.webp" },
  { name: "Hittech", image: "assets/images/brand/26.webp" },
  { name: "Sap", image: "assets/images/brand/27.webp" },
  { name: "Liftor", image: "assets/images/brand/28.webp" },
  { name: "Labacha", image: "assets/images/brand/29.webp" },
  { name: "Tunes", image: "assets/images/brand/30.webp" },
  { name: "Shapes", image: "assets/images/brand/31.webp" },
  { name: "Atcraft", image: "assets/images/brand/32.webp" },
  { name: "Quba", image: "assets/images/brand/33.webp" },
  { name: "Jivanjor", image: "assets/images/brand/34.webp" },
  { name: "Karigar", image: "assets/images/brand/35.webp" },
  { name: "Abro", image: "assets/images/brand/36.webp" },
  { name: "Bostik", image: "assets/images/brand/37.webp" },
  { name: "Mikasa Lam", image: "assets/images/brand/38.webp" },
  { name: "Onyx", image: "assets/images/brand/39.webp" },
  { name: "Olive", image: "assets/images/brand/40.webp" },
  { name: "Blues", image: "assets/images/brand/41.webp" },
  { name: "Master Piece Bath Fittings", image: "assets/images/brand/42.webp" },
  { name: "Magnus Plywood", image: "assets/images/brand/43.webp" },
  { name: "Alliance Plywood", image: "assets/images/brand/44.webp" },
  { name: "Western India Plywood", image: "assets/images/brand/45.webp" },
  { name: "Sara Hardware Fittings", image: "assets/images/brand/46.webp" },
];

export default function Brands() {
  return (
    <>
      <Layout headerStyle={5} footerStyle={3} breadcrumbTitle="Brands">
        <SideButton/>
        <div className="page-content">
          <div className="section-full p-tb80 inner-page-padding">
            <div className="container">
              <div className="logos-grid-wrapper">
                <div className="logos-grid">
                  {logos.map((logo, index) => (
                    <div key={index} className="logo-card">
                      <div className="logo-image-container">
                        <img 
                          src={logo.image} 
                          alt={logo.name} 
                          className="logo-image"
                          loading="lazy"
                        />
                      </div>
                      {/* <div className="logo-name">{logo.name}</div> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          .logos-grid-wrapper {
            width: 100%;
            overflow: hidden;
            padding: 40px 0;
          }
          
          .logos-grid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 15px;
            margin: 0 auto;
            max-width: 1400px;
          }
          
          .logo-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 15px 15px;
            border: 2px solid #e5e7eb;
            border-radius: 12px;
            background: white;
            transition: all 0.3s ease;
            min-height: 150px;
            position: relative;
            overflow: hidden;
          }
          
          .logo-card:hover {
            border-color: #06A6A1;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            transform: translateY(-5px);
          }
          
          .logo-image-container {
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
            padding: 1px;
          }
          
          .logo-image {
            max-width: 100%;
            max-height: 100%;
            width: auto;
            height: auto;
            object-fit: contain;
            transition: transform 0.3s ease;
          }
          
          .logo-card:hover .logo-image {
            transform: scale(1.05);
          }
          
        //   .logo-name {
        //     text-align: center;
        //     font-size: 14px;
        //     font-weight: 500;
        //     color: #374151;
        //     margin-top: 5px;
        //     padding: 0 5px;
        //     line-height: 1.3;
        //   }
          
          /* Responsive Design */
          @media (max-width: 1400px) {
            .logos-grid {
              grid-template-columns: repeat(5, 1fr);
              gap: 20px;
            }
          }
          
          @media (max-width: 1200px) {
            .logos-grid {
              grid-template-columns: repeat(4, 1fr);
              gap: 20px;
            }
          }
          
          @media (max-width: 992px) {
            .logos-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
            }
            
            .logo-card {
              padding: 20px 12px;
              min-height: 140px;
            }
            
            .logo-image-container {
              height: 70px;
            }
          }
          
          @media (max-width: 768px) {
            .logos-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 15px;
            }
            
            .logo-card {
              padding: 18px 10px;
              min-height: 130px;
            }
            
            .logo-image-container {
              height: 65px;
            }
            
            // .logo-name {
            //   font-size: 13px;
            // }
          }
          
          @media (max-width: 480px) {
            .logos-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 8px;
            }
            
            .logo-card {
              padding: 14px 8px;
              min-height: 70px;
            }
            
            .logo-image-container {
              height: 50px;
              margin-bottom: 10px;
            }
            
            // .logo-name {
            //   font-size: 12px;
            // }
          }
          
          @media (max-width: 360px) {
            .logos-grid {
              grid-template-columns: 1fr;
              gap: 15px;
            }
            
            .logo-card {
              padding: 20px;
              min-height: 140px;
            }
          }
        `}</style>
      </Layout>
    </>
  )
}