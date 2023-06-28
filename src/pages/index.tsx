import { useAccount } from "wagmi";
import { useRouter } from "next/router"
import Alert from "../components/alert";

function Page() {
  const router = useRouter()
  const { isConnected } = useAccount();
  if (isConnected) {
    router.push('/asset')
  }
  else {
    return <div></div>;
  }
  // return <div>{isConnected ? <Asset ownerAddr={address} /> : <Alert />}</div>;
}

export default Page;
