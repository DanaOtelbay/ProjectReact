import React, { useState } from 'react';
import './Style/style.css';
import { MangaList } from './Components/MangaList';
import { MangaInfo } from './Components/MangaInfo';
import { AddToList } from './Components/AddToList';
import { RemoveFromList } from './Components/RemoveFromList';

function App() {
  const [search, setSearch] = useState('');
  const [mangaData, setMangaData] = useState();
  const [mangaInfo, setMangaInfo] = useState();
  const [myMangaList, setMyMangaList] = useState([]);

  const addTo = (manga) => {
    const index = myMangaList.findIndex((mymanga) => {
      return mymanga.mal_id === manga.mal_id;
    })

    if(index < 0){
      const newArray = [...myMangaList, manga];
      setMyMangaList(newArray);
    }
  }

  const removeFrom = (manga) => {
    const newArray = myMangaList.filter((mymanga) => {
      return mymanga.mal_id !== manga.mal_id;
    })

    setMyMangaList(newArray)
  }
 
  const getData = async() => {
    const res = await fetch(`https://api.jikan.moe/v4/manga?q=${search}&limit=20`);
    const resData = await res.json();
    setMangaData(resData.data);
  }

  React.useEffect(() => {
    getData();
  }, [search]);

  return (
    <>
      
      <div className="header">
        <h1>Manga List</h1> 
        
        <div className='search-box'>
          <input type="search" placeholder="Search manga" onChange={ (e) => setSearch(e.target.value) }></input>
        </div>

      </div>

      <div className='container'>

        <div className='mangaInfo'>
          {mangaInfo && <MangaInfo mangaInfo={mangaInfo}/>}
        </div>

        <div className='manga-row'>
          <h2 className='text-heading'>Manga</h2>
          <div className='row'>
            <MangaList 
              mangaList={mangaData}
              setMangaInfo={setMangaInfo}
              mangaComponent={AddToList}
              handleList={(manga) => addTo(manga)}
            />  
          </div>

          <h2 className='text-heading'>My Manga List</h2>
          <div className='row'>
            <MangaList 
              mangaList={myMangaList}
              setMangaInfo={setMangaInfo}
              mangaComponent={RemoveFromList}
              handleList={(manga) => removeFrom(manga)}
            />  
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
