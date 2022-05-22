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
    firstname: "Saul",
    lastname: "Calleja",
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
          placeholder="first name"
          defaultValue={usersData.firstname}
          name="firstname"
          onChange={(e) => handleChange(e)}
        />

        <input
          placeholder="last name"
          defaultValue={usersData.lastname}
          name="lastname"
          onChange={(e) => handleChange(e)}
        />

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
