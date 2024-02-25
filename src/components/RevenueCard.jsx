export const RevenueCard=({title,orderCount,amount})=>{
    return (<div className="bg-white rounded shadow-md p-10">
    <div className="text-gray-700 flex">
        <div>{title}</div>
        <div className="pl-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" 
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
</div>
        
    </div>
    <div className="flex justify-between">
        <div className="font-bold text-3xl pt-3">${amount} </div>
        <div className="text-blue-500 cursor-pointer underline font-medium flex-col justify-center">
            {orderCount ? <div className="flex"> {orderCount} order(s) 
        <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        </div> : null}</div>
    </div>
</div>)
    
}