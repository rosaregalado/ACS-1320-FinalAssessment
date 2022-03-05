import './Band.css'
import Like from './Like.js'


function Band(props) {
  const {name, formed, origin, fans, split} = props
    // check if band split 
    if (split === '-') {
        return(
            <div className='Band'>
                <h1 className='name'>{ name }</h1>
                <p className='formed'>Formed: { formed }</p>
                <p className='formed'>Origin: { origin }</p>
                <p className='formed'>Fans: { fans }</p>
            </div>
        )
    } else {
    return(
        <div className='Band'>
            <h1 className='name'>{ name }</h1>
            <p className='formed'>Formed: { formed }</p>
            <p className='formed'>Origin: { origin }</p>
            <p className='formed'>Fans: { fans }</p>
            < Like />
        </div>
    )}
}
export default Band;