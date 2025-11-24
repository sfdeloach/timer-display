import { useNavigate } from "react-router";
import Container from "./components/Container";
import NumberField from "./components/NumberField";
import Button from "./components/Button";

function Home() {
  let navigate = useNavigate();

  function handleChange(event) {
    console.log(event.target.name, event.target.value);
  }

  function onEnter(formData) {
    const subjectMin = formData.get("subject-minutes");
    const subjectSec = formData.get("subject-seconds");
    const speakerMin = formData.get("speaker-minutes");
    const speakerSec = formData.get("speaker-seconds");
    navigate(
      `/timer?subjectMin=${subjectMin}&subjectSec=${subjectSec}&speakerMin=${speakerMin}&speakerSec=${speakerSec}`,
    );
  }

  return (
    <form action={onEnter} className="flex flex-col items-center gap-12 pt-12">
      <Container title="Subject Timer">
        <label htmlFor="subject-minutes">Minutes:</label>
        <NumberField
          name="subject-minutes"
          id="subject-minutes"
          defaultValue="60"
          onChange={handleChange}
        />
        <label htmlFor="subject-seconds">Seconds:</label>
        <NumberField
          name="subject-seconds"
          id="subject-seconds"
          defaultValue="0"
          onChange={handleChange}
        />
      </Container>
      <Container title="Speaker Timer">
        <label htmlFor="speaker-minutes">Minutes:</label>
        <NumberField
          name="speaker-minutes"
          id="speaker-minutes"
          defaultValue="3"
          onChange={handleChange}
        />
        <label htmlFor="speaker-seconds">Seconds:</label>
        <NumberField
          name="speaker-seconds"
          id="speaker-seconds"
          defaultValue="0"
          onChange={handleChange}
        />
      </Container>

      <Button type="submit" color="green" />
    </form>
  );
}

export default Home;
