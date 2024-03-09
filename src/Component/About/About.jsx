import cashOut from '/src/assets/Image/Cashout 1.png'
import star from '/src/assets/Image/Star 1.png'

const About = () => {
    return (
        <div className='h-100vh px-24 bg-gradient-to-r from-[#9f8eb3] via-[#ead8fc] to-[#eee6f7]'>
            <div className="flex justify-between items-center">
                <div className='space-y-7'>
                    <h2 className='w-[450px] text-5xl font-extrabold'>
                        Payments made easy on <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-600 to-blue-800'>Zeke Pay</span> 
                    </h2> 

                    <p className='text-gray-600'>A platform for accepting payment, making payments and paying other bills necessary</p>

                    <div className='flex space-x-10'>
                        <button type="submit" className='px-8 py-1 bg-transparent border text-[#60269E] border-[#60269E] rounded-full'>Get Started</button>
                        <button type="submit" className='px-8 py-1 bg-[##60269E] text-white bg-[#60269E] border border-[#60269E] rounded-full'>Join our Community</button>
                    </div>
                    <img src={star} alt=""  className='absolute top-[100px] left-9'/>
                </div>

                <div className='relative'>
                    <img src={star} alt=""  className='absolute top-[100px]'/>
                    <img src={cashOut} alt="" className="pt-28 pb-20  w-[450px]"/>
                    <img src={star} alt=""  className='absolute top-[450px]'/>
                </div>                                       
            </div>
        </div>
    )
}

export default About