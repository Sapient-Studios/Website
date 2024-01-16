import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import "./style.css";

const velocity = 0.001; // Adjust this value to change rotation speed

const Globe = ({size}) => {
	const zpos = 9;
	const globeRef = useRef();


	const vertexShader = `
		varying vec3 vWorldPosition;

		void main() {
			vec4 worldPosition = modelMatrix * vec4(position, 1.0);
			vWorldPosition = worldPosition.xyz;
			gl_Position = projectionMatrix * viewMatrix * worldPosition;
		}
	`;

	const fragmentShader = `
		uniform vec3 startColor;
		uniform vec3 endColor;
		uniform float lowerBound;
		uniform float upperBound;
		varying vec3 vWorldPosition;

		void main() {
			// Calculate the normalized position of each vertex
			float normalizedY = (vWorldPosition.y - lowerBound) / (upperBound - lowerBound);
			normalizedY = clamp(normalizedY, 0.0, 1.0); // Ensure it's within the range [0, 1]

			// Mix the colors based on the normalized Y position
			vec3 color = mix(startColor, endColor, normalizedY);
			gl_FragColor = vec4(color, 1.0);
		}
	`;

	const lowerBound = 7; // Lower bound of the globe's Y position
	const upperBound = -10;  // Upper bound of the globe's Y position

	useEffect(() => {
		// Set up the scene, camera, and renderer with transparent background
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, globeRef.current.clientWidth / globeRef.current.clientHeight, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer({ alpha: true });
		renderer.setSize(globeRef.current.clientWidth, globeRef.current.clientHeight);
		globeRef.current.appendChild(renderer.domElement);

		// Set the camera position
		camera.position.z = zpos;
		scene.rotation.x = 8 * (Math.PI / 180);
		// Create the globe with latitude and longitude lines
		const radius = 5;
		const latitudeLines = 48;
		const longitudeLines = 48;
		createGlobeLines(scene, radius, latitudeLines, longitudeLines, 6, 10);

		// Animation loop
		const animate = () => {
			requestAnimationFrame(animate);

			// Continuous rotation
			scene.rotation.y += velocity; // Adjust this value to change rotation speed
			renderer.render(scene, camera);
		};
		animate();

		// Event listener for mouse movement
		const handleMouseMove = event => {
			if (window.width < 1000) return;

			const rotationSpeed = 0.0001;
			const xRotation = rotationSpeed * event.movementY;
			const yRotation = rotationSpeed * event.movementX;

			scene.rotation.x += xRotation;
			scene.rotation.y += yRotation;
		};


		document.addEventListener('mousemove', handleMouseMove);

		// Cleanup function
		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			globeRef.current.removeChild(renderer.domElement);
		};
	}, []);

	const createGlobeLines = (scene, radius, totalLatitudeLines, totalLongitudeLines, renderLatitudeLines, renderLongitudeLines) => {
		const latitudeStep = totalLatitudeLines / renderLatitudeLines;
		const longitudeStep = totalLongitudeLines / renderLongitudeLines;

		// Convert hex colors to THREE.Color
		const startColor = new THREE.Color("#1BF4F9");
		const endColor = new THREE.Color("#002BDC");

		// Create a shader material
		const shaderMaterial = new THREE.ShaderMaterial({
			vertexShader,
			fragmentShader,
			uniforms: {
				startColor: { value: startColor },
				endColor: { value: endColor },
				lowerBound: { value: lowerBound },
				upperBound: { value: upperBound }
			}
		});
		// Create parallels of latitude (horizontal lines)
		for (let lat = 0; lat <= totalLatitudeLines; lat += latitudeStep) {
			const phi = Math.PI * (lat / totalLatitudeLines - 0.5);
			const points = [];
			for (let lon = 0; lon <= totalLongitudeLines; lon++) {
				const theta = 2 * Math.PI * (lon / totalLongitudeLines);
				const x = radius * Math.cos(phi) * Math.cos(theta);
				const y = radius * Math.cos(phi) * Math.sin(theta);
				const z = radius * Math.sin(phi);
				points.push(new THREE.Vector3(x, y, z));
			}
			const geometry = new THREE.BufferGeometry().setFromPoints(points);
			const line = new THREE.LineLoop(geometry, shaderMaterial);
			line.rotation.x = Math.PI / 2;
			scene.add(line);
		}

		// Create meridians of longitude (vertical lines)
		for (let lon = 0; lon < totalLongitudeLines; lon += longitudeStep) {
			const theta = 2 * Math.PI * (lon / totalLongitudeLines);
			const points = [];
			for (let lat = 0; lat <= totalLatitudeLines; lat++) {
				const phi = Math.PI * (lat / totalLatitudeLines - 0.5);
				const x = radius * Math.cos(phi) * Math.cos(theta);
				const y = radius * Math.cos(phi) * Math.sin(theta);
				const z = radius * Math.sin(phi);
				points.push(new THREE.Vector3(x, y, z));
			}
			const geometry = new THREE.BufferGeometry().setFromPoints(points);
			const line = new THREE.Line(geometry, shaderMaterial);
			line.rotation.x = Math.PI / 2;
			scene.add(line);
		}
	};


	return (
		<div style={{ position: 'relative', width: `${size}`, height: `${size}` }}>
			<div ref={globeRef} style={{ width: '100%', height: '100%' }}></div>
			<div style={{
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				background: 'radial-gradient(circle at bottom, var(--bg-color) 0%, rgba(255,255,255,0) 100%)',
			}}></div>
		</div>
	);
};

export default Globe;
