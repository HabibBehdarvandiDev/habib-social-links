"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

const Loading = () => {
    return (
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto p-4 justify-center items-center">
            <Card className="relative z-10 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <CardContent className="flex flex-col items-center justify-center gap-4 py-8">
                    <Skeleton className="rounded-full w-[150px] h-[150px]" />

                    <Skeleton className="h-6 w-40 rounded-md" />
                    <Skeleton className="h-4 w-28 rounded-md" />

                    <Skeleton className="h-8 w-64 rounded-full bg-green-400/20" />

                    <div className="w-full flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 mt-6">
                        {[...Array(5)].map((_, index) => (
                            <Skeleton
                                key={index}
                                className="h-10 w-full sm:w-40 rounded-md"
                            />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Loading;
