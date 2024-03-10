import business from '/src/assets/Image/Business Card.png'
import iphone2 from '/src/assets/Image/iPhone 12 Pro Mockup Front View.png'

const Download = () => {
    return (
        <div className='h-100vh px-24 pt-24 bg-gradient-to-r from-[#60269E] via-[#936eb9] to-[#7850a3] border-t-2 border-b-2 border-[#e9d4f5]'>
            <div className='flex justify-between items-center space-x-20'>
                <div className='w-[350px] text-white space-y-6'>
                    <h3 className='font-bold text-3xl'>Download the ZekePay app to get Started</h3>

                    <p className='font-thin text-gray-300'>Join the category of over 1 million people who are using ZekePay to shop , travel, slay, eat, lounge, ride and pay later</p>

                    <div className='flex space-x-5'>
                        <div className='flex flex-col border border-[#60269E] bg-white px-5 py-1 text-black rounded-xl'>
                            <p className='text-[11px]'>Get it on</p>
                            <p>Google Play</p>
                            
                        </div>

                        <div className='flex flex-col border border-[#60269E] bg-white px-5 py-1 text-black rounded-xl'>
                                <span className='text-[11px]'>Download on the</span>
                                <span>App Store</span>   
                        </div>
                    </div>
                </div>

                <div>
                    <img src={iphone2} alt="" className='w-[320px] pb-20' />
                </div>

                <div>
                    <img src={business} alt="" className='w-[220px]' />
                </div>
            </div>
        </div>
    )
}

export default Download