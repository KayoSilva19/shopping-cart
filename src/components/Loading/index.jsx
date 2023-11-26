import { Circle, CircleNotch } from '@phosphor-icons/react'

export function Loading() {
  return (
    <div className="p-[120px_20px_50px] w-full flex justify-center items-center">
      <CircleNotch size={32} className="animate-spin z-20 text-zinc-900" />
    </div>
  )
}
