// import React from 'react';
// import Slider from 'react-slick';
// import { makeStyles } from '@mui/styles';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// const useStyles = makeStyles(() => ({
//   mainContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '60vh', 
//     width: '100%',
//   },
//   rectangle: {
//     backgroundColor: 'pink',
//     width: '70%', 
//     maxHeight: '100%', 
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '20px',
//   },
//   title: {
//     fontFamily: "Roboto", 
//     fontWeight: 600, 
//     fontSize: '2rem', 
//     color: 'black', 
//   },
//   mangaSlider: {
//     width: '80px',
//   },
//   image: {
//     maxHeight: '100%', // Permet aux images de prendre plus de hauteur
//     maxWidth: '100%',
//     objectFit: 'cover',
//   },
// }));
// const MangaCarousel = ({ mangasVolume }) => {
//   const classes = useStyles();

//   const settings = {
//     dots: false, 
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };
//   const filteredMangas = mangasVolume.filter(manga => {
//     const releaseDate = new Date(manga.releaseDate);
//     return releaseDate > new Date('2023-10-01');
//   });

//   if (!filteredMangas.length) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={classes.mainContainer}>
//       <div className={classes.rectangle}>
//         <h1 className={classes.title}>Les nouveautés</h1>
//         <div className={classes.mangaSlider}>
//           <Slider {...settings}>
//             {filteredMangas.map((manga) => (
//               <div key={manga.id}>
//                 <img src={manga.image} alt={manga.title} className={classes.image} />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MangaCarousel;
