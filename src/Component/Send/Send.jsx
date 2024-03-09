import iphone from '/src/assets/Image/iPhone 12 Mockup Front View.png'
import frame from '/src/assets/Image/Frame 3536.png'

const Send = () => {
    return (
        <div className='bg-gradient-to-r from-[#9f8eb3] via-[#ead8fc] to-[#eee6f7] px-24'>
            <div className='flex justify-between items-center'>
                <div>
                    <img src={iphone} alt="" className='w-[320px] pb-20' />

                    <div className='absolute left-[250px] top-[1400px]'>
                        <img src={frame} alt=""/>
                    </div>
                </div>

                <div className='space-y-7'>
                    <h2 className='font-bold text-4xl w-[360px]'>Send Cash with just a Username</h2>

                    <p className='text-base text-gray-600'>Transfer cash to friends using just their username. It's that easy and it's free!!!</p>

                    <button type="submit" className='px-8 py-2 bg-transparent border bg-[#60269E] text-white border-[#60269E] rounded-full'>Send cash for free</button>
                </div>
            </div>
        </div>
    )
}

export default Send