import { useState } from 'react'
import { RevenueCard } from './components/RevenueCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-3'>
    <RevenueCard title={"Amount Pending"} amount={"93,100.20"} orderCount={13}></RevenueCard>
    </div>

  )
}

export default App
