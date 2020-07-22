import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';
import { BsHeartFill } from 'react-icons/bs';
import { BsHeartHalf } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';

const ICONS = {
  star: [<BsStarFill />, <BsStarHalf />, <BsStar />],
  heart: [<BsHeartFill />, <BsHeartHalf />, <BsHeart />]
}


const renderIcons = (icon, number) =>{
  let icons
  const totalIcons = 5
  
    const isOdd = number%2 ;
    const fullIcons =  (number - isOdd) / 2 
    const fullIconsArr = [...new Array(fullIcons)].map((_) => ICONS[icon][0])
    const halfIcons = isOdd ? ICONS[icon][1]:null;
    const emptyIconsArr = [...new Array(totalIcons - fullIcons - isOdd )].map((_) => ICONS[icon][2])
    icons = [...fullIconsArr,halfIcons,...emptyIconsArr]
  
  return icons
}

const Scores = ({number, icon}) => {   
  return ( 
    <span>
      {renderIcons(icon, number)}
    </span>
   );
}
 
export default Scores;

// const renderIcons = (icon, number) =>{
//   let icons
//   const totalIcons = 5
//   if(number % 2 !==  0){
//     const fullIcons = (number - 1) / 2
//     const fullIconsArr = [...new Array(fullIcons)]
//     const emptyIconsArr = [...new Array(totalIcons - fullIcons - 1)].map((_) => ICONS[icon][2])
//     icons = fullIconsArr.map((_) => ICONS[icon][0]).concat([ICONS[icon][1]]).concat(emptyIconsArr)
//   }else{
//     const fullIcons = number / 2
//     const fullIconsArr = [...new Array(fullIcons)]
//     const emptyIconsArr = [...new Array(totalIcons - fullIcons)].map((_) => ICONS[icon][2])
//     icons = fullIconsArr.map((_) => ICONS[icon][0]).concat(emptyIconsArr)

//   }
//   return icons
// }

// const Scores = ({number, icon}) => {   
//   return ( 
//     <div>
//       {renderIcons(icon, number)}
//     </div>
//    );
// }
 
// export default Scores;

