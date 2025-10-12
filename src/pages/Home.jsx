import Button from "../components/Button/Button"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Banner from "../components/Banner/Banner"

function Home () {
  return (
    <>
      <Header />
      <Button buttonStyle="primary"arrow>Olá!</Button>
      <Banner title="Olá!" image="about.jpg" />
      <Footer />
    </>
  )
}

export default Home