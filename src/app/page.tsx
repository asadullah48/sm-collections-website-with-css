import Hero from "@/components/hero"
import Feature from "@/components/feature"
import BlockSection from "@/components/blogSection"
import NewCollection from "@/components/newCollection"
import Collection from "@/components/collection"


export default function Home(){
  return(
    <main>
      <Hero />
      <Feature />
      <NewCollection />
      <Collection />
      <BlockSection />
    </main>
  )
}