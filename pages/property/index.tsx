import { useRouter } from "next/router";

const Property = () => {
  const router = useRouter();

  return (
    <div>
      <p>Hozirgi marshrut: {router.pathname}</p>
      <p>Joriy query: {JSON.stringify(router.query)}</p>
    </div>
  );
};

export default Property;
