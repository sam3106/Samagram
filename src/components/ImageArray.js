import React from 'react';

console.log('hi');

const images = [
  '/images/1.png',
  '/images/2.jpeg',
  '/images/3.jpeg',
  '/images/4.jpg',
  '/images/5.jpeg',
  '/images/6.jpg',
  '/images/7.jpg',
  '/images/8.jpeg',
  '/images/9.jpg'
];
const ImageArray = images.map(image => {
  return (
    <a className="post-images">
      <li>
        <img src={image} />
      </li>
    </a>
  );
});

export default ImageArray;
