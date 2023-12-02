import { Link } from '@remix-run/react'
import { navigation } from '~/components/Navlink'

const Subject = () => {
    return (
        <div className='grid md:grid-cols-3'>
            {navigation.filter(navlink => navlink.path !== "/").map(link => (
                <Link to={`/subject/${link.path}`} key={link.path} className='px-6 py-3 shadow-lg h-32 my-5 flex items-center justify-center  '>
                    {link.title}
                </Link>

            ))}
        </div>
    )
}

export default Subject