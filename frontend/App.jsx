import React from "react"
import { createClient } from "@connect2ic/core"
import { defaultProviders } from "@connect2ic/core/providers"
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react"
import "@connect2ic/core/style.css"
import * as counter from "../.dfx/local/canisters/counter"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Carousel from './components/PuzzleCarousel';
import Collections from './components/Collections';
import EggsCollections from './components/EggsCollections';
import EggCarousel from './components/EggCarousel';
import OffspringCollections from './components/OffspringCollection';
import OffspringvideoRow from './components/OffspringsCarousel';
import PuzzleCollections from "./components/PuzzleCollections"
import Puzzle2DImageRow from "./components/Puzzle2DCarasoul"
import PuzzleVideoRow from "./components/Puzzle2DVideo"
import PuzzlesVideoRow from "./components/PuzzlesVideoRow"
import PuzzlesOrgyRow from "./components/PuzzleOrgyRow"
import EggVideoRow from "./components/EggVideos"
import OffspringSpecialvideoRow from "./components/OffspringSpecialvideoRow"
import Scene from './components/Scene';
import BackgroundScene from './components/BackgroundScene';
import BackgroundBlur from './components/BackgroundBlur';
import HUD from './components/HUD';
import PuzzleGenzCollections from "./components/PUZZLEGENZCOLLECTION"
import Puzzle1Collections from "./components/PUZZLE1"
import Puzzle2Collections from "./components/PUZZLE2"
import PuzzleInfo from "./components/PuzzleInfo"
import ICPuzzleInfo from "./components/ICPuzzleInfo"
import OffspringsInfo from "./components/OffspringsInfo"
import EggsInfo from "./components/EggsInfo"
import Background from './components/Background';
import BBlur from './components/Bblur';

function App() {
  
  const connectButton = <ConnectButton />;
  return (
    <div className="App">
      <BBlur />
      <BackgroundScene />
      <ConnectDialog />
      <div className="Header">
      <Header connectButton={connectButton} />
      </div>     
      <div className="main-content">
      <BackgroundBlur />
      <div><HUD /></div>
     
      <div className="intro-container">
      
    <Intro /> 
  </div>
  <div className="threeDModel-container">
    
    
  </div>
</div>
    <div className="Collections"> 
    <Collections /> 
    </div>
    <Puzzle1Collections />
    <PuzzleCollections />
    <div className="Puzzle-content"> 
    <ICPuzzleInfo />
    <Puzzle2DImageRow />
    <PuzzleVideoRow />
    <PuzzleGenzCollections/>
    <PuzzleInfo />
    <Carousel />
    <PuzzlesVideoRow /> 
    <PuzzlesOrgyRow />
    <Puzzle2Collections />
    {/* Add the PuzzleCollections component */}
    </div>
    <EggsCollections />
    <EggsInfo />
    <div className="Eggs-content">
    <EggCarousel />
    <EggVideoRow />
    </div>
    <OffspringCollections />
    <OffspringsInfo />
    <div className="Offsprings-content">
    <OffspringSpecialvideoRow />
    <OffspringvideoRow />
  </div>




<Footer />
</div>
)
}



const client = createClient({
  canisters: {
    counter,
  },
  providers: defaultProviders,
  globalProviderConfig: {
    /*
     * Disables dev mode in production
     * Should be enabled when using local canisters
     */
    dev: import.meta.env.DEV,
  },
})

export default () => (
  <Connect2ICProvider client={client}>
    <App />
  </Connect2ICProvider>
)
