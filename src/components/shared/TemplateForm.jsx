import { Link } from "react-router-dom";
const TemplateForm = ({ template, handleSubmit, handleChange, cancelPath }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Name</label>
      <input
        placeholder="Name To Input"
        defaultValue={template.name}
        name="name"
        onChange={(e) => handleChange(e)}
      />
      <input
        placeholder="A description"
        defaultValue={template.description}
        name="description"
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">Submit</button>
      <Link to={cancelPath}>
        <button>Cancel</button>
      </Link>
    </form>
  );
};
export default TemplateForm;
