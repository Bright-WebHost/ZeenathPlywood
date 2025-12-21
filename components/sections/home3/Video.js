'use client'
import { useState } from 'react'

export default function Video() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            {/*Video One Start*/}
            <section className="video-one">
                <div className="container">
                    <div className="video-one__inner">
                        <div className="video-one__shape-1"></div>
                        <div className="video-one__bg"
                            style={{ backgroundImage: 'url(assets/images/backgrounds/198.webp)' }} ></div>

                        <div className="video-one__content">
                            <h3 className="video-one__title">Design. Durability. Delivered.</h3>

                            <div className="video-one__video-link">
                                <a onClick={() => setOpen(true)} className="video-popup">
                                    <div className="video-one__video-icon">
                                        <span className="icon-play"></span>
                                        <i className="ripple"></i>
                                    </div>
                                </a>
                            </div>

                            {/* <p className="video-one__text">watch video</p> */}
                        </div>
                    </div>
                </div>
            </section>
            {/*Video One End*/}

            {/* Custom Video Modal */}
            {isOpen && (
                <div className="custom-video-modal" onClick={() => setOpen(false)}>
                    <div className="custom-video-wrapper" onClick={(e) => e.stopPropagation()}>
                        <video
                            src="/assets/images/backgrounds/zeenath video.mp4"  // <-- your uploaded video path
                            autoPlay
                            controls
                            style={{ width: "100%", borderRadius: "10px" }}
                        />
                    </div>
                </div>
            )}

            {/* Styles */}
            <style>{`
                .custom-video-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                }
                .custom-video-wrapper {
                    max-width: 1200px;
                    width: 90%;
                }
            `}</style>
        </>
    )
}
