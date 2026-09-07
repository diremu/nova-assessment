import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-blue-950 px-6 py-10 sticky top-0 z-50 flex justify-between items-center'>
        <div className="basis-[50%] outline-red-500 outline-2">
            <h2 className="font-bold text-xl text-steel">Nova - See What Matters, Miss Nothing</h2>
        </div>
        <ul className="basis-[20%] mr-10 flex gap-6 list-none font-semibold justify-between">
            <li><Link href='./'>Home</Link></li>
            <li><Link href='./features'>Features</Link></li>
            <li><Link href='./pricing'>Pricing</Link></li>
            <li><Link href='./contact'>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar