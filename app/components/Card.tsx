import { Link } from '@remix-run/react'
import { Download } from 'iconoir-react/regular'
import type { bookType } from '~/types'
const Card = ({ id, authors, image, subtitle, title, url }: bookType) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl" key={id}>
            <figure><img className='w-72 h-56' src={image} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between">
                    <Link to={`${url}/read`} className="btn btn-primary">Read online</Link>
                    <Link className='btn' to={`/subject/category/${id}`}><Download /></Link>
                </div>
            </div>
        </div>
    )
}

export default Card