import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { profileService } from "@/services/profile.service";

export default async function ProfilePage() {
  const user = await profileService.getMyProfile();

  return (

    <div className="w-2xl">
      <Card className="border rounded-lg p-6 bg-lime-200">
        <div>
          <img
            src= {user.image}
            className="w-60 h-60 rounded-full"
            alt="profile"
          />
        </div>
        <div>
           <CardTitle className="text-2xl font-bold text-right">
          {user.name}
        </CardTitle>

        <CardContent className=" text-lg text-right">
          <h1>Email: {user.email}</h1>
          <p>Role: {user.role}</p>
          <p>Phone: {user.phone}</p>
          <p>Status: {user.status}</p>
          <p>Email Verification: {user.emailVerified}</p>
        </CardContent>

        </div>

       

        {user.role === "PROVIDER" && user.provider && (
          <div className="mt-4">
            <h3 className="font-bold">Provider Details</h3>

            <p>
              Company:
              {user.provider.companyName}
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}
