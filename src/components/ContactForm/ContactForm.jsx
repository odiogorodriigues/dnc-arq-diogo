import { useContext, useEffect, useState } from "react";
import "./ContactForm.css";

// COMPONENTS
import Button from "../Button/Button";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

// CONTEXT
import { AppContext } from "../../contexts/AppContext";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [formSubmitLoading, setFormSubmitLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { languages, language, loanding } = useContext(AppContext);

    // Só renderiza quando os textos estiverem carregados
    if (loanding || !languages || !languages[language]) {
        return (
            <footer>
                <LoadingSpinner />
            </footer>
        );
    }

    const contactTexts = languages[language].contact;
    const generalTexts = languages[language].general;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isFormValid) {
            setFormSubmitLoading(true);
            try {
                const response = await fetch(
                    "https://api.web3forms.com/submit",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            ...formData,
                            access_key: "f0fd160f-2177-4011-a59b-33fb321f64ee",
                        }),
                    }
                );

                if (response.ok) {
                    setFormSubmitted(true);
                } else {
                    alert(
                        languages[language].general.error
                    );
                    console.error("Form response: ", response.statusText);
                }
            } catch (e) {
                console.error("Form error: ", e);
                alert(languages[language].general.error);
            } finally {
                setFormSubmitLoading(false);
            }
        }
    };

    useEffect(() => {
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        const isValid =
            formData.name.trim() &&
            formData.email.trim() &&
            isValidEmail(formData.email) &&
            formData.message.trim();

        setIsFormValid(isValid);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className='contact-form d-flex fd-column al-center'>
            <h2>{contactTexts.title}</h2>
            <form onSubmit={handleSubmit}>
                <div className='d-flex form-group'>
                    <input
                        className='form-input'
                        type='text'
                        id='name'
                        name='name'
                        placeholder={contactTexts.pl1}
                        onChange={handleChange}
                    />

                    <input
                        className='form-input'
                        type='email'
                        id='email'
                        name='email'
                        placeholder={contactTexts.pl2}
                        onChange={handleChange}
                    />
                </div>

                <div className='d-flex form-group'>
                    <textarea
                        className='form-input'
                        name='message'
                        id='message'
                        placeholder={contactTexts.pl3}
                        onChange={handleChange}
                        rows='4'
                    ></textarea>
                </div>

                <div className='al-center d-flex jc-end form-group'>
                    {formSubmitted && (
                        <p className='text-primary'>{contactTexts.sucessMsg}</p>
                    )}
                    <Button
                        type='submit'
                        buttonStyle='secondary'
                        disabled={!isFormValid || formSubmitLoading}
                    >
                        {generalTexts.send}
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
