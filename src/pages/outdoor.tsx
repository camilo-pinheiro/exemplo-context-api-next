import { useOutdoor } from "../contexts/OutdoorContext";

const Outdoor = () => {
  const { outdoor } = useOutdoor();
  return (
    <pre>{JSON.stringify(outdoor) }</pre>)
  }

export default Outdoor;