import { Separator } from "@/components/ui/separator";

export default function FooterPage() {
  return (
    <div className="flex bg-lime-100 text-black w-full p-10 justify-evenly place-items-center">
      <div>
        <h1 className="text-2xl font-semibold text-gray-700">Address</h1>
        <br />
        <p>123, Bangla Avenu</p>
        <p>Dhaka, Bangladesh</p>
      </div>
      <Separator orientation="vertical"/> 
      <div>
        <h1 className="text-2xl font-semibold text-gray-700">Opening Time</h1>
        <br />
        <p>Monday-Friday</p>
        <p>7am - 10pm</p>
        <p>(BreakFast, Lunch, Dinner)</p>
      </div>
         <Separator orientation="vertical"/> 
  
     <div>
        <h1 className="text-2xl font-semibold text-gray-700">Contact Us</h1>
        <br />
        <p>foodhub@resturant.com</p>
        <p>+88019383727833</p>
      </div>
      
    </div>
  );
}
