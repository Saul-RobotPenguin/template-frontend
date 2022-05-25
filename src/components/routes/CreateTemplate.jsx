import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";
import FileBase64 from "react-file-base64";

function CreateTemplate() {
  const navigate = useNavigate();
  const [usersFileBase64, setUsersFileBase64] = useState("");
  const [templateName, setTemplateName] = useState("");
  const [templateDescription, setTemplateDescription] = useState("");

  const [createdTemplate, setCreatedTemplate] = useState(null);

  function getUsersBase64(file) {
    let updatedBase64 = file.replace(
      `data:application/octet-stream;base64,`,
      ""
    );

    setUsersFileBase64(updatedBase64);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    //if the entry is created in the database, save the response data
    // in the state
    axios({
      url: `http://localhost:3000/api/template`,
      method: "POST",
      data: {
        name: templateName,
        description: templateDescription,
        file: usersFileBase64,
      },
    })
      .then((res) => setCreatedTemplate(res.data))
      .catch(console.error);
  };

  useEffect(() => {
    if (createdTemplate) {
      return navigate(`/`);
    }
  }, [createdTemplate, navigate]);

  return (
    <Layout>
      <br />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="Cover Letter Name"
          name="name"
          onChange={(e) => setTemplateName(e.target.value)}
        />
        <br />

        <input
          placeholder="Cover Letter Description"
          name="description"
          onChange={(e) => setTemplateDescription(e.target.value)}
        />
        <br />
        <FileBase64
          multiple={false}
          accept="docx"
          name="file"
          onDone={(base64) => getUsersBase64(base64.base64)}
        />

        <br />

        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
}
export default CreateTemplate;
