import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/backBtn.module.scss";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button className={styles.backBtn} onClick={() => navigate(-1)}>
      <FontAwesomeIcon className={styles.paw} icon={faPaw} />
      zurück
    </button>
  );
};

export default BackButton;
