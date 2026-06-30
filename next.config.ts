import "./src/env";

import type { NextConfig } from "next";
// import async from './src/app/(dashboardLayout)/@provider/provider-dashboard/createmenu/page';
import { env } from "./src/env";

const nextConfig: NextConfig = {
  /* config options here */

  // reactCompiler : true,

  // async rewrites(){
  //   return [
  //     {
  //       source: "/api/auth/:path",
  //       destination: env.API_URL + "/api/auth/:path*",
  //     }
  //   ]
  // }
};



export default nextConfig;
