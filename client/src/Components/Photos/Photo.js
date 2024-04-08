import React from 'react';
import d from '../image/d.jpg';
import eightImg from '../image/eightImg.jpg';
import firstImg from '../image/firstImg.jpg';
import fortheen from '../image/fortheen.jpg';
import ninethImg from '../image/ninethImg.jpeg';
import sixthImg from '../image/sixthImg.jpg';
import thirdImg from '../image/thirdImg.jpeg';
import thirdteenImg from '../image/thirdteenImg.jpg';
import twelveImg from '../image/twelveImg.webp';
import './Photo.css';

const Photo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-[5rem] ml-2 mr-2">
      <img src={twelveImg} className="w-full brightness-75 hover:brightness-100" alt="image" />
      <img src={eightImg} className="w-full brightness-75 hover:brightness-100" alt="Image" />
      <img src={thirdteenImg} className="w-full brightness-75 hover:brightness-100" alt="Image" />
      <img src={firstImg} className="w-full brightness-75 hover:brightness-100" alt="Image" />
      <img src={ninethImg} className="w-full brightness-75 hover:brightness-100" alt="Image" />
      <img src={thirdImg} className="w-full brightness-75 hover:brightness-100" alt="Image" />
      <img src={fortheen} className="w-full brightness-75 hover:brightness-100" alt="image" />
      <img src={sixthImg} className="w-full brightness-75 hover:brightness-100" alt="Image" />
      <img src={d} className="w-full brightness-75 hover:brightness-100" alt="Image" />
    </div>
  );
}

export default Photo;
