import Container from "./components/Container";
import NumberField from "./components/NumberField";

function Settings() {
  return (
    <form className="flex flex-col items-center gap-6">
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
    </form>
  );
}

export default Settings;
