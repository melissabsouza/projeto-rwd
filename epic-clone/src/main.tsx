import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header/Index.tsx'
import SearchBar from './Components/SearchBar/Index.tsx'
import Carroussel from './Components/Carroussel/Index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <main>
      <SearchBar/>
      <Carroussel/>
    </main>
  </React.StrictMode>,
)
