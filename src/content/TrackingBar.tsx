
import React from 'react'

interface TrackingBarProps {
    step: number;
    
  }
  

const TrackingBar: React.FC<TrackingBarProps> = ({step}) => {
  return (
    <div>
         <div className="mt-2 mb-2">
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold">Company Info</h2>
            <p className="text-gray-500 text-[13px]">Please fill in the company details below.</p>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold">Employees</h2>
            <p className="text-gray-500">Please enter your company-given details.</p>
          </div>
        )}
      </div>

      <div className='flex gap-3'>
        <div className={`h-1 w-44 rounded ${step>=1 ? "bg-blue-600" : "bg-gray-300"}`}></div>
        <div className={`h-1 w-44 rounded ${step>=2 ? "bg-blue-600" : "bg-gray-300"}`}></div>
      </div>

     
    </div>
  )
}

export default TrackingBar