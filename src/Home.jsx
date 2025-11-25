import { useNavigate } from "react-router";
import ArrowForward from "./icons/ArrowForward";
import Button from "./components/Button";
import Container from "./components/Container";
import NumberField from "./components/NumberField";

function Home() {
  let navigate = useNavigate();

  function onEnter(formData) {
    const subjectMin = formData.get("subject-minutes");
    const subjectSec = formData.get("subject-seconds");
    const speakerMin = formData.get("speaker-minutes");
    const speakerSec = formData.get("speaker-seconds");
    navigate("/timer");
  }

  return (
    <form action={onEnter} className="flex flex-col items-center gap-12 pt-12">
      <Container title="Subject Timer">
        <label htmlFor="subject-minutes">Minutes:</label>
        <NumberField name="subject-minutes" id="subject-minutes" />
        <label htmlFor="subject-seconds">Seconds:</label>
        <NumberField name="subject-seconds" id="subject-seconds" />
      </Container>
      <Container title="Speaker Timer">
        <label htmlFor="speaker-minutes">Minutes:</label>
        <NumberField name="speaker-minutes" id="speaker-minutes" />
        <label htmlFor="speaker-seconds">Seconds:</label>
        <NumberField name="speaker-seconds" id="speaker-seconds" />
      </Container>

      <Button type="submit" icon={ArrowForward} />
    </form>
  );
}

export default Home;
