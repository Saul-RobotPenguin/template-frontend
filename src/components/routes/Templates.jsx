import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../shared/Card";
import { getAllTemplates } from "../services/services";

function Templates() {
  const [templates, setTemplates] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getAllTemplates();
      setTemplates(response.data.template);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const templatesData = templates.map((template, key) => {
    return (
      <Card
        key={template._id}
        id={template._id}
        path={`/template/${template._id}`}
        title={template.name}
        description={template.description}
      />
    );
  });

  return <div className="wrapper">{templatesData}</div>;
}
export default Templates;
