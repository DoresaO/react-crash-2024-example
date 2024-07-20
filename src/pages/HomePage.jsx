import Hero from '../components/Hero'
import HomerCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <HomerCards/>
    <JobListings  isHome={true} />
    <ViewAllJobs/>
    </>
  )
}

export default HomePage