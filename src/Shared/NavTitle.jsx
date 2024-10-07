

const NavTitle = () => {
    return (
        <div className="hidden lg:flex justify-between container mx-auto px-[5%] py-6">
            <div>
                <img className='w-40' src='https://i.postimg.cc/vT1w7F4B/title.png' alt="genesis" />
            </div>
            <div className='lg:flex gap-5 '>
                <div className='flex gap-4'>
                    <img className='w-16 h-16 border-2 border-dashed border-blue-400 p-3' src='https://i.postimg.cc/fRYZgNBS/earth.png' alt="earth" />
                    <div>
                        <h2 className='text-xl font-semibold'>Address</h2>
                        <h3> Avenue-11, Mirpur DOHS, Dhaka</h3>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <img className='w-16 h-16 border-2 border-dashed border-blue-400 p-3' src='https://i.postimg.cc/LX8pXZRj/email.png' alt="earth" />
                    <div>
                        <h2 className='text-xl font-semibold'>Email</h2>
                        <h3>marketing@gtl.com.bd</h3>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <img className='w-16 h-16 border-2 border-dashed border-blue-400 p-3' src='https://i.postimg.cc/Kzpygvvw/telephone-call.png' alt="earth" />
                    <div>
                        <h2 className='text-xl font-semibold'>Call Us</h2>
                        <h3>+88-01755690251~53</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavTitle