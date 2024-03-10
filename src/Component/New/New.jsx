import SignIn from '/src/assets/Image/signup-via-app-banner 1.png'

const New = () => {
    return (
        <div className="bg-gradient-to-r from-[#9f8eb3] via-[#ead8fc] to-[#eee6f7] px-24 border-t-2 border-b-2 border-[#e9d4f5] ">
            <div className='flex flex-col justify-center items-center p-24 space-y-5'>
                <h3 className='font-bold text-4xl'>New to Cashout? We've got you covered</h3>

                <p className='text-gray-700 text-md'>Save and earn interest on your dollar stable cryptocurrency with Bundle vault - No risk involved</p>

                <button type="submit" className='px-5 py-1 text-white bg-[#62069E] border border-[#62069E] rounded-lg'>Learn to Cashout</button>

                <img src={SignIn} alt="" className='w-[220px]' />
            </div>
        </div>
    )
}

export default New