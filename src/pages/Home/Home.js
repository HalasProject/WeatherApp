import Footer from '../../components/Footer/Footer'
import './Home.scss'
import france from '../../assets/france.png'
import Searchbar from '../../components/Searchbar/Searchbar'
import { Helmet } from 'react-helmet-async'

export default function Home({title}) {

    return (<>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <div className="home-screen bg-no-repeat bg-center bg-slate-200 ">
            <div className="flex flex-col h-screen mx-auto">
                <div id="header" className="w-full basis-1/6 flex justify-end items-start pt-10 pr-16 ">
                    <img className="w-10 rounded-sm hover:drop-shadow-lg" alt="Site web en francais." src={france} />
                </div>
                <div id="body" className="w-full basis-4/6 flex flex-col px-16 items-center lg:pt-28">
                    <p className="text-6xl mb-12 font-medium tracking-normal text-neutral-800">Rechercher la météo dans votre région</p>
                    <Searchbar/>
                </div>
                <div id="footer" className="w-full basis-1/6  items-center flex">
                    <Footer />
                </div>
            </div>
        </div>
    </>)
}

