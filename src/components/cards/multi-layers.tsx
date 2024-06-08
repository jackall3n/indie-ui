/**
 *
 * Simple Cards
 *  - Rounded
 *  - Square
 *  - One border
 *  - Two border
 *  - with Badge
 * Cards with images
 * Complex Cards: multi layers, hover effects, etc.
 *
 */

import { cn } from "@/src/utils/cn";

const cardContent = {
  title: "Lorem ipsum dolor",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum! Qui dicta debitis aliquid quo molestias explicabo iure!",
};
const CardBody = ({ className = "" }) => (
  <div className={cn(className)}>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
      {cardContent.title}
    </h3>
    <p className="text-gray-700 dark:text-gray-300">
      {cardContent.description}
    </p>
  </div>
)
//======================================
export const MultilayerCardV_1 = () => {
  return (
    <div className="py-14">
      <div className="relative w-full">
        <div className="absolute scale-x-95 inset-0 -rotate-[5deg] rounded-lg bg-gray-200 dark:bg-zinc-800 py-10" />
        <CardBody className="px-6 py-8 relative mx-auto rounded-lg shadow-lg dark:bg-zinc-900/90 backdrop-blur-lg" />
      </div>
    </div>
  )
}
//======================================
export const MultilayerCardV_2 = () => {
  return (
    <div className="py-14">
      <div className="relative mx-auto h-72 sm:h-48">
        <div
          className="dark:bg-zinc-900 bg-white absolute size-full rounded-3xl border border-neutral-200 dark:border-zinc-800 scale-y-[1.15] scale-x-90 -top-4"
          style={{
            transformOrigin: "top center",
          }}
        ></div>
        <div
          className="absolute dark:bg-zinc-950 bg-white size-full rounded-3xl p-2 md:p-4 shadow-xl border border-neutral-200 dark:border-zinc-800 center"
          style={{
            transformOrigin: "top center",
          }}
        >
          <CardBody className="p-3" />
        </div>
      </div>
    </div>
  )
}

//======================================
export const MultilayerCardV_3 = () => {
  return (
    <div className="py-14">
      <div className="relative mx-auto h-72 sm:h-48">
        <div
          className="dark:bg-zinc-900/20 bg-white absolute size-full rounded-3xl border border-neutral-200 dark:border-zinc-800 scale-[0.95] -top-6"
          style={{
            transformOrigin: "top center",
          }}
        ></div>
        <div
          className="dark:bg-zinc-900/30 bg-white absolute size-full rounded-3xl border border-neutral-200 dark:border-zinc-800 scale-[0.97] -top-3"
          style={{
            transformOrigin: "top center",
          }}
        ></div>
        <div
          className="absolute dark:bg-zinc-950 bg-white size-full rounded-3xl p-2 md:p-4 shadow-xl border border-neutral-200 dark:border-zinc-800 shadow-black/[0.1] dark:shadow-white/[0.02] center"
          style={{
            transformOrigin: "top center",
          }}
        >
          <CardBody className="p-3" />
        </div>
      </div>
    </div>
  )
}
