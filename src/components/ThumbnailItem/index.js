import './index.css'

const ThumbnailItem = props => {
  const {key, details, onStatus} = props
  const {id, imageUrl, thumbnailUrl, thumbnailAltText} = details

  const onBut = () => {
    onStatus(id)
  }

  return (
    <li>
      <button>
        <img src={thumbnailUrl} alt={thumbnailAltText} onClick={onBut} />
      </button>
    </li>
  )
}
export default ThumbnailItem
