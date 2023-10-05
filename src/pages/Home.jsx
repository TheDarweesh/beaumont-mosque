import IqamaTimes from "../components/IqamaTimes"
import Forecast from "../components/Forecast"

export function Home() {
  return (
    <>
      <div className="bodyContent">
        <img className="home-page-logo" src="src\assets\images\ICBsmall_logo.png" />
        <h1 className="title">ISLAMIC CENTER BEAUMONT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure necessitatibus fuga sit placeat, possimus similique adipisci culpa maiores doloremque repellendus nobis ratione quod corporis ducimus ipsa impedit id quidem hic.
        </p>
          <IqamaTimes />
          <Forecast />
          




      



      </div>



    </>
  )
}