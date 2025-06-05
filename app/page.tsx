import { Button } from "@heroui/button";
import {Image} from "@heroui/image";
import RootLayout from "./layout";


export default function HomePage() {
  return (
    <RootLayout>
      <h1 className="text-red-500 border-2 border-red-500">Nicholas Rice</h1>
      <Image
      className="rounded-full border-2 border-red-500"
      width={32}
      alt="Nicholas Rice"
      src="/nrice_pic.png" />
      <Button className="w-500 text-red-500">Click Me!</Button>
    </RootLayout>
  )
}
