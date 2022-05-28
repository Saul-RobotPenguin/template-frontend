import { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";
import Base64Downloader from "common-base64-downloader-react";
import { getSingleTemplate } from "../services/services";
import "./Form.css";
function Template() {
  const [template, setTemplate] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSingleTemplate(id);
        const result = response.data.template;
        setTemplate(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!template) {
      return <p>Loading...</p>;
    }
  }, [template]);

  //create functioinality
  const [usersData, setUsersData] = useState({
    first_name: "Saul",
    last_name: "Calleja",
    street_address: "Random Ave",
    city: "New York",
    zipcode: "12345",
    email: "SomeGeneric@fakeemail.com",
    company_name: "Google",
    phone_Num: "123-345-6789",
    job_role: "Web Developer",
    skill_requirements1: "HTML",
    skill_requirements2: "CSS",
    skill_requirements3: "Javascript",
    content:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  });
  const [base64, setBase64] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    //if the entry is created in the database, save the response data
    // in the state
    axios({
      url: process.env.REACT_APP_SINGLE_TEMPLATE + `${id}`,
      method: "POST",
      data: usersData,
    })
      .then((res) => setBase64(res.data.base64str))
      .catch(console.error);
  };

  const [createdData, setCreatedData] = useState(null);

  const handleChange = (event) => {
    //created a placeholder grabbing the value from the user input form
    const updatedField = { [event.target.name]: event.target.value };
    //assigned the empty state with the updatedField into one object
    const editedData = Object.assign(usersData, updatedField);
    //assigned the new object to be updated to the state
    setUsersData(editedData);
  };

  //deleting template
  const deleteTemplate = () => {
    if (id == process.env.REACT_APP_NO1) {
      return alert("This template cannot be deleted");
    }
    if (id == process.env.REACT_APP_NO2) {
      return alert("This template cannot be deleted");
    }
    if (id == process.env.REACT_APP_NO3) {
      return alert("This template cannot be deleted");
    }
    axios({
      url: process.env.REACT_APP_SINGLE_TEMPLATE + `${id}`,
      method: "DELETE",
    })
      .then(() => setDeleted(true))
      .catch(console.error);
  };

  useEffect(() => {
    if (deleted) {
      return navigate("/");
    }
  }, [deleted, navigate]);

  return (
    <Layout>
      <p> Name: {template.name}</p>
      <p> Description: {template.description}</p>.
      <br />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div class="textfield-outlined">
          <input
            id="input-one"
            type="text"
            defaultValue={usersData.first_name}
            name="first_name"
            onChange={(e) => handleChange(e)}
          />
          <label for="input-one">First Name</label>
        </div>

        <div class="textfield-outlined">
          <input
            id="input-two"
            type="text"
            defaultValue={usersData.last_name}
            name="last_name"
            onChange={(e) => handleChange(e)}
          />
          <label for="input-two">Last Name</label>
        </div>

        <div class="textfield-outlined">
          <input
            id="input-three"
            type="text"
            defaultValue={usersData.street_address}
            name="street_address"
            onChange={(e) => handleChange(e)}
          />
          <label for="input-three"> Street Address</label>
        </div>

        <div class="textfield-outlined">
          <input
            id="input-four"
            type="text"
            defaultValue={usersData.city}
            name="city"
            onChange={(e) => handleChange(e)}
          />
          <label for="input-four"> City</label>
        </div>

        <div class="textfield-outlined">
          <input
            id="input-five"
            type="text"
            defaultValue={usersData.zipcode}
            name="zipcode"
            onChange={(e) => handleChange(e)}
          />
          <label for="input-five">Street Zipcode</label>
        </div>

        <div class="textfield-outlined">
          <input
            id="input-six"
            type="text"
            defaultValue={usersData.email}
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <label for="input-six"> Email Address</label>
        </div>

        <div class="textfield-outlined">
          <input
            id="input-seven"
            type="text"
            defaultValue={usersData.company_name}
            name="company_name"
            onChange={(e) => handleChange(e)}
          />
          <label for="input-seven">
            The Name Of The Company You're Applying For
          </label>
        </div>

        <div class="textfield-outlined">
          <input
            id="input-eight"
            type="text"
            defaultValue={usersData.phone_Num}
            name="phone_Num"
            onChange={(e) => handleChange(e)}
          />
          <label for="input-eight">Phone Number</label>
        </div>

        <div class="textfield-outlined">
          <input
            id="input-nine"
            type="text"
            defaultValue={usersData.job_role}
            name="job_role"
            onChange={(e) => handleChange(e)}
          />
          <label for="input-nine">The Role That You're Applying For</label>
        </div>

        <div class="textfield-outlined">
          <input
            id="input-ten"
            type="text"
            defaultValue={usersData.skill_requirements1}
            name="skill_requirements1"
            onChange={(e) => handleChange(e)}
          />
          <label for="input-ten">Skill Requirement 1</label>
        </div>

        <div class="textfield-outlined">
          <input
            id="input-eleven"
            type="text"
            defaultValue={usersData.skill_requirements2}
            name="skill_requirements2"
            onChange={(e) => handleChange(e)}
          />
          <label for="input-eleven">Skill Requirement 2</label>
        </div>

        <div class="textfield-outlined">
          <input
            id="input-twelve"
            type="text"
            defaultValue={usersData.skill_requirements3}
            name="skill_requirements3"
            onChange={(e) => handleChange(e)}
          />
          <label for="input-twelve">Skill Requirement 3</label>
        </div>

        <div class="textfield-outlined">
          <textarea
            id="input-thirteen"
            type="text"
            defaultValue={usersData.content}
            name="content"
            onChange={(e) => handleChange(e)}
          />
          <label for="input-thirteen">
            A Piece Of Why You're A Fit For The Position
          </label>
        </div>

        <button id="submit" type="submit">
          Submit
        </button>
      </form>
      <div className="container">
        <button id="delete" onClick={() => deleteTemplate()}>
          Delete this template
        </button>

        <NavLink to={`/templates/${id}/edit`}>
          <button id="edit">Edit This Template</button>
        </NavLink>

        <Base64Downloader
          // base64={`data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,${template.file}`}

          base64={base64}
          downloadName="Download"
          style={{
            appearance: "button",
            backfaceVisibility: "hidden",
            backgroundColor: "#4462da",
            borderRadius: "6px",
            borderWidth: "0",
            boxShadow:
              "rgba(50, 50, 93, 0.1) 0 0 0 1px inset,\n    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0",
            boxSizing: "border-box",
            color: "#fff",
            cursor: "pointer",
            fontFamily:
              '-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",\n    Ubuntu, sans-serif',
            fontSize: "100%",
            height: "44px",
            lineHeight: "1.15",
            margin: "12px 0 0",
            outline: "none",
            overflow: "hidden",
            padding: "0 25px",
            position: "relative",
            textAlign: "center",
            textTransform: "none",
            transform: "translateZ(0)",
            transition: "all 0.2s, box-shadow 0.08s ease-in",
            userSelect: "none",
            WebkitUserSelect: "none",
            touchAction: "manipulation",
            width: "15.8rem",
          }}
        >
          Download Me
        </Base64Downloader>
      </div>
    </Layout>
  );
}

export default Template;
