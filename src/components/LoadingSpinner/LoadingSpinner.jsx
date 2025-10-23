
import "./LoadingSpinner.css";
import LoadingSpinnerImg from "../../assets/loading-spinner.gif"


function LoadingSpinner(props) {
    return (
        <div className="d-flex al-center jc-center loading-overlay-cotainer">
            <img src={LoadingSpinnerImg} alt="Loading" height="80px" />
        </div>
    );
}

export default LoadingSpinner;
