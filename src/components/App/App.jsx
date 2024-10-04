import { useEffect, useState } from "react";
import { toast } from 'react-hot-toast';

import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar"
import Loader from "../Loader/Loader"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import ImageLoad from "../ImageModal/ImageModal"

import {fetchImages} from "../showImage"

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoader , setIsLoader] = useState(false)
  const [error, setError]=useState(false)

  
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleSearch =(newQuery)=>{
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const hanleLoadMore =()=>{
    setPage(page + 1);
  }

  useEffect(()=>{
    if(query === ""){
      return;
    }
    async function getNewImages(){
      try {
        setError(false);
        setIsLoader(true);
        const data = await fetchImages(query, page);
        if (data.length === 0) { 
          toast.error('No images found for your search query', {
            icon: '🧐',
            style: {
              borderRadius: '10px',
              background: '#f77307',
              color: '#000',
              fontSize: '20px'
            },
          });
        }
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoader(false);
      }
    }
    getNewImages();
  },[page,query])


  useEffect(() => {
    if (page > 1) {
      window.scrollBy({
        top: 600,
        behavior: "smooth",
      });
    }
  }, [images]); 


  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };
  return (
    <div>
      <SearchBar onSubmit ={handleSearch}/>
      {images.length > 0 && <ImageGallery items={images} openModal={openModal} />}
      {images.length > 0 && <ImageLoad
      images={images}
      open ={modalIsOpen}
      closeModal={closeModal}
      selectedImage={selectedImage}/>}
      {error &&  <ErrorMessage/>}
      {isLoader &&  <Loader/>}
      {images.length > 0 && !isLoader && (<LoadMoreBtn onLoadMore ={hanleLoadMore}/>)}
    </div>
  );
}