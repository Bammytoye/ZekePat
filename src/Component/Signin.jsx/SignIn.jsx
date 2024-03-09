import coder from '/src/assets/Image/pngtree-vector-working-on-laptop-icon-png-image_924859 2.png'

const SignIn = () => {
    return (
        <div className="bg-gradient-to-r from-[#9f8eb3] via-[#ead8fc] to-[#eee6f7] px-24">
            <div className='flex justify-center items-center p-40'>
                <div className='p-10 flex flex-col text-center items-center justify-center border border-white bg-white'>
                    <img src={coder} alt="" className='w-10'/>
                    <h5 className='text-[#60269E] font-bold'>Sign Up</h5>
                    <p className='text-[12px]'>Create a profile and confirm your identity. It's that simple to begin your crypto journey. Let's go!!</p>
                </div>

                <div className='p-10 flex flex-col text-center items-center justify-center border border-gray-100 shadow-lg bg-white'>
                    <img src={coder} alt="" className='w-10'/>
                    <h5 className='text-[#60269E] font-bold'>Funds</h5>
                    <p className='text-[12px]'>Create a profile and confirm your identity. It's that simple to begin your crypto journey. Let's go!!</p>
                </div>

                <div className='p-10 flex flex-col text-center items-center justify-center border border-white bg-white'>
                    <img src={coder} alt="" className='w-10'/>
                    <h5 className='text-[#60269E] font-bold'>Make Payment</h5>
                    <p className='text-[12px]'>Create a profile and confirm your identity. It's that simple to begin your crypto journey. Let's go!!</p>
                </div>
            </div>
        </div>
    )
}

export default SignIn