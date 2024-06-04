import { cn } from "@/src/utils/cn"
import Image from "next/image"

const cardContent = {
  title: "Lorem ipsum dolor",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum! Qui dicta debitis aliquid quo molestias explicabo iure!",
}
const CardBody = ({ className = "p-4" }) => (
  <div className={cn(className)}>
    <h3 className="text-2xl font-bold text-gray-100 tracking-tighter mt-3 mb-2">
      {cardContent.title}
    </h3>
    <p className="text-gray-100">{cardContent.description}</p>
  </div>
)

//======================================
export const Card_with_image_bg_v1 = () => {
  return (
    <div className="pt-4">
      <div className="rounded-2xl relative aspect-video max-w-xl mx-auto overflow-hidden group">
        <Image
          fill
          className="w-full object-cover m-0"
          src="/lemons.jpeg"
          alt="lemon"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
        />
        {/* overlay */}
        <div className="absolute inset-0 from-black/90 via-black/70 to-black/5 bg-gradient-to-t backdrop-blur-sm transition-all duration-300"></div>
        <CardBody className="p-4 absolute inset-0 flex flex-col justify-end size-full" />
      </div>
    </div>
  )
}

//======================================
export const Card_with_image_bg_v2 = () => {
  return (
    <div className="pt-4">
      <div className="rounded-2xl relative aspect-video max-w-xl mx-auto overflow-hidden group">
        <Image
          fill
          className="w-full object-cover m-0"
          src="/lemons.jpeg"
          alt="veggtables"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
        />
        {/* overlay */}
        <div className="absolute inset-0 from-black/95 via-black/70 to-black/10 bg-gradient-to-t"></div>
        <CardBody className="p-4 absolute inset-0 flex flex-col justify-end size-full" />
      </div>
    </div>
  )
}

//======================================
export const Card_with_image_bg_v3 = () => {
  return (
    <div className="mx-auto from-red-700 to-green-400 bg-gradient-to-br p-[3px] max-w-xl rounded-2xl">
      <div className="rounded-2xl relative aspect-video max-w-xl overflow-hidden group">
        <Image
          fill
          src="/waterlemons.jpg"
          alt="image"
          className="w-full object-cover m-0 rounded-2xl"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
        />
        {/* overlay */}
        <div className="absolute inset-0 from-zinc-900/95 via-zinc-900/70 to-zinc-900/5 bg-gradient-to-t"></div>
        <CardBody className="p-4 absolute inset-0 flex flex-col justify-end size-full" />
      </div>
    </div>
  )
}

//======================================
export const Card_with_image_bg_v4 = () => {
  return (
    <div className="pt-4">
      <div className="rounded-2xl relative aspect-video max-w-xl mx-auto overflow-hidden group">
        <Image
          fill
          className="w-full object-cover m-0"
          src="/lemons.jpeg"
          alt="veggtables"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
        />
        {/* overlay */}
        <div className="flex flex-col justify-end h-full p-2">
          <CardBody className="px-4 py-0 z-10 isolate bg-gray-600/35 rounded-2xl backdrop-blur-lg" />
        </div>
      </div>
    </div>
  )
}
