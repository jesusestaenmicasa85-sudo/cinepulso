'use client'

import { useMemo, useState } from 'react'
import { ChevronRight, Play, Search, X, Clock3, CalendarDays } from 'lucide-react'

type Show = { title: string; year: string; rating: string; genre: string; synopsis: string; status: 'Disponible' | 'En emisión' | 'Próximamente'; image: string; backdrop?: string; href?: string }

const genres = ['Todos', 'Drama', 'Romance', 'Acción', 'Comedia', 'Crimen']
const shows: Show[] = [
  { title: 'Eşref Rüya', status: 'Disponible', href: 'https://t.me/+TDV2r4oXvd8yYjAS', image: 'https://i.ibb.co/f62xttSD/esref-ruya-en-espanol.jpg' },
  { title: 'Çocuk', status: 'Disponible', href: 'https://t.me/+plBK3zPUuNlYTZh', image: 'https://i.ibb.co/zWLNmnXW/images-6.jpg' },
  { title: 'Sila', status: 'Disponible', href: 'https://t.me/+g0EXYTtGvJRkYzAx', image: 'https://i.ibb.co/gMwycNGy/photo-2026-09-11-18-42-49.jpg' },
  { title: 'Halef', status: 'Disponible', href: 'https://t.me/+JPJ_6YI2UiI5OWYx', image: 'https://i.ibb.co/XxTvnbnT/images-4.jpg' },
  { title: 'Sen Çal Kapımı', status: 'Disponible', href: 'https://t.me/+i1UAaM_L-s40MjVx', image: 'https://i.ibb.co/QvXRHSpX/images-5.jpg' },
  { title: 'Sevdiğim Sensin', status: 'Disponible', href: 'https://t.me/+1Q1rMYuwhCViMGUx', image: 'https://i.ibb.co/zWLNmnXW/images-6.jpg' },
  { title: 'Taşacak Bu Deniz', status: 'Disponible', href: 'https://t.me/+YngLoH6sie45NDMx', image: 'https://i.ibb.co/HfPwdd9f/images-7.jpg' },
  { title: 'Doğanın Kanunu', status: 'Disponible', href: 'https://t.me/+plw4RXS9vE0yTC5', image: 'https://i.ibb.co/7JhF06vG/images-3.jpg' },
  { title: 'Arafta', status: 'En emisión', href: 'https://t.me/+y5VtRHGfoUswMzgx', image: 'https://i.ibb.co/zkC4nzR/Alti-Ustu-Istanbul.jpg' },
  { title: 'Yeraltı', status: 'En emisión', href: 'https://t.me/+k0r7HsX3zPdjYWEx', image: 'https://i.ibb.co/LdwWK3m/haysiyet-en-espanol.jpg' },
  { title: 'Seven Deadly Sins', status: 'En emisión', href: 'https://t.me/+oRSGcPQwyJI5NTAx', image: 'https://i.ibb.co/0psBZJHK/abi-en-espanol.jpg' },
  { title: 'Café Salado', status: 'En emisión', href: 'https://t.me/+c9wQ6VzUf-NKzDFh', image: 'https://i.ibb.co/KszDw60/cafe-salado-en-espanol.jpg' },
  { title: 'Sevdan Bir Ateş', status: 'En emisión', href: 'https://t.me/+X8HRFHHky2MxZWIS', image: 'https://i.ibb.co/DP8zC1cW/sevdan-bir-ates-en-espanol.jpg' },
  { title: 'Ask Ve Tantana', status: 'En emisión', href: 'https://t.me/+fsXUvsmHVYhhnTA5', image: 'https://i.ibb.co/d0CWPnpb/ask-ve-tant-en-espanol.jpg' },
  { title: 'Historia', status: 'En emisión', href: 'https://t.me/+2CE2eUR_kHIzzGEx', image: 'https://i.ibb.co/h1XBGM87/images-8.jpg' },
  { title: 'En Emisión', status: 'En emisión', href: 'https://t.me/+SgkFOzeAQk0yNTZh', image: 'https://i.ibb.co/nMT14VCZ/images-9.jpg' },
  { title: 'MV5-BZDQ1', status: 'En emisión', href: 'https://t.me/+LIZ10X1ZwbpkZTQx', image: 'https://i.ibb.co/0jyr2d1r/MV5-BZDQ1-NZ-F1-ZGUt-Ym-Zi-MC00-NTdj-LTk2-Zj-At-Mm-Z1-Zj11-Mz-M1-NDg0-Xk-E' },
  { title: 'Evlilik Guzeid', status: 'En emisión', href: 'https://t.me/+kgExQ8EUdDgyMzZh', image: 'https://i.ibb.co/G4T4NRKC/evlilik-guzeld' },
  { title: 'Güller ve Günahlar', year: '2026', rating: '-', genre: 'Drama · Romance', synopsis: 'Una nueva historia de amor, secretos y consecuencias prepara su estreno.', status: 'Próximamente', image: 'https://i.ibb.co/Xfc61pk6/images-1.jpg' },
  { title: 'Sevdiğim Sensin - Temporada 2', year: '2026', rating: '-', genre: 'Romance · Drama', synopsis: 'La historia continúa con nuevos desafíos para la pareja.', status: 'En emisión', href: 'https://t.me/+nZ1OxjeKFJc0Nzcx', image: 'https://i.ibb.co/XxTvnbnT/images-4.jpg' },
  { title: 'Halef - Temporada 2', year: '2026', rating: '-', genre: 'Drama', synopsis: 'El conflicto familiar regresa con secretos peligrosos.', status: 'Próximamente', image: 'https://i.ibb.co/W4dZPb8y/photo-2026-09-11-18-41-02.jpg' },
  { title: 'Uzak Şehir - Temporada 3', year: '2026', rating: '-', genre: 'Drama · Romance', synopsis: 'La esperada continuación de una mujer atrapada entre el amor y el destino.', status: 'Próximamente', image: 'https://i.ibb.co/99XD939T/photo-2026-08-28-15-08-00.jpg' },
  { title: 'Yeraltı - Temporada 2', year: '2026', rating: '-', genre: 'Drama · Romance', synopsis: 'En las profundidades de la ciudad, lealtad y ambición chocan en una lucha por el poder', status: 'Próximamente', image: 'https://i.ibb.co/zWLNmnXW/images-6.jpg' },
}

