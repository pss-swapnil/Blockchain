import { assert, UserInputEventType, type OnHomePageHandler, type OnUserInputHandler } from "@metamask/snaps-sdk";
import { Box, Heading, Text, Button } from "@metamask/snaps-sdk/jsx";
import { ethers } from "ethers";

// Smart contract ABI (replace this with your contract's actual ABI)
const contractABI = [
  "function sendTokens(address _to, uint256 _amount) public", // Example function in your contract
];

// Smart contract address (replace this with your deployed contract address)
const contractAddress = "0xYourContractAddress";

// Home page handler that renders the UI
export const onHomePage: OnHomePageHandler = async () => {
  return {
    content: (
      <Box>
        <Heading>Hello world!</Heading>
        <Text>Welcome to my Snap home page!</Text>
        {/* Button that triggers a user input event */}
        <Button name="click_button">Click Me</Button>
      </Box>
    ),
  };
};

// User input handler that responds to button clicks
export const onUserInput: OnUserInputHandler = async ({ event, id }) => {
  // Ensure the event is a button click event and the button clicked is the expected one
  assert(event.type === UserInputEventType.ButtonClickEvent);
  assert(event.name === "click_button");

  // Request wallet connection and trigger the smart contract
  try {
    // Check if MetaMask is available and request access to the user's wallet
    const provider = (window as any).ethereum;
    if (!provider) {
      throw new Error("Ethereum provider is not available");
    }

    // Request the user to connect their wallet
    await provider.request({ method: "eth_requestAccounts" });

    // Create a signer to interact with the user's account
    const signer = new ethers.providers.Web3Provider(provider).getSigner();

    // Create a contract instance
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    // Define the amount of tokens to send (adjust this as needed)
    const amountToSend = ethers.utils.parseUnits("100", 18); // For example, 100 tokens (with 18 decimals)

    // Call the smart contract function (replace with your contract function)
    const transactionResponse = await contract.sendTokens(await signer.getAddress(), amountToSend);

    // Wait for the transaction to be mined
    await transactionResponse.wait();

    // If successful, update the UI with a success message
    await snap.request({
      method: "snap_updateInterface",
      params: {
        id,
        ui: (
          <Box>
            <Text>Transaction successful! Tx Hash: {transactionResponse.hash}</Text>
          </Box>
        ),
      },
    });
  } catch (error) {
    // Handle any errors during the contract interaction
    console.error("Error interacting with the smart contract:", error);

    // Update the UI with an error message
    await snap.request({
      method: "snap_updateInterface",
      params: {
        id,
        ui: (
          <Box>
            <Text>Error interacting with the contract: {error.message}</Text>
          </Box>
        ),
      },
    });
  }
};
