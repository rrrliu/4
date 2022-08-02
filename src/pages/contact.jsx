import React from "react";
import Layout from "../components/Layout";

const Impressum = () => {
  return (
    <Layout>
      <div className="decorate-links">
        <div>
          <h1 className="text-3xl font-bold text-secondary underline">
            contact & impressum
          </h1>
          <div className="mt-4">
            <p>
              If you want to reach out:
              <ul>
                {" "}
                <li>
                  send us an email:{" "}
                  <a href="mailto:henlo@ethberlin.ooo">henlo@ethberlin.ooo</a>{" "}
                </li>{" "}
                <li>
                  join our{" "}
                  <a href="https://matrix.to/#/%23ethberlin:matrix.org">
                    matrix space
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="text-sm">
          <h1 className="text-xl font-bold ">Impressum</h1>
          <div className="">Angaben gem&auml;&szlig; &sect; 5 TMG </div>
          <div className="mt-4">
            Goerli Dezentral gGmbH Mariannenstraße 9-10 10999 Berlin
          </div>
          <div className="mt-4">
            Handelsregister: HRB 207663 B Registergericht: Amtsgericht
            Charlottenburg, Berlin Umstatzsteuer-ID: DE325917754
          </div>
          <div className="mt-4">
            Vertreten durch A. Schoedon Telefon: +49 (0) 30 20613410 E-Mail:
            schoedon@ethberlin.ooo
          </div>
          <div className="mt-4">
            Goerli Dezentral gGmbH is an acknowledged non-profit entity in
            Germany accodring to §52 AO.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Impressum;