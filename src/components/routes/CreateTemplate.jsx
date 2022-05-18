import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";
import TemplateForm from "../shared/TemplateForm";

function CreateTemplate() {
  const navigate = useNavigate();
  const [template, setTemplate] = useState({
    name: "",
    description: "",
    file: "",
  });
  const [createdTemplate, setCreatedTemplate] = useState(null);

  const handleChange = (event) => {
    //created a placeholder grabbing the value from the user input form
    const updatedField = { [event.target.name]: event.target.value };
    //assigned the empty state with the updatedField into one object
    const editedTemplate = Object.assign(template, updatedField);
    //assigned the new object to be updated to the state
    setTemplate(editedTemplate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //if the entry is created in the database, save the response data
    // in the state
    axios({
      url: `http://localhost:3000/api/template`,
      method: "POST",
      data: template,
    })
      .then((res) => setCreatedTemplate(res.data))
      .catch(console.error);
  };

  useEffect(() => {
    if (createdTemplate) {
      return navigate(`/templates`);
    }
  }, [createdTemplate, navigate]);

  return (
    <Layout>
      <TemplateForm
        item={template}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath="/"
      />
    </Layout>
  );
}
export default CreateTemplate;
