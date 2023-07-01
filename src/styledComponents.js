import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #152850;
  min-height: 100vh;
`
export const AppWidthContainer = styled.div`
  width: 100%;
  max-width: 900px;
`

export const SingerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 40vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 60px;
`

export const Name = styled.h1`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
`

export const Role = styled.p`
  color: #ffffff;
  font-size: 20px;
  margin: 10px 0px 30px 0px;
  font-weight: 400;
`

export const PlaylistBgCard = styled.div`
  width: 90%;
  margin: auto;

  min-height: 50vh;
`

export const PlaylistHedingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 17px;
  font-weight: 500;
  width: 47%;
  margin-right: 3%;
`

export const SearchContainer = styled.div`
  border: 1px solid #cbd5e1;
  height: 40px;
  width: 50%;
  max-width: 350px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 0px 5px;
`

export const Input = styled.input`
  width: 90%;
  padding: 8px 10px;
  margin-right: 4px;
  background-color: transparent;
  border: none;
  outline: none;
  color: #cbd5e1;
  font-size: 16px;
  font-weight: 400;
`
export const SearchBtn = styled.button`
  padding: 0px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`

export const Icon = styled.div`
  height: 20px;
  width: 20px;
  color: #cbd5e1;
`

export const PlayList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin-top: 40px;
  height: 45vh;
  overflow-y: auto;
`

export const NoVideosHeading = styled.p`
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
