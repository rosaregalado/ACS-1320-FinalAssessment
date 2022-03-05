import Band from "./Band";
import data from './metal.json'
import './AllBands.css'


function AllBands() {
    const bands = data.map(( { band_name, formed, origin, fans, split}) => {
    return(
        <Band
            key={band_name}
            name={band_name}
            formed={formed}
            origin={origin}
            fans={fans}
            split={split}
        />
    )
  })
    return (
      <div className="AllBands">
        { bands }
      </div>
    )
}
export default AllBands;