function ShowCard({ show }: { show: Show }) {
  return <article className="show-card">
    <div className="poster-wrap"><img src={show.image} alt={`Póster de ${show.title}`} onError={(event) => { event.currentTarget.src = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=85' }} /><span className={`status status-${show.status.replace('ó', 'o').replace(' ', '-').toLowerCase()}`}>{show.status}</span>{show.href ? <a className="poster-play" aria-label={`Ver ${show.title}`} href={show.href} target="_blank" rel="noreferrer"><Play fill="currentColor" /></a> : <button className="poster-play" aria-label={`Ver ${show.title}`}><Play fill="currentColor" /></button>}</div>
    <div className="show-meta"><div><h3>{show.title}</h3><p>{show.year} · {show.genre}</p></div><span className="rating">★ {show.rating}</span></div>
  </article>
}

function Row({ title, shows, onMore }: { title: string; shows: Show[]; onMore: () => void }) {
  return <section className="show-row"><div className="row-heading"><h2>{title}</h2><button onClick={onMore}>Ver todo <ChevronRight /></button></div><div className="row-scroll">{shows.map((show) => <ShowCard key={show.title} show={show} />)}</div></section>
}

export default function Page() {
  const [activeGenre, setActiveGenre] = useState('Todos')
  const [activeStatus, setActiveStatus] = useState<'Todos' | Show['status']>('Todos')
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [notice, setNotice] = useState('')
  const featured = shows[0]
  const visible = useMemo(() => shows.filter((show) => (activeGenre === 'Todos' || show.genre.split(' · ').includes(activeGenre)) && (activeStatus === 'Todos' || show.status === activeStatus) && show.title.toLowerCase().includes(query.toLowerCase())), [activeGenre, activeStatus, query])
  const toast = (message: string) => { setNotice(message); window.setTimeout(() => setNotice(''), 2400) }
  return <main className="stream-app">
    <nav className="top-nav"><a className="brand" href="#inicio"><span className="brand-mark">C</span><span>CINEVAULT</span></a><div className="nav-links"><a className="active" href="#inicio">Inicio</a><a href="#catalogo">Catálogo</a><a href="#emision">En emisión</a><a href="#proximamente">Próximamente</a></div><button className="search-button" aria-label="Abrir búsqueda" onClick={() => setSearchOpen(!searchOpen)}><Search /></button>{searchOpen && <div className="search-panel"><Search /><input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar series..." aria-label="Buscar series" />{query && <button aria-label="Limpiar búsqueda" onClick={() => setQuery('')}><X /></button>}</div>}</nav>
    <section id="inicio" className="hero"><img className="hero-image" src={featured.backdrop} alt="Escena cinematográfica de Eşref Rüya" /><div className="hero-vignette" /><div className="hero-content"><p className="eyebrow">Cinevault · Serie destacada</p><h1>EŞREF<br /><em>RÜYA</em></h1><div className="hero-facts"><span>2025</span><i /><span>2 temporadas</span><i /><span className="maturity">16+</span><i /><span>Drama · Acción</span></div><p className="synopsis">Un hombre poderoso busca al amor de su infancia mientras una música inesperada cambia el rumbo de su vida.</p><div className="hero-actions"><a className="watch-button" href={featured.href} target="_blank" rel="noreferrer"><Play fill="currentColor" /> Ver ahora</a><button className="more-button" onClick={() => toast('Añadida a Mi lista')}>＋ Mi lista</button></div></div><div className="hero-slide"><span>01</span><div className="slide-line"><b /></div><span>04</span></div></section>
    <div className="content-wrap"><section className="status-tabs" aria-label="Estado de las series">{(['Todos', 'Disponible', 'En emisión', 'Próximamente'] as const).map((status) => <button key={status} className={activeStatus === status ? 'tab active' : 'tab'} onClick={() => setActiveStatus(status)}>{status === 'Disponible' ? <Play /> : status === 'En emisión' ? <Clock3 /> : status === 'Próximamente' ? <CalendarDays /> : null}{status}</button>)}</section><section id="catalogo" className="catalog"><div className="catalog-heading"><div><p className="eyebrow">Explora nuestro universo</p><h2>Catálogo de series</h2></div><span>{visible.length} títulos</span></div><div className="filters"><span>Géneros</span><div className="filter-scroll">{genres.map((genre) => <button key={genre} className={activeGenre === genre ? 'filter active' : 'filter'} onClick={() => setActiveGenre(genre)}>{genre}</button>)}</div></div><div className="catalog-grid">{visible.map((show) => (<ShowCard key={show.title} show={show} />))}</div></section><section id="emision"><Row title="En emisión ahora" shows={shows.filter((s) => s.status === 'En emisión')} onMore={() => setActiveStatus('En emisión')} /></section><section id="proximamente"><Row title="Próximamente en Cinevault" shows={shows.filter((s) => s.status === 'Próximamente')} onMore={() => setActiveStatus('Próximamente')} /></section><Row title="Recomendadas para ti" shows={shows.filter((s) => s.status === 'Disponible').slice(0, 5)} onMore={() => toast('Mostrando todas tus recomendaciones')} /></div>{notice && <div className="toast" role="status">{notice}</div>}
  </main>
}
