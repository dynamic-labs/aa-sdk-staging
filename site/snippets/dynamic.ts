import { WalletClientSigner, type SmartAccountSigner } from "@alchemy/aa-core";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

//eslint-ignore-next-line
const { primaryWallet } = useDynamicContext();

const dynamicProvider = await primaryWallet?.connector?.getWalletClient();

// a smart account signer you can use as an owner on ISmartContractAccount
export const dynamicSigner: SmartAccountSigner = new WalletClientSigner(
  dynamicProvider,
  "dynamic" // signer type
);
