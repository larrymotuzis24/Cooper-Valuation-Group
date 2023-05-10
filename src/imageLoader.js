const importAllImages = (r) => {
    return r.keys().map((filename) => ({
      filename: filename.substr(2),
      module: r(filename),
    }));
  };
  
  const images = importAllImages(
    require.context('./carouselImages', false, /\.(png|jpe?g|svg)$/)
  );
  
  export default images;
  