import { useOutdoor } from "../contexts/OutdoorContext";

const Outdoor = () => {
  const { outdoor } = useOutdoor();
  return (
    <>
    {outdoor?.map((outdoor) => <h1>{outdoor.email}</h1>)}
 </>)
  }

export default Outdoor;