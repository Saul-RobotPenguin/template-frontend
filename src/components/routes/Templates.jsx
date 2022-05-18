import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
      <li key={template._id}>
        <NavLink to={`/template/${template._id}`}>{template.name}</NavLink>
      </li>
    );
  });

  return (
    <div>
      <h4>Templates</h4>
      <ul>{templatesData}</ul>
    </div>
  );
}
export default Templates;
