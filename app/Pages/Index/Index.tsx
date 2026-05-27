import BuyBanner from "./BuyBanner/page"
import Courses from "./Course/page"
import EventBanner from "./EventBanner/page"
import Hero from "./Hero/page"
import NewWork from "./NewWork/page"
import PopularGroups from "./PopularGroups/page"
import Shop from "./Shop/page"


const Index = () => {
  return (
    <>
      <Hero />
      <PopularGroups />
      <EventBanner />
      <Courses />
      <NewWork />
      <BuyBanner />
      <Shop />
    </>
  )
}

export default Index