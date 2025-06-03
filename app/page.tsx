import { Button } from "@heroui/button";
import {Image} from "@heroui/image";
import RootLayout from "./layout";


export default function HomePage() {
  return (
    <RootLayout>
      <h1>Nicholas Rice</h1>
      <img
      className="rounded-full w-32 h-32 border-2 border-red-500"
      alt="Nicholas Rice"
      src="/nrice_pic.png" />
      <Button className="w-52 text-red-500">Click Me!</Button>
    </RootLayout>
  )
}
