import { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";
import Base64Downloader from "common-base64-downloader-react";

function Template() {
  const [template, setTemplate] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(
          `http://localhost:3000/api/templates/${id}`
        );
        console.log(response.data.template);
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
      url: `http://localhost:3000/api/templates/${id}`,
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
    axios({
      url: `http://localhost:3000/api/templates/${id}`,
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
        <input
          placeholder="Your First Name"
          defaultValue={usersData.first_name}
          name="first_name"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          placeholder="Your Last Name"
          defaultValue={usersData.last_name}
          name="last_name"
          onChange={(e) => handleChange(e)}
        />

        <br />
        <input
          placeholder="Your Street Address"
          defaultValue={usersData.street_address}
          name="street_address"
          onChange={(e) => handleChange(e)}
        />
        <br />

        <input
          placeholder="Your City"
          defaultValue={usersData.city}
          name="city"
          onChange={(e) => handleChange(e)}
        />
        <br />

        <input
          placeholder="Your Zipcode"
          defaultValue={usersData.zipcode}
          name="zipcode"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          placeholder="Your Email Address"
          defaultValue={usersData.email}
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          placeholder="Company Name That You're Applying For"
          defaultValue={usersData.company_name}
          name="company_name"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          placeholder="Your Phone Number"
          defaultValue={usersData.phone_Num}
          name="phone_Num"
          onChange={(e) => handleChange(e)}
        />

        <br />

        <input
          placeholder="The Job Role That You're Applying For"
          defaultValue={usersData.job_role}
          name="job_role"
          onChange={(e) => handleChange(e)}
        />

        <br />
        <input
          placeholder="Skill Requirement"
          defaultValue={usersData.skill_requirements1}
          name="skill_skill_requirements1"
          onChange={(e) => handleChange(e)}
        />

        <br />
        <input
          placeholder="Skill Requirement"
          defaultValue={usersData.skill_requirements2}
          name="skill_skill_requirements2"
          onChange={(e) => handleChange(e)}
        />

        <br />
        <input
          placeholder="Skill Requirement"
          defaultValue={usersData.skill_requirements3}
          name="skill_skill_requirements3"
          onChange={(e) => handleChange(e)}
        />

        <br />

        <textarea
          placeholder="Content"
          defaultValue={usersData.content}
          name="content"
          onChange={(e) => handleChange(e)}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
      <br />
      <button onClick={() => deleteTemplate()}>Delete this template</button>
      <br />
      <br />
      <Base64Downloader
        // base64={`data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,${template.file}`}
        base64={base64}
        downloadName="Download"
      >
        Click to download Your Cover Letter
      </Base64Downloader>
      <br />
      <NavLink to="/templates">Back to all templates</NavLink>
    </Layout>
  );
}

export default Template;
