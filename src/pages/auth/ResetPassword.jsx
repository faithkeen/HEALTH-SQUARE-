

function ResetPassword() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
            <div className="w-[532.44px] h-[383px] bg-white rounded-md shadow-lg p-8 relative">
                <h2 className="text-4xl font-bold text-black mb-4">Resset Password</h2>
                <p className="text-sm text-gray-600 mb-6">Enter the new password you want to use.</p>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">New Password</label>
                        <input type="email" id="email" name="email" className="mt-1 p-2 w-[472.44px] h-[55px] border border-gray-300 rounded-md" placeholder="Password" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Confirm Password</label>
                        <input type="email" id="email" name="email" className="mt-1 p-2 w-[472.44px] h-[55px] border border-gray-300 rounded-md" placeholder="Confirm Password" />
                    </div>
                </form>
                <button type="submit" className="w-[472px] h-[65px] mt-3 bg-cyan-500 text-white rounded-md px-4 py-2">Reset My Password</button>
            </div>
        </div>
    );
}

export default ResetPassword;
