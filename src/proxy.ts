import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";
import { Roles } from "./constants/roles";
// import { Roles } from "./constants/roles";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

const { data: sessionData } = await userService.getSession();

if (!sessionData) {
  return NextResponse.redirect(new URL("/login", request.url));
}

const role = sessionData.user.role;

console.log("PATH:", pathname);
console.log("ROLE:", role);
 

  //* Customer Dashboard
  if (
    pathname.startsWith("/customer-dashboard") &&
    role !== Roles.customer
  ) {
    return redirectToRoleDashboard(role, request);
  }

  //* Provider Dashboard
  if (
    pathname.startsWith("/provider-dashboard") &&
    role !== Roles.provider
  ) {
    return redirectToRoleDashboard(role, request);
  }

  // Admin Dashboard
  if (
    pathname.startsWith("/admin-dashboard") &&
    role !== Roles.admin
  ) {
    return redirectToRoleDashboard(role, request);
  }

  return NextResponse.next();
}

function redirectToRoleDashboard(
  role: string,
  request: NextRequest
) {
  switch (role) {
    case Roles.admin:
      return NextResponse.redirect(
        new URL("/admin-dashboard", request.url)
      );

    case Roles.provider:
      return NextResponse.redirect(
        new URL("/provider-dashboard", request.url)
      );

    case Roles.customer:
      return NextResponse.redirect(
        new URL("/customer-dashboard", request.url)
      );

    default:
      return NextResponse.redirect(
        new URL("/login", request.url)
      );
  }
}

export const config = {
  matcher: [
    "/customer-dashboard",
    "/customer-dashboard/:path*",
    "/provider-dashboard",
    "/provider-dashboard/:path*",
    "/admin-dashboard",
    "/admin-dashboard/:path*",
  ],
};








// import { NextRequest, NextResponse } from "next/server";
// import { userService } from "./services/user.service";

// export async function proxy(request: NextRequest){

//   let isAuthentication = false;
 

//   const { data } = await userService.getSession();

//   if(data){
//     isAuthentication = true;
//   }
   

//   return NextResponse.next();
// }

// export const config= {
//   matcher: ["/customer-dashboard"]
// }








