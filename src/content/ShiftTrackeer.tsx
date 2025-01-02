import  from 'react'
import { GoDownload } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";

interface shiftTracker{
    id:number,
    img: string,
    name: string,
    start:  string,
    end: string,
    tracker: number
}

const shif :shiftTracker[] =[
    {
        id:1,
        img:"/public/img/abe.jpeg",
        name: "Able Kayodal",
        start: "Shif Start: 8:00am",
        end: "Shift End: 4:00pm",
        tracker: 0.6 
    },
    {
        id:1,
        img:"/public/img/abe1.jpeg",
        name: "Faith Omosuyi",
        start: "Shif Start: 8:20am",
        end: "Shift End: 4:00pm",
        tracker: 0.3 
    },
    {
        id:2,
        img:"/public/img/abe2.jpeg",
        name: "Lade Akin",
        start: "Shif Start: 8:00am",
        end: "Shift End: 4:00pm",
        tracker: 0.4 
    },
   
]

const ShiftTrackeer = () => {
  return (
    <div className='mt-3'>
        <div className='bg-white dark:bg-gray-800 w-[26vw] shadow-md px-4 py-2 rounded-xl'>
            <div className='flex justify-between items-center dark:text-white'>
                <h3>Shift Tracker</h3>

                <div className='flex items-center gap-1'>
                    <GoDownload className=' cursor-pointer'/>
                    <BsThreeDots/>
                </div>
            </div>
            <p className='text-gray-400 font-openSans text-[13px] mt-1'>Showing shift timing data</p>
            {shif.map((tracker)=> (
                <div key={tracker.id} className='flex items-center gap-3 dark:text-white'>
                    <img src={tracker.img} alt="img" className='w-9 h-9 rounded-full' />
                    <div>
                        <h3 className=''>
                            {tracker.name}
                        </h3>
                        <span className='text-end flex justify-end text-[12px] -mt-4 text-gray-300'>{tracker.start}</span>
                        <progress value={tracker.tracker} className='w-[20vw] progress-bar'></progress>
                        <span className='text-end flex justify-end text-[12px] -mt-1 text-gray-300'>{tracker.end}</span>
                    </div>
                </div>
            ))}
        </div>

        <img src="/img/fr.png" alt="" className='w-[26vw] h-[25%] mt-4' />
    </div>
  )
}

export default ShiftTrackeer