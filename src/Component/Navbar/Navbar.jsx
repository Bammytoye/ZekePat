
const Navbar = () => {
    return (
        <div className="fixed w-full bg-gradient-to-r from-[#9f8eb3] via-[#ead8fc] to-[#eee6f7] z-50">
            <div className="flex justify-between px-24 py-3 items-center shadow-lg cursor-pointer">   
                <div>
                    <p className="text-[#60269E] font-bold">ZekePay App</p>
                </div>

                <div className="flex justify-between items-center space-x-11">
                        <p value="company">Company</p>
                        <p value="about us">About Us</p>
                        <p value="career">Career</p>

                        <p>Product</p>
                        <p>Blog</p>
                    <button type="submit" className="px-3 border-l-2 border-r-2 py-1 border-[#60269E] rounded-full text-[#60269E]">Sign Up</button>
                    <button type="submit" className="px-5 py-1 bg-[#60269E] rounded-full text-white">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar