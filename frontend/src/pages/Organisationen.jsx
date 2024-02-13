import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Section from "../components/ui/Section";
import styles from "../styles/organisationen.module.scss";
import { UserContext } from "../context/userContext";

import data from "../data/db.json";

const Organisationen = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  //redirect to login page for any user who isn't´t logged in
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
      <h2 className="h2">Übersicht der Tierheime</h2>
      <div className={styles.container}>
        {data.animalShelters.map((tierheim) => {
          return (
            <Link
              key={tierheim.id}
              to={`/organisationen/${tierheim.name}`}
              className={styles.link}
              state={{ tierheim }}
            >
              <img
                src={`/${tierheim.image}`}
                alt={tierheim.name}
                className={styles.image}
              />
              <h3 className={styles.title}>{tierheim.name}</h3>
            </Link>
          );
        })}
      </div>
      <button className={styles.btn} onClick={alertFunction}>
        Tierheim hinzufügen
      </button>
    </Section>
  );
};

export default Organisationen;
