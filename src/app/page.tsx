import { getQueryClient, trpc } from "@/trpc/server";
import { Client } from "./client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Suspense } from "react";

const Page = async () => {
    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

    return (
        <div className="text-red-500 font-extrabold">
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Suspense fallback={<p className="text-blue-500 font-extrabold">Loading...</p>}>
                    <Client />
                </Suspense>
            </HydrationBoundary>
        </div>
    )
};

export default Page;
