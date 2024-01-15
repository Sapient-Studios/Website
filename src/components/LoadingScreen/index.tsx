import { useRef, useEffect } from 'react';
import './styles.css';
import NavIcon from '../../assets/images/NavIcon.svg';
import gsap from 'gsap';


const msg = "Loading - Loading - Loading - ";
const radius = 100;
const rotationSpeed = 0.8; // Adjust this value to control speed (larger number = faster rotation)

const LoadingScreen = () => {

    const cursorPos = useRef({ x: 0, y: 0 });
    let rotation = 0;

    useEffect(() => {
        const body = document.body;
        const loadingScreen = document.querySelector('.loading-screen');
        const loadingText = loadingScreen?.querySelectorAll('.char');

        if (loadingText) {
            // Function to rotate the text
            const rotateText = () => {
                rotation += rotationSpeed; // Increment rotation
            
                loadingText.forEach((char, index) => {
                    const angle = (360 / loadingText.length) * index + rotation;
                    const charX = cursorPos.current.x + radius * Math.cos(angle * (Math.PI / 180));
                    const charY = cursorPos.current.y + radius * Math.sin(angle * (Math.PI / 180));
            
                    gsap.to(char, {
                        x: charX + window.scrollX,
                        y: charY + window.scrollY,
                        rotation: angle + 90,
                        transformOrigin: 'center',
                        duration: 0.12, // Duration of the transition
                        ease: 'sine.inOut',
                    });
                });
            
                requestAnimationFrame(rotateText);
            };
            
            
            
            

            const clearRotate = () => {
                // display none cursor text
                loadingText.forEach((char, index) => {
                    // set display none in classname char
                    gsap.to(char, {
                        opacity: 0,
                        duration: 0.35,
                    });
                });
            };

            rotateText();
        }

    }, []);

    return (
        <div className="loading-screen">
            <div className="loading-text" style={{ backgroundImage: `url(${NavIcon})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: '20vw auto'}}>
                {/* <img src="" alt="" /> */}
            </div>
        </div>
    );
};

export default LoadingScreen;