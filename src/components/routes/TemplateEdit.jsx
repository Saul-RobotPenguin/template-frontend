import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";
import FileBase64 from "react-file-base64";
import { getSingleTemplate } from "../services/services";
import "./Form.css";

const TemplateEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [usersFileBase64Updated, setUsersFileBase64Updated] = useState("");
  const [templateNameUpdated, setTemplateNameUpdated] = useState("");
  const [templateDescriptionUpdated, setTemplateDescriptionUpdated] =
    useState("");
  const [denied, setDenied] = useState(false);

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
        const response = await getSingleTemplate(id);
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
    if (id == process.env.REACT_APP_NO1) {
      return alert("This template cannot be edited");
    }
    if (id == process.env.REACT_APP_NO2) {
      return alert("This template cannot be edited");
    }
    if (id == process.env.REACT_APP_NO3) {
      return alert("This template cannot be edited");
    }
    axios({
      url: process.env.REACT_APP_SINGLE_TEMPLATE + `${id}`,
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

  return (
    <Layout>
      <br />
      <h1>Edit This Template</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div class="textfield-outlined">
          <input
            id="input-one"
            type="text"
            name="name"
            onChange={(e) => setTemplateNameUpdated(e.target.value)}
            value={templateNameUpdated}
          />
          <label for="input-one">Updated Cover Letter Name</label>
        </div>
        <div class="textfield-outlined">
          <input
            id="input-two"
            type="text"
            name="description"
            onChange={(e) => setTemplateDescriptionUpdated(e.target.value)}
            value={templateDescriptionUpdated}
          />
          <label for="input-two">Updated Cover Letter Description</label>
        </div>
        <FileBase64
          multiple={false}
          accept="docx"
          name="file"
          onDone={(base64) => getUsersBase64(base64.base64)}
        />

        <br />

        <button id="submit" type="submit">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default TemplateEdit;
