import { Play } from "lucide-react"


const LmsDetailCard = () => {
    return (
        <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold tracking-tight pb-[0.7rem]">Introduction</h2>
            <div className="h-[80vh] w-full lg:w-[120vh] flex justify-center items-center bg-slate-200">
                <Play />
            </div>
            <div className="pt-[1.4rem] space-y-4 ">
                <span>
                <h2 className="text-2xl font-semibold tracking-tight pb-[0.7rem]">Objective</h2>
                <p className="text-muted-foreground">lore mipsum Neque porro quisquam est qui dolorem ipsum quia dolor</p>
                </span>
                <hr />
                <span >
                <h2 className="text-2xl font-semibold tracking-tight pt-[1.4rem] pb-[0.7rem]">Assignment</h2>
                <p className="text-muted-foreground">lore mipsum Neque porro quisquam est qui dolorem ipsum quia dolor</p>
                </span>
            </div>
        </div>
    )
}

export default LmsDetailCard