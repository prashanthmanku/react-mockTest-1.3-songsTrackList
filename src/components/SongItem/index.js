import {AiOutlineDelete} from 'react-icons/ai'
import {
  ItemCard,
  FirstContainer,
  Img,
  NameGenreContainer,
  Name,
  Genre,
  SecondContainer,
  Duration,
  DeleteBtn,
  Icon,
} from './styledComponents'

const SongItem = props => {
  const {songDetails, deleteSongItem} = props
  const {id, imageUrl, name, genre, duration} = songDetails

  const onClickDelteBtn = () => {
    deleteSongItem(id)
  }

  return (
    <ItemCard>
      <FirstContainer>
        <Img src={imageUrl} alt="track" />
        <NameGenreContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameGenreContainer>
      </FirstContainer>
      <SecondContainer>
        <Duration>{duration}</Duration>
        <DeleteBtn type="button" onClick={onClickDelteBtn} data-testid="delete">
          <Icon as={AiOutlineDelete} />
        </DeleteBtn>
      </SecondContainer>
    </ItemCard>
  )
}

export default SongItem
