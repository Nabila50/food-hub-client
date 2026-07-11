import { redirect } from "next/navigation";
import { userService } from "@/services/user.service";
import { profileService } from "@/services/profile.service";

export default async function DashboardPage() {
  const user = await profileService.getMyProfile();

  if (!user) {
    redirect("/login");
  }

  switch (user.role) {
    case "ADMIN":
      redirect("/admin-dashboard");

    case "PROVIDER":
      redirect("/provider-dashboard");

    case "CUSTOMER":
      redirect("/customer-dashboard");

    default:
      redirect("/login");
  }
}