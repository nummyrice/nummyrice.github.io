import { Button } from "@heroui/button";
import {Image} from "@heroui/image";
import RootLayout from "./layout";


export default function HomePage() {
  return (
    <RootLayout>
      <h1>Nicholas Rice</h1>
      <img
      className="rounded-full object-cover w-32 h-32"
      alt="Nicholas Rice"
      src="/nrice_pic.png" />
      <Button>Click Me!</Button>
    </RootLayout>
  )
}
