import icarus from "../assets/icarus-bk.jpeg"
import liked from "../assets/hearth-liked.svg"
import notLiked from "../assets/hearth.svg"
import Break from "../assets/break.jpeg"
import djavu from "../assets/Djavu.jpg"
import Alone from "../assets/RX.jpg"

const musics =[
{
    image: icarus,
    title:"Música de amor nunca mais",
    artists: "BK, Luccas Carlos, Nansy Silvz, Gigantes",
    Liked: true
},

{
    image: Break,
    title:"Break Through It All (feat. Kellin Quinn)",
    artists: "SEGA SOUND TEAM, Tomoya",
    Liked: true
},

{
    image: djavu,
    title:"Me Libera",
    artists:"Banda Djavú, DJ Juninho Portugal",
    Liked: true
},

{
    image: Alone,
    title:"Get You Alone",
    artists:"Galantis",
    Liked: true
},



]


export default function Playlist() {
    return (
        <section>

            {musics.map((music, index)=>(
                    <div key={index} className="flex flex-row items-center justify-between gap-2">
                    <div className="flex flex-row items-center gap-2">
                        <img className="h-20 rounded-2xl" src={music.image} alt="Imagem da música" />
                        <div>
                            <strong className="text-xl font-semibold trucate max-w-60">{music.title}</strong>
                            <p className="text-sm text-gray-300 trucante max-w-60">{music.artists}</p>
                        </div>
                    </div>
                    <img className="h-5" src={music.liked ? liked : notLiked} alt="Ícone de curtido" />
                </div>
                
            ))}
        </section>
    )
}
