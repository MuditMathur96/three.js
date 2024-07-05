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

const ico = new THREE.IcosahedronGeometry(1.0,2);
const mat = new THREE.MeshStandardMaterial({
    color:"#444444",
    flatShading:true
});

const shape = new THREE.Mesh(ico,mat);

scene.add(shape);

function update(t=0){
    requestAnimationFrame(update);
    shape.scale.setScalar(Math.cos(t * 0.001)+1.0);
    renderer.render(scene,camera);

}

update();
