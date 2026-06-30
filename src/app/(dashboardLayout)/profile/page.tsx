import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { profileService } from "@/services/profile.service";

export default async function ProfilePage() {
  const user = await profileService.getMyProfile();
  const profile = user ?? {};

  return (
    <div className="w-2xl">
      <Card className="border rounded-lg p-6 bg-lime-200">
        <div>
          <img
            src={profile.image ?? "/default-avatar.png"}
            className="w-60 h-60 rounded-full"
            alt="profile"
          />
        </div>
        <div>
          <CardTitle className="text-2xl font-bold text-right">
            {profile.name ?? "No name available"}
          </CardTitle>

          <CardContent className="text-lg text-right">
            <h1>Email: {profile.email ?? "N/A"}</h1>
            <p>Role: {profile.role ?? "N/A"}</p>
            <p>Phone: {profile.phone ?? "N/A"}</p>
            <p>Status: {profile.status ?? "N/A"}</p>
            <p>Email Verification: {profile.emailVerified ?? "N/A"}</p>
          </CardContent>
        </div>

        {profile.role === "PROVIDER" && profile.provider && (
          <div className="mt-4">
            <h3 className="font-bold">Provider Details</h3>
            <p>Company: {profile.provider.companyName ?? "N/A"}</p>
          </div>
        )}
      </Card>
    </div>
  );
}
