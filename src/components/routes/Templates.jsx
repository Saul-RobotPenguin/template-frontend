import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Card from "../shared/Card";
import cover1 from "../images/Cover Letter 1.png";
import Navbar from "../shared/Navbar";

function Templates() {
  const [templates, setTemplates] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios("http://localhost:3000/api/templates");
      setTemplates(response.data.template);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const templatesData = templates.map((template) => {
    return (
      <div>
        <Card
          key={template._id}
          path={`/template/${template._id}`}
          img={cover1}
          title={template.name}
          description={template.description}
        />
      </div>


    );
  });

  return (
    <div>
      <Navbar />
      <h4>Templates</h4>
      <ul>{templatesData}</ul>
    </div>
  );
}
export default Templates;
