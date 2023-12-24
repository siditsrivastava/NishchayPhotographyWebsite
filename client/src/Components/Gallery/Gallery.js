import React, { useEffect, useState } from "react";
import "./Gallery.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import Loader from "../Loader/Loader";
// import {INSTRAGRAM_ACCESS_KEY , INSTRAGRAM_TOKEN_KEY} from ''

const Gallery = () => {
  const [galleryPhotos, setGalleryPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const [model, setModel] = useState(false);
  const [temImg, setTemImg] = useState("");

  const getImg = (media_url) => {
    setTemImg(media_url);
    setModel(true);
  };

  useEffect(() => {
    axios
      // .get(
      //   "https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,like,media_type&expires_in:5183944&client_secret=95fb657c7fdf472fcb6eaad689799db7&access_token=IGQWRQbHBXX3JPd2F2bFFxX0dWVnBhM2FsTEpWVm9xT0p3MnR3Vl9zcm1obzM5ZAUpEeDNUY3NvdklPalV4XzdVdGxQaTFmVmNSUDF5TzRHV3JZAdHV2OHBxM1A0NXFVS1pDWkpyRUNaUG52aGFyNTgtRlV1a0x5RzQZD"
      // )
      .get(
        `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,like,media_type&expires_in:5183944&client_secret=${process.env.REACT_APP_ACCESS_KEY}&access_token=${process.env.REACT_APP_TOKEN_KEY}`
      )
      .then((res) => {
        setLoading(true);
        const mediaData = res.data;
        setGalleryPhotos(mediaData.data);
        // console.log(mediaData);
      })
      .catch((err) => {
        // console.log(err.message);
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
  const filterItems = (items) => {
    const updatedItem = galleryPhotos.filter((curElem) => {
      return curElem.media_type === items;
    });
    setData(updatedItem);
    console.log(updatedItem);
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
            <div className="search-btn">
              <button className="btn" onClick={() => setData(galleryPhotos)}>
                ALL
              </button>
              <button
                className="btn"
                onClick={() => [filterItems("VIDEO"), setShow(true)]}
              >
                VIDEO
              </button>
              <button
                className="btn"
                onClick={() => [filterItems("IMAGE"), setShow(true)]}
              >
                PHOTO
              </button>
            </div>
            <br></br>
            <div className={model ? "model open" : "model"}>
              <img src={temImg} alt="NOopen" />
              <i class="fa-solid fa-xmark" onClick={() => setModel(false)}></i>
            </div>
            {loading ? (
              <div className="gallery container">
                {show
                  ? data.map((items) => {
                      return (
                        <>
                          {loading ? (
                            items.media_type === "IMAGE" ? (
                              <div
                                className="pics"
                                onClick={() => getImg(items.media_url)}
                                key={items.id}
                              >
                                <img
                                  src={items.media_url}
                                  alt="NotImageFound !!"
                                  style={{ width: "100%" }}
                                />
                              </div>
                            ) : (
                              <div className="pics" key={items.id}>
                                <video
                                  controls
                                  style={{ width: "100%", height: "100%" }}
                                  src={items.media_url}
                                />
                              </div>
                            )
                          ) : null}
                        </>
                      );
                    })
                  : galleryPhotos.map((items) => {
                      return (
                        <>
                          {loading ? (
                            items.media_type === "IMAGE" ? (
                              <div
                                className="pics"
                                onClick={() => getImg(items.media_url)}
                                key={items.id}
                              >
                                <img
                                  src={items.media_url}
                                  alt="NotImageFound !!"
                                  style={{ width: "100%" }}
                                />
                              </div>
                            ) : (
                              <div className="pics" key={items.id}>
                                <video
                                  controls
                                  style={{ width: "100%", height: "100%" }}
                                  src={items.media_url}
                                />
                              </div>
                            )
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
