import React from 'react'

export const MangaList = ({mangaList, setMangaInfo, mangaComponent, handleList}) => {
  const AddToList = mangaComponent;
  
  return (
    <>
      {
        mangaList ?(
          mangaList.map((manga, index) => {
            return(
              <div className='card' key={index} onClick={() => setMangaInfo(manga)} >
                <img src={manga.images.jpg.large_image_url} alt="mangaImage" />

                <div className='manga-info'>
                  <h4>{manga.title}</h4>

                  <div className='overlay' onClick={() => handleList(manga)}>

                    <h4>{manga.title_japanese}</h4>

                    <h3>SYNOPSIS</h3>

                    <div className='synopsis'>
                      <p>{manga.synopsis}</p>
                    </div>

                    <AddToList/>

                  </div>
                </div>

              </div>
            )
          })
        ) : "Not Found"
      }
    </>
  )
}
