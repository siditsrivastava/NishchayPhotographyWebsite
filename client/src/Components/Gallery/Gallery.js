import React, { useEffect, useState } from "react";
import "./Gallery.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import Loading from "../Loading/Loading";

const Gallery = () => {
  const [galleryPhotos, setGalleryPhotos] = useState([]);
  const [data, setData] = useState(galleryPhotos);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(3);

  const [model, setModel] = useState(false);
  const [temImg, setTemImg] = useState("");

  const getImg = (media_url) => {
    setTemImg(media_url);
    setModel(true);
  };

  useEffect(() => {
    axios
      // .get("http://localhost:4000/getImage")
      .get(
        "https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,like,media_type&access_token=IGQWRQNGNkMFk3U3oyOVc5ZATVIUkF6WnVEYzdmUUp3YkZAqUU5uRjdKUUF2b0Y1Q2E0NlpFdzRLNTlSTGxRbENjaUNDaDBQUXpZAY1d3elNCc21MM0N5UllIRXQtZAE5sOEp4UWJJOGkyc3MyRC1ncjQ2cFhvdGVRUmMZD"
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
    window.addEventListener("scroll" , handelInfiniteScrolls)
    return() => window.removeEventListener("scroll" , handelInfiniteScrolls)
    }, [page]);
  // }, []);

  const handelInfiniteScrolls = () => {
    try{
      if(window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight){
            // setLoading(false)
            setPage((prev) => prev + 3);
        }
    }catch(err){
        console.log(err)
    }
  }

  const filterItems = (items) => {
    const updatedItem = galleryPhotos.filter((curElem) => {
      return curElem.category === items;
    });
    setData(updatedItem);
  };

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

            <div className="gallery container">
              {galleryPhotos.slice(0 , `${page}`).map((items) => {
                return (
                  <>
                    {loading ? (
                      <div
                        className="pics container"
                        onClick={() => getImg(items.media_url)}
                      >
                        <img
                          src={items.media_url}
                          alt="NotImageFound !!"
                          style={{ width: "100%" }}
                        />
                      </div>
                    ) : (
                      <Loading />
                    )}
                  </>
                );
              })}
            </div>
          </>
        )}
        <br></br>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
