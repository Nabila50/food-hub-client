import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="items-center mx-auto">
       
      <img className="h-90 w-150" src="https://i.ibb.co/4ZKJC08k/error-page-img.jpg" alt="" />
      <div className="items-center justify-center text-center">
        <Link href="/"><button className="bg-amber-300 w-50 mt-5 h-12 rounded-2xl">Return Home</button></Link>
      </div>
      
    </div>
  )
}