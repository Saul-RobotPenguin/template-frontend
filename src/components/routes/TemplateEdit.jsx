import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";
import FileBase64 from "react-file-base64";

const TemplateEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [usersFileBase64Updated, setUsersFileBase64Updated] = useState("");
  const [templateNameUpdated, setTemplateNameUpdated] = useState("");
  const [templateDescriptionUpdated, setTemplateDescriptionUpdated] =
    useState("");

  const [updated, setUpdated] = useState(false);

  function getUsersBase64(file) {
    let updatedBase64 = file.replace(
      `data:application/octet-stream;base64,`,
      ""
    );

    setUsersFileBase64Updated(updatedBase64);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(
          `http://localhost:3000/api/templates/${id}`
        );

        setTemplateNameUpdated(response.data.template.name);
        setTemplateDescriptionUpdated(response.data.template.description);
        setUsersFileBase64Updated(response.data.template.file);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: `http://localhost:3000/api/templates/${id}`,
      method: "PUT",
      data: {
        name: templateNameUpdated,
        description: templateDescriptionUpdated,
        file: usersFileBase64Updated,
      },
    })
      .then(() => setUpdated(true))
      .catch(console.error);
  };

  useEffect(() => {
    if (updated) {
      return navigate(`/template/${id}`);
    }
  });

  console.log("saul branch");

  return (
    <Layout>
      <br />
      <h1>Edit This Template</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="Updated Cover Letter Name"
          name="name"
          onChange={(e) => setTemplateNameUpdated(e.target.value)}
          value={templateNameUpdated}
        />
        <br />

        <input
          placeholder="Updated Cover Letter Description"
          name="description"
          onChange={(e) => setTemplateDescriptionUpdated(e.target.value)}
          value={templateDescriptionUpdated}
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
};

export default TemplateEdit;
