import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionHome() {
  return (
    <div className="w-6xl mb-10">
      <h1 className="mb-5 text-2xl font-bold ml-5 text-gray-700">Frequent Ask Questions</h1>
        <Accordion
      type="single"
      collapsible
      defaultValue="shipping"
      className=" bg-lime-50 p-5 rounded-2xl text-2xl"
    >
      <AccordionItem value="advance">
        <AccordionTrigger className="text-lg hover:bg-lime-300 p-5">Can I schedule an order in advance?</AccordionTrigger>
        <AccordionContent>
          Absolutely! You can schedule your order for a future date and time that best fits your schedule.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="delivery">
        <AccordionTrigger className="text-lg hover:bg-lime-300 p-5">Is there a minimum order for delivery?</AccordionTrigger>
        <AccordionContent>
          The minimum order amount depends on your delivery location. The required minimum will be displayed during checkout.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="delivery">
        <AccordionTrigger className="text-lg hover:bg-lime-300 p-5">Is there a minimum order for delivery?</AccordionTrigger>
        <AccordionContent>
          The minimum order amount depends on your delivery location. The required minimum will be displayed during checkout.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="contact">
        <AccordionTrigger className="text-lg hover:bg-lime-300 p-5">How can I contact FoodHub?</AccordionTrigger>
        <AccordionContent>
         You can reach us by phone, email, or through the contact form on our website. Our customer support team is always happy to assist you.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="contact">
        <AccordionTrigger className="text-lg hover:bg-lime-300 p-5">Do you offer contactless delivery?</AccordionTrigger>
        <AccordionContent>
         Yes. We offer contactless delivery upon request to ensure a safe and convenient experience.
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    </div>
  
  )
}
0