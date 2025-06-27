import React from 'react'
import { Monitor } from 'lucide-react'
import { ArrowDownToLine } from 'lucide-react'
import { MicVocal } from 'lucide-react'
import { Copy } from 'lucide-react'
import './Reasons.css'
function Reasons() {
  return (
    <div>
      <div className="reasons-main-container">
        <h2>More Reasos to Join</h2>
        <div className="reasons-container">
                <div className="reasons">
                        <h3>Enjoy on your TV</h3>
                        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                        <div className="icon">
                                <Monitor size={60} color="#c12f75" strokeWidth={2} />
                        </div>
                </div>

                <div className="reasons">
                        <h3>Download your shows to watch offline</h3>
                        <p>Save your favourites easily and always have something to watch.</p>
                        <div className="icon">
                        <ArrowDownToLine size={48} color="#c12f75" strokeWidth={3} />
                </div>
                </div>

                <div className="reasons">
                        <h3>Watch everywhere
</h3>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
                        <div className="icon">
                                <MicVocal size={48} color="#c12f75" strokeWidth={3} />
                        </div>
                </div>

                <div className="reasons">
                        <h3>Create profiles for kids</h3>
                        <p>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
                        <div className="icon">
                                <Copy size={48} color="#c12f75" strokeWidth={3} />
                        </div>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Reasons