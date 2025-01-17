import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer({antialias:true});

const w = window.innerWidth;
const h = window.innerHeight;
renderer.setSize(w,h);
document.body.appendChild(renderer.domElement);


const fov = 75;
const aspect = w/h;
const near  =0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
camera.position.z = 2;


const scene = new THREE.Scene(); 

renderer.render(scene,camera);