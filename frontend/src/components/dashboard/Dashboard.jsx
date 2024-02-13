import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useNavigate, useParams } from "react-router-dom";
import styles from "../../styles/dashboard.module.scss";
import Section from "../ui/Section";
import PieChart from "./PieChart";
import BasicLineChart from "./BasicLineChart";
import BackButton from "../buttons/BackButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../context/userContext";

const Dashboard = () => {
  const location = useLocation();
  const { state } = location;
  const { tierheim } = state;

  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  });

  const alertFunction = () => {
    alert("Es wird noch dran gearbeitet...");
  };

  return (
    <Section>
      <div className={styles.header}>
        <h2>{tierheim.name}</h2>
        <button className={styles.editBtn} onClick={alertFunction}>
          <FontAwesomeIcon className={styles.pen} icon={faPen} />
        </button>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h3>Ansprechperson</h3>
          <p>{tierheim.contactPerson}</p>
        </div>

        <div className={styles.content}>
          <h3>Budget</h3>
          <p>{tierheim.budget}</p>
        </div>

        <div className={styles.content}>
          <h3>Mitarbeiter Anzahl</h3>
          <p>{tierheim.employees}</p>
        </div>

        <div className={styles.content}>
          <h3>Tierbestand</h3>
          <p>
            {tierheim.dogs +
              tierheim.cats +
              tierheim.rodents +
              tierheim.birds +
              tierheim.other}
          </p>
        </div>

        <div className={styles.content}>
          <h3>Übersicht Tierarten</h3>
          <div className={styles.pieChart}>
            <PieChart
              dogs={tierheim.dogs}
              cats={tierheim.cats}
              birds={tierheim.birds}
              rodents={tierheim.rodents}
              other={tierheim.other}
            />
          </div>
        </div>

        <div className={styles.content}>
          <h3>Entwicklung Tierbestand 2023</h3>
          <div className={styles.lineChart}>
            <p>x-Achse: Januar bis Dezember</p>
            <p>y-Achse: Anzahl der Tiere</p>
            <BasicLineChart animals={tierheim.animals} />
          </div>
        </div>

        <div className={styles.content}>
          <h3>Adresse</h3>
          <p>{tierheim.address}</p>
        </div>
      </div>

      <BackButton />
    </Section>
  );
};

export default Dashboard;
