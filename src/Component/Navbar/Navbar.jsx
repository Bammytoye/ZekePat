
const Navbar = () => {
    return (
        <div className="cursor-pointer bg-blue-800 text-white">
            <div className="flex justify-between items-center h-[60px] px-24">
                <div>
                    <p>ZekePay App</p>
                </div>

                <div className="flex justify-between items-center space-x-11">
                    <select name="" id="" className="bg-transparent">
                        <option value="company">Company</option>
                        <option value="about us">About Us</option>
                        <option value="career">Career</option>
                    </select>

                    <p>Product</p>
                    <p>Blog</p>
                </div>

                <div className="flex justify-between items-center space-x-11">
                    <button type="submit">Sign Up</button>
                    <button type="submit">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar