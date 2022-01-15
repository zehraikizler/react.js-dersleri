import React from "react";
import { Formik } from "formik";

function FormManagemant() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "Zehra",
          lastName: "İkizler",
          email: "zehraaikizler@gmail.com",
          gender: "female",
          hobies: [],
          country: "turkey"
        }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange, values }) => {
          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
              />

              <br />
              <br />

              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
              />

              <br />
              <br />

              <label htmlFor="email">Email</label>
              <input
                name="email"
                value={values.email}
                onChange={handleChange}
              />

              <br />
              <br />

              <span>Male</span>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                checked={values.gender === "male"}
              />

              <span>Female</span>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={values.gender === "female"}
              />

              <br />
              <br />

              <div>
                <input
                  type="checkbox"
                  name="hobies"
                  value="ciname"
                  onChange={handleChange}
                />
                Cinema
              </div>

              <div>
                <input
                  type="checkbox"
                  name="hobies"
                  value="football"
                  onChange={handleChange}
                />
                Football
              </div>

              <div>
                <input
                  type="checkbox"
                  name="hobies"
                  value="music"
                  onChange={handleChange}
                />
                Music
              </div>

              <br />
              <br />

              <select
                name="country"
                value={values.country}
                onChange={handleChange}
              >
                <option value="turkey">Turkey</option>
                <option value="english">English</option>
              </select>

              <br />
              <br />

              <button type="submit">Submit</button>

              <code>{JSON.stringify(values)}</code>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}

export default FormManagemant;
