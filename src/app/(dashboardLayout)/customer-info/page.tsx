import CustomerInfoTable from "@/components/modules/customerInfo/CustomerInfoTable";
import { userService } from "@/services/user.service";
 

export default async function CustomerPage() {
  const response = await userService.getCustomer();

  const customers = response?.data?.data ?? [];

  return <CustomerInfoTable customers={customers} />;
}