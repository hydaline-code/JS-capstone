// import { fetchShowImages } from './modules/fetchapi';

// // Function to display the images
// export const displayImages = (imagesData) => {
//   const container =  document.getElementById('movie-container');
//   const movie = document.createElement('div');
//   container.appendChild(movie);

 
//   imagesData.forEach( imageUrl => {
//     const imageElement = document.createElement("img");
//     imageElement.src= imagesData;
//     movie.appendChild(imagesData);
//   });
 
// };

// // Fetch images and call the display function
// fetchShowImages(1)
//   .then((imagesData) => {
//     displayImages(imagesData);
//   })
//   .catch((error) => {
//     console.error(error);
//   });