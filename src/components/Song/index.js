import './index.css'

const Song = props => {
  const {songDetails, deleteSong} = props
  const {id, imageUrl, name, genre, duration} = songDetails

  const onClickDeleteBtn = () => {
    deleteSong(id)
  }

  return (
    <li className="song-card">
      <img src={imageUrl} className="song-cover-img" alt="track" />
      <div className="card2">
        <p>{name}</p>
        <p className="genre">{genre}</p>
      </div>
      <p>{duration}</p>
      <button
        type="button"
        className="delete-btn"
        data-testid="delete"
        onClick={onClickDeleteBtn}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-img"
          alt="delete img"
        />
      </button>
    </li>
  )
}

export default Song
