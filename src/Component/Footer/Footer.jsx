
const Footer = () => {
    return (
        <div className="px-24 pt-24 bg-gradient-to-r from-[#b9a7cc] via-[#a39aac] to-[#bcb9c0]">
            <div className="flex justify-between items-start cursor-pointer">
                <div className="flex flex-col space-y-5">
                    <h2 className="font-bold">ZekePay</h2>

                    <h2 className="w-[250px] font-bold text-2xl">Social Payment For ZekePay and Payment Transfer</h2>

                    <div className="flex space-x-4">
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

                <div className="flex flex-col space-y-5">
                    <h2 className="font-bold ">Company</h2>

                    <ul className="space-y-3 text-gray-800">
                        <li>About Us</li>
                        <li>Career</li>
                        <li>Contact</li>
                        <li>Affliate Program</li>
                    </ul>
                </div>

                <div className="flex flex-col space-y-5">
                    <h2 className="font-bold ">Help</h2>

                    <ul className="space-y-3 text-gray-800">
                        <li>Blog</li>
                        <li>FAQ</li>
                        <li>Report a Bug</li>
                    </ul>
                </div>

                <div className="flex flex-col space-y-5">
                    <h2 className="font-bold ">Product</h2>

                    <ul className="space-y-3 text-gray-800">
                        <li>Trade</li>
                        <li>Vault</li>
                        <li>Bundle Leveraged </li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-between items-center pt-2 text-sm border-t-2 border-[#c6b5c9] mt-4">
                <p>(c) Copyright ZekePay 2024. All right reserved.</p>

                <p>Terms of Service | Privacy Policy </p>
            </div>
        </div>
    )
}

export default Footer