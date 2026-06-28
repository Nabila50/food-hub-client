import AllProvidersCard from '@/components/modules/allProviders/AllProvidersCard';
import { providerService } from '@/services/provider.service';
import { ProviderType } from '@/types/provider.types';
import React from 'react'

export default async function AllProviders() {
  
 const { data } = await providerService.getAllProviders();

 console.log("data from all provider page: ", data);

  return (
    <div className="grid grid-cols-3 my-10 ml-15 gap-5 w-6xl">

      {
        data?.map((provider: ProviderType)=>(
          <AllProvidersCard key={provider.id} provider={provider}></AllProvidersCard>
        ))
      }
        
    </div>
  )
}
