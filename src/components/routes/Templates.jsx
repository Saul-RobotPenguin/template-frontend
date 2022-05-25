import { useState, useEffect } from "react";
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
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const templatesData = templates.map((template, key) => {
    return (
<<<<<<< HEAD
      <Card
        key={template.id}
        path={`/template/${template._id}`}
        img={cover1}
        title={template.name}
        description={template.description}
      />
=======
      <div>
        <Card
          key={template._id}
          path={`/template/${template._id}`}
          img={cover1}
          title={template.name}
          description={template.description}
        />
        <Card
          key={template._id}
          path={`/template/${template._id}`}
          img={cover1}
          title={template.name}
          description={template.description}
        />
        <Card
          key={template._id}
          path={`/template/${template._id}`}
          img={cover1}
          title={template.name}
          description={template.description}
        />
        <Card
          key={template._id}
          path={`/template/${template._id}`}
          img={cover1}
          title={template.name}
          description={template.description}
        />
        <Card
          key={template._id}
          path={`/template/${template._id}`}
          img={cover1}
          title={template.name}
          description={template.description}
        />
        <Card
          key={template._id}
          path={`/template/${template._id}`}
          img={cover1}
          title={template.name}
          description={template.description}
        />
        <Card
          key={template._id}
          path={`/template/${template._id}`}
          img={cover1}
          title={template.name}
          description={template.description}
        />
        <Card
          key={template._id}
          path={`/template/${template._id}`}
          img={cover1}
          title={template.name}
          description={template.description}
        />
        <Card
          key={template._id}
          path={`/template/${template._id}`}
          img={cover1}
          title={template.name}
          description={template.description}
        />
      </div>


>>>>>>> 086b6b8acbf9cd850d0f8b9e779ec1044eec909a
    );
  });

  return <div className="wrapper">{templatesData}</div>;
}
export default Templates;
