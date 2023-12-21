import React, { useEffect, useState } from "react";
import "./Gallery.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import Loader from "../Loader/Loader";

const Gallery = () => {
  const [galleryPhotos, setGalleryPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [model, setModel] = useState(false);
  const [temImg, setTemImg] = useState("");

  const getImg = (media_url) => {
    setTemImg(media_url);
    setModel(true);
  };

  useEffect(() => {
    axios
      .get(
        "https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,like,media_type&access_token=IGQWRQcktUMWp4azBsTi03QzlMQXRuWHZAIT1RxNEdfVF9Bbk9ZAbERnMEpxWWNZAOUQyRWVwLVprM0FtNXVUcHllcjdTRGFEN2hIMVFpNUFpWXFsTzJ4QjNGR3htSGNoUkhkellndnB0OVZAoOFlXbkVfcTRyTFZAXQXMZD"
      )
      .then((res) => {
        setLoading(true);
        const mediaData = res.data;
        setGalleryPhotos(mediaData.data);
        console.log(mediaData);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
    // window.addEventListener("scroll" , handelInfiniteScrolls)
    // return() => window.removeEventListener("scroll" , handelInfiniteScrolls)
    // }, [page]);
  }, []);

  // const handelInfiniteScrolls = () => {
  //   try{
  //     if(window.innerHeight + document.documentElement.scrollTop + 1 >=
  //       document.documentElement.scrollHeight){
  //           // setLoading(false)
  //           setPage((prev) => prev + 1);
  //       }
  //   }catch(err){
  //       console.log(err)
  //   }
  // }
  // //
  //   const filterItems = (items) => {
  //     const updatedItem = galleryPhotos.filter((curElem) => {
  //       return curElem.category === items;
  //     });
  //     setData(updatedItem);
  //   };

  return (
    <>
      <Header />
      <div className="gallery-section">
        <div className="Gallery-image-section container">
          <hr></hr>
          <h1>Gallery.</h1>
          <hr style={{ backgroundColor: "#b55467" }}></hr>
        </div>
        <br></br>
        {error ? (
          <h4 className="error" style={{ textAlign: "center" }}>
            {error}
          </h4>
        ) : (
          <>
            {/* <div className="search-btn">
              <button className="btn" onClick={() => setData(galleryPhotos)}>
                All
              </button>
              <button
                className="btn"
                onClick={() => [filterItems("haldi"), setShow(true)]}
              >
                Haldi
              </button>
              <button
                className="btn"
                onClick={() => [filterItems("sangeet"), setShow(true)]}
              >
                Sangeet
              </button>
              <button
                className="btn"
                onClick={() => [filterItems("engagement"), setShow(true)]}
              >
                Engagement
              </button>
              <button
                className="btn"
                onClick={() => [filterItems("wedding"), setShow(true)]}
              >
                Wedding
              </button>
            </div> */}
            <br></br>
            {/* {  { loading ?  show ? data.slice(0 , `${page}`).map((items) => {
              return (
                <>
                  <img src={`/${items.image}`} className="gallery-img" alt="NotImageFound !!" />
                </>
             );
             }) : galleryPhotos.slice(0 , `${page}`).map((items) => {
              return (
                <>
                  <img src={`/${items.image}`} className="gallery-img" alt="NotImageFound !!" />
                </>
             );
             }) : <Loading/>  }} */}

            <div className={model ? "model open" : "model"}>
              <img src={temImg} alt="NOopen" />
              <i class="fa-solid fa-xmark" onClick={() => setModel(false)}></i>
            </div>
            {loading ? (
              <div className="gallery container">
                {galleryPhotos.map((items) => {
                  return (
                    <>
                      {loading ? (
                        <div
                          className="pics"
                          onClick={() => getImg(items.media_url)}
                        >
                          <img
                            src={items.media_url}
                            alt="NotImageFound !!"
                            style={{ width: "100%" }}
                          />
                        </div>
                      ) : null}
                    </>
                  );
                })}
              </div>
            ) : (
              <Loader />
            )}
          </>
        )}
        <br></br>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
