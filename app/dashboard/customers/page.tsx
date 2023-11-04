// import { Metadata } from "next";
// import { fetchCustomers } from "@/app/lib/data";
// import Table from "@/app/ui/customers/table";
// import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
// import { Suspense } from "react";

// export const metadata: Metadata = {
//   title: "Customers",
// };

// export default async function Page() {
//   const customers = await fetchCustomers();
//   return (
//     <Suspense fallback={<InvoicesTableSkeleton />}>
//       <Table customers={customers} />
//     </Suspense>
//   );
// }

import Table from "@/app/ui/customers/table";
import { lusitana } from "@/app/ui/fonts";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { fetchFilteredCustomers } from "@/app/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className={`${lusitana.className}w-full`}>
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <Table customers={customers} />
      </Suspense>
    </div>
  );
}
