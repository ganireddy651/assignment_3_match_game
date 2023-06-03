import './index.css'

const ImageList = props => {
  const {eachImageList, isMatchedImage} = props
  const {thumbnailUrl, imageUrl} = eachImageList
  const onImageClick = () => {
    console.log(imageUrl)
    isMatchedImage(imageUrl)
  }
  return (
    <li>
      <button className="custom-btn" type="button" onClick={onImageClick}>
        <img className="match-image" src={thumbnailUrl} alt="thumbnailUrl" />
      </button>
    </li>
  )
}
export default ImageList
