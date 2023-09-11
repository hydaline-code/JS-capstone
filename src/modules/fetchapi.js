
const baseUrl = 'https://api.tvmaze.com/';

export const fetchShowImages = async  (showId) => {
  try {
          const imageUrl = `${baseUrl}shows/${showId}/images`;
          const response = await fetch(imageUrl);
          const imagesData = await response.json();

          return imagesData;
  }
  catch (error) {
    console.error('error', error );
    throw error;
  }
}
 

// // Usage example
fetchShowImages(1)
  .then(imagesData => {
    console.log(imagesData);
  })
  .catch(error => {
    console.error(error);
  });