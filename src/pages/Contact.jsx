import { useContext } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import ContactForm from "../components/ContactForm/ContactForm";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

// CONTEXT
import { AppContext } from "../contexts/AppContext";

function Contact() {
  const { languages, language, loanding } = useContext(AppContext);

  // Só renderiza quando os textos estiverem carregados
  if (loanding || !languages || !languages[language]) {
    return (
      <footer>
        <LoadingSpinner />
      </footer>
    );
  }

  const contactTitle = languages[language].menu.contact;
  return (
    <>
      <Header />
      <Banner
        title={contactTitle}
        image="contact.jpg"
      />
      <div className="container">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
