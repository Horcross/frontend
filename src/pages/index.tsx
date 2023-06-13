import { useAccount } from "wagmi";
import Asset from "../components/asset";
import Alert from "../components/alert";

function Page() {
  const { isConnected, address } = useAccount();
  return <div>{isConnected ? <Asset ownerAddr={address} /> : <Alert />}</div>;
}

export default Page;
