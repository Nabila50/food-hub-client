 import { providerService } from "@/services/provider.service";

export default async function ProviderProfilePage() {
  const response = await providerService.getProfile();

  const provider = response.data;

  if (!provider) {
    return (
      <div className="p-10 text-red-500">
        Provider profile not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="border rounded-lg p-6">
        <img
          src={
            provider.user?.image ||
            "https://avatar.vercel.sh/default"
          }
          className="w-24 h-24 rounded-full"
          alt=""
        />

        <h2 className="text-2xl font-bold mt-4">
          {provider.user.name}
        </h2>

        <p>{provider.user.email}</p>

        <p>
          Company: {provider.companyName}
        </p>

        <p>
          Role: {provider.user.role}
        </p>

        <p>
          Phone: {provider.user.phone}
        </p>
      </div>
    </div>
  );
}