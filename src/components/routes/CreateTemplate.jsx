import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";
import FileBase64 from "react-file-base64";
import Directions from "../images/Formating Directions.png";
import "./Form.css";
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
      url: process.env.REACT_APP_CREATE_TEMPLATE,
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
      <div className="row">
        <div className="column">
          <div class="form">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div class="textfield-outlined">
                <input
                  id="input-one"
                  type="text"
                  placeholder=""
                  name="name"
                  onChange={(e) => setTemplateName(e.target.value)}
                />
                <label for="input-one">Cover Letter Name</label>
              </div>

              <div class="textfield-outlined">
                <input
                  id="input-one"
                  type="text"
                  placeholder=""
                  name="description"
                  onChange={(e) => setTemplateDescription(e.target.value)}
                />
                <label for="input-two">Cover Letter Description</label>
              </div>

              <FileBase64
                multiple={false}
                accept="docx"
                name="file"
                onDone={(base64) => getUsersBase64(base64.base64)}
              />

              <br />
              <br />
              <br />
              <button id="submit" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="column">
          <img src={Directions} width="550px" height="850px" />
        </div>
      </div>
    </Layout>
  );
}
export default CreateTemplate;
