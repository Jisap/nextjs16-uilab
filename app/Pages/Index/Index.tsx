import Courses from "./Course/page"
import EventBanner from "./EventBanner/page"
import Hero from "./Hero/page"
import NewWork from "./NewWork/page"
import PopularGroups from "./PopularGroups/page"


const Index = () => {
  return (
    <>
      <Hero />
      <PopularGroups />
      <EventBanner />
      <Courses />
      <NewWork />
    </>
  )
}

export default Index