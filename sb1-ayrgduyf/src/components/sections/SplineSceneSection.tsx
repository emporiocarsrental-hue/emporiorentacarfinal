import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden pointer-events-auto">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex h-full pointer-events-auto">
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center pointer-events-auto">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Have any questions?
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Ask Emporio AI, our Intelligent support here for you 24/7 helping you with any of our business queries!
          </p>
        </div>

        <div className="flex-1 relative pointer-events-auto">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
