

const EarnPointNewUser = () => {
  return (
    <div className="absolute top-6 border boreer-gray-1 left-6 w-511 h-70 p-24 ml-20">
      <h2 className="font-bold text-base text-white border bg-cyan-500 px-10 py-5 gap-10 rounded-lg">Enter the correct details of your transaction below</h2>
      <p className="font-inter text-sm font-normal leading-3.82 tracking-tighter text-center">By filling this form you agree to the terms and condition guiding the award <br/> for points.</p>
      <form className="mt-16" style={{ top: '166px', left: '37px', gap: '16px' }}>
      <div className="flex flex-col">
          <label htmlFor="emailaddress" className="font-bold">Email Address </label>
          <input type="text" id="emailaddress" placeholder="Enter email address" className="border border-gray-400 rounded px-4 py-2" />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="amountSpent" className="font-bold">Amount spent</label>
          <input type="text" id="amountSpent" placeholder="Write total amount" className="border border-gray-400 rounded px-4 py-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="facilityName" className="font-bold mt-3">Name of facility</label>
          <input type="text" id="facilityName" placeholder="Which facility did you make payment?" className="border border-gray-400 rounded px-4 py-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="date" className="font-bold mt-3">Date</label>
          <input type="text" id="date" placeholder="--/--/--" className="border border-gray-400 rounded px-4 py-2" />
        </div>
      </form>
      <div className="flex ml-20 justify-between mt-11" style={{ height: '70px', padding: '12px 80px', gap: '16px', borderRadius: '5px 0px 0px 0px', borderTop: '1px', fontFamily: 'Inter', fontSize: '14px', fontWeight: '600', lineHeight: '16.94px', textAlign: 'center', background: 'white' }}>
        <button className="bg-gray-100 text-black border border-gray-400 px-8 py-2 rounded">Cancel</button>
        <button className="bg-cyan-500 text-white px-8 py-2 rounded">Submit</button>
      </div>
    </div>
  );
}

export default EarnPointNewUser;
