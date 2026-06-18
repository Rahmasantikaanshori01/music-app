
import {useEffect,useState} from 'react';
export default function App(){
const [q,setQ]=useState('coldplay'); const [songs,setSongs]=useState([]);
const search=async(t=q)=>{const r=await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(t)}&entity=song&limit=24`);const d=await r.json();setSongs(d.results||[])};
useEffect(()=>{search('coldplay')},[]);
return <div className='app'><h1>Nexus Music</h1><div className='search'><input value={q} onChange={e=>setQ(e.target.value)}/><button onClick={()=>search()}>Search</button></div><div className='grid'>{songs.map(s=><div className='card' key={s.trackId}><img src={s.artworkUrl100}/><h3>{s.trackName}</h3><p>{s.artistName}</p>{s.previewUrl&&<audio controls src={s.previewUrl}></audio>}</div>)}</div></div>
}
