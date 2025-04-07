import CardWrapper from "@/components/CardWrapper";

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default async function Home() {
    await wait(3000);
    return (
        <div className="bg-background text-foreground w-screen h-lvh flex flex-col items-center justify-center align-middle m-auto container relative">
            <CardWrapper />
        </div>
    );
}
