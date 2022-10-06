function ImageDetail({selectedImg,setSelectedImg}) {
    // console.log(selectedImg)
  return (
    <div className="pop-up" onClick={()=>setSelectedImg(null)}>
         <div className="pop-up-img-div">
             <img className="pop--image" src={selectedImg.urls.regular} alt={selectedImg.alt_description}></img>
          </div>
    </div>
  )
}
export default ImageDetail