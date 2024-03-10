import Group from '/src/assets/Image/Group 1.png'

const Let = () => {
    return (
        <div className='h-100vh px-24 bg-gradient-to-r from-[#9f8eb3] via-[#ead8fc] to-[#eee6f7] border-t-2 border-b-2 border-[#e9d4f5]'>
            <div className='flex justify-between items-center space-x-10 pt-24'>
                <div>
                    <img src={Group} alt="" className='w-[290px] pb-24' />
                </div>

                <div className='space-y-5'>
                    <h2 className='font-bold text-2xl w-[350px]'>Let your money do your work</h2>

                    <p className='text-gray-600 text-sm'>Trust Bundle leveraged tokens to save the day even when there is a market dip.</p>

                    <button type='submit' className='px-6 py-1 text-white bg-[#62069E] border border-[#62069E] rounded-lg'>Get the Dip</button>
                </div>
            </div>
        </div>
    )
}

export default Let