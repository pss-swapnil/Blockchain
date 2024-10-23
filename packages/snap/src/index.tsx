// import { assert, UserInputEventType, type OnHomePageHandler, type OnUserInputHandler } from "@metamask/snaps-sdk";
// import { Box, Heading, Text, Button } from "@metamask/snaps-sdk/jsx";

// // Smart contract address and ABI
// const contractAddress = "0x917c2d7B96bC2a9e4960F87922b7087c1ff92B20";
// const balanceOfMethodId = "0x70a08231"; // Method ID for balanceOf(address)

// // Home page handler that renders the UI
// export const onHomePage: OnHomePageHandler = async () => {
//   return {
//     content: (
//       <Box>
//         <Heading>RDP Token Wallet</Heading>
//         <Text>Click the button to fetch your token balance</Text>
//         <Button name="get_balance">Get Token Balance</Button>
//       </Box>
//     ),
//   };
// };

// // User input handler that responds to button clicks
// export const onUserInput: OnUserInputHandler = async ({ event, id }) => {
//   // Ensure the event is a button click event
//   assert(event.type === UserInputEventType.ButtonClickEvent);
//   assert(event.name === "get_balance");

//   try {
//     // Check if MetaMask is available
//     const provider = (window as any).ethereum;
//     if (!provider) {
//       throw new Error("Ethereum provider is not available");
//     }

//     // Request the user to connect their wallet
//     const accounts = await provider.request({ method: "eth_requestAccounts" });
//     const userAddress = accounts[0]; // Get the first account (connected user)

//     // Prepare the JSON-RPC payload for the `balanceOf` method
//     const data = `${balanceOfMethodId}${userAddress.slice(2).padStart(64, "0")}`;

//     // Send JSON-RPC call to fetch the token balance
//     const balanceResponse = await provider.request({
//       method: "eth_call",
//       params: [
//         {
//           to: contractAddress,
//           data: data,
//         },
//         "latest",
//       ],
//     });

//     // Convert the balance from hexadecimal to a readable format
//     const balance = parseInt(balanceResponse, 16) / 1e18;

//     // Update the Snap's UI with the wallet address and token balance
//     await snap.request({
//       method: "snap_updateInterface",
//       params: {
//         id,
//         ui: (
//           <Box>
//             <Heading>Your Wallet</Heading>
//             <Text>Wallet Address: {userAddress}</Text>
//             <Text>Token Balance: {balance.toString()} RDP</Text>
//           </Box>
//         ),
//       },
//     });
//   } catch (error) {
//     // Handle any errors during the contract interaction
//     console.error("Error fetching token balance:", error);

//     // Update the UI with an error message
//     await snap.request({
//       method: "snap_updateInterface",
//       params: {
//         id,
//         ui: (
//           <Box>
//             <Text>Error fetching token balance: {error.message}</Text>
//           </Box>
//         ),
//       },
//     });
//   }
// };

///////////////////////////////////////////////////////////////////////////////////

// import { assert, UserInputEventType, type OnHomePageHandler, type OnUserInputHandler } from "@metamask/snaps-sdk";
// import { Box, Heading, Text, Button } from "@metamask/snaps-sdk/jsx";

// // Smart contract address and ABI
// const contractAddress = "0x917c2d7B96bC2a9e4960F87922b7087c1ff92B20";
// const balanceOfMethodId = "0x70a08231"; // Method ID for balanceOf(address)

// // Home page handler that renders the UI
// export const onHomePage: OnHomePageHandler = async () => {
//   return {
//     content: (
//       <Box>
//         <Heading>RDP Token Wallet</Heading>
//         <Text>Click the button to fetch your token balance</Text>
//         <Button name="get_balance">Get Token Balance</Button>
//       </Box>
//     ),
//   };
// };

// // User input handler that responds to button clicks
// export const onUserInput: OnUserInputHandler = async ({ event, id }) => {
//   // Ensure the event is a button click event
//   assert(event.type === UserInputEventType.ButtonClickEvent);

//   if (event.name === "get_balance") {
//     // Show the popup with static data
//     await showStaticDataPopup(id);
//   } else if (event.name === "approve") {
//     // Fetch the token balance and display the data
//     await fetchTokenBalanceAndDisplay(id);
//   } else if (event.name === "cancel") {
//     // Close the popup (in this case, simply return to home)
//     await closePopup(id);
//   }
// };

// // Function to show a popup with static data
// const showStaticDataPopup = async (id: string) => {
//   const staticData = {
//     name: "swapnil",
//     term: "12 months",
//     vest: "50K",
//     rate: "0.5",
//   };

//   await snap.request({
//     method: "snap_updateInterface",
//     params: {
//       id,
//       ui: (
//         <Box>
//           <Heading>Token Approval</Heading>
//           <Text>Name: {staticData.name}</Text>
//           <Text>Term: {staticData.term}</Text>
//           <Text>Vest: {staticData.vest}</Text>
//           <Text>Rate: {staticData.rate}</Text>
//           <Button name="approve">Approve</Button>
//           <Button name="cancel">Cancel</Button>
//         </Box>
//       ),
//     },
//   });
// };

// // Function to fetch the token balance and display it
// const fetchTokenBalanceAndDisplay = async (id: string) => {
//   try {
//     // Check if MetaMask is available
//     const provider = (window as any).ethereum;
//     if (!provider) {
//       throw new Error("Ethereum provider is not available");
//     }

//     // Request the user to connect their wallet
//     const accounts = await provider.request({ method: "eth_requestAccounts" });
//     const userAddress = accounts[0]; // Get the first account (connected user)

//     // Prepare the JSON-RPC payload for the `balanceOf` method
//     const data = `${balanceOfMethodId}${userAddress.slice(2).padStart(64, "0")}`;

//     // Send JSON-RPC call to fetch the token balance
//     const balanceResponse = await provider.request({
//       method: "eth_call",
//       params: [
//         {
//           to: contractAddress,
//           data: data,
//         },
//         "latest",
//       ],
//     });

//     // Convert the balance from hexadecimal to a readable format
//     const balance = parseInt(balanceResponse, 16) / 1e18;

//     // Update the Snap's UI with the wallet address, static data, and token balance
//     await snap.request({
//       method: "snap_updateInterface",
//       params: {
//         id,
//         ui: (
//           <Box>
//             <Heading>Token Approved</Heading>
//             <Text>Name: swapnil</Text>
//             <Text>Term: 12 months</Text>
//             <Text>Vest: 50K</Text>
//             <Text>Rate: 0.5</Text>
//             <Text>Wallet Address: {userAddress}</Text>
//             <Text>Token Balance: {balance.toString()} RDP</Text>
//           </Box>
//         ),
//       },
//     });
//   } catch (error) {
//     // Handle any errors during the contract interaction
//     console.error("Error fetching token balance:", error);

//     // Update the UI with an error message
//     await snap.request({
//       method: "snap_updateInterface",
//       params: {
//         id,
//         ui: (
//           <Box>
//             <Text>Error fetching token balance: {error.message}</Text>
//           </Box>
//         ),
//       },
//     });
//   }
// };

// // Function to close the popup (return to home page)
// const closePopup = async (id: string) => {
//   await snap.request({
//     method: "snap_updateInterface",
//     params: {
//       id,
//       ui: await onHomePage(), // Go back to home page
//     },
//   });
// };

//////////////////////////////////////////////////////////////////

// import { assert, UserInputEventType, type OnHomePageHandler, type OnUserInputHandler } from "@metamask/snaps-sdk";
// import { Box, Heading, Text, Button } from "@metamask/snaps-sdk/jsx";

// // Smart contract address and ABI
// const contractAddress = "0x917c2d7B96bC2a9e4960F87922b7087c1ff92B20";
// const balanceOfMethodId = "0x70a08231"; // Method ID for balanceOf(address)

// // Static data for demonstration
// const staticData = {
//   name: "swapnil",
//   term: "12 months",
//   vest: "50K",
//   rate: "0.5",
// };

// // Home page handler that renders the UI
// export const onHomePage: OnHomePageHandler = async () => {
//   return {
//     content: (
//       <Box>
//         <Heading>RDP Token Wallet</Heading>
//         <Text>Click the button to fetch your token balance</Text>
//         <Button name="get_balance">Get Token Balance</Button>
//         <Button name="get_details">Get Details</Button>
//       </Box>
//     ),
//   };
// };

// // User input handler that responds to button clicks
// export const onUserInput: OnUserInputHandler = async ({ event, id }) => {
//   // Ensure the event is a button click event
//   assert(event.type === UserInputEventType.ButtonClickEvent);

//   if (event.name === "get_balance") {
//     // Show the popup with static data
//     await showStaticDataPopup(id);
//   } else if (event.name === "get_details") {
//     // Fetch the token balance and show all details
//     await fetchTokenBalanceAndDisplay(id);
//   } else if (event.name === "approve") {
//     // Show approval success message without connecting to wallet
//     await showApprovalSuccess(id);
//   } else if (event.name === "cancel") {
//     // Close the popup (return to home by calling onHomePage directly)
//     await returnToHomePage(id);
//   }
// };

// // Function to show a popup with static data
// const showStaticDataPopup = async (id: string) => {
//   await snap.request({
//     method: "snap_updateInterface",
//     params: {
//       id,
//       ui: (
//         <Box>
//           <Heading>Token Approval</Heading>
//           <Text>Name: {staticData.name}</Text>
//           <Text>Term: {staticData.term}</Text>
//           <Text>Vest: {staticData.vest}</Text>
//           <Text>Rate: {staticData.rate}</Text>
//           <Button name="approve">Approve</Button>
//           <Button name="cancel">Cancel</Button>
//         </Box>
//       ),
//     },
//   });
// };

// // Function to show approval success message
// const showApprovalSuccess = async (id: string) => {
//   // Update the UI with a success message
//   await snap.request({
//     method: "snap_updateInterface",
//     params: {
//       id,
//       ui: (
//         <Box>
//           <Heading>Approval Successful</Heading>
//           <Text>You have successfully approved the token transfer!</Text>
//           <Button name="get_details">Get Details</Button>
//           <Button name="cancel">Cancel</Button>
//         </Box>
//       ),
//     },
//   });
// };

// // Function to fetch the token balance and display it along with all details
// const fetchTokenBalanceAndDisplay = async (id: string) => {
//   try {
//     // Check if MetaMask is available
//     const provider = (window as any).ethereum;
//     if (!provider) {
//       throw new Error("Ethereum provider is not available");
//     }

//     // Request the user to connect their wallet
//     const accounts = await provider.request({ method: "eth_requestAccounts" });
//     const userAddress = accounts[0]; // Get the first account (connected user)

//     // Prepare the JSON-RPC payload for the `balanceOf` method
//     const data = `${balanceOfMethodId}${userAddress.slice(2).padStart(64, "0")}`;

//     // Send JSON-RPC call to fetch the token balance
//     const balanceResponse = await provider.request({
//       method: "eth_call",
//       params: [
//         {
//           to: contractAddress,
//           data: data,
//         },
//         "latest",
//       ],
//     });

//     // Convert the balance from hexadecimal to a readable format
//     const balance = parseInt(balanceResponse, 16) / 1e18;

//     // Update the Snap's UI with all details and token balance
//     await snap.request({
//       method: "snap_updateInterface",
//       params: {
//         id,
//         ui: (
//           <Box>
//             <Heading>All Details</Heading>
//             <Text>Name: {staticData.name}</Text>
//             <Text>Term: {staticData.term}</Text>
//             <Text>Vest: {staticData.vest}</Text>
//             <Text>Rate: {staticData.rate}</Text>
//             <Text>Wallet Address: {userAddress}</Text>
//             <Text>Token Balance: {balance.toString()} RDP</Text>
//           </Box>
//         ),
//       },
//     });
//   } catch (error) {
//     // Handle any errors during the contract interaction
//     console.error("Error fetching token balance:", error);

//     // Update the UI with an error message
//     await snap.request({
//       method: "snap_updateInterface",
//       params: {
//         id,
//         ui: (
//           <Box>
//             <Text>Error fetching token balance: {error.message}</Text>
//           </Box>
//         ),
//       },
//     });
//   }
// };

// // Function to return to home page (without awaiting)
// const returnToHomePage = async (id: string) => {
//   // Directly call the home page UI
//   const homePageContent = await onHomePage();
  
//   // Update the UI with the home page content
//   await snap.request({
//     method: "snap_updateInterface",
//     params: {
//       id,
//       ui: homePageContent.content,
//     },
//   });
// };

////////////////////////////////////////////////////////////////////////

// import { assert, UserInputEventType, type OnHomePageHandler, type OnUserInputHandler } from "@metamask/snaps-sdk";
// import { Box, Heading, Text, Button } from "@metamask/snaps-sdk/jsx";

// // Smart contract address and ABI
// const contractAddress = "0x917c2d7B96bC2a9e4960F87922b7087c1ff92B20";
// const balanceOfMethodId = "0x70a08231"; // Method ID for balanceOf(address)

// // Static data for demonstration
// const staticData = {
//   name: "swapnil",
//   term: "12 months",
//   vest: "50K",
//   rate: "0.5",
// };

// // Home page handler that renders the UI
// export const onHomePage: OnHomePageHandler = async () => {
//   return {
//     content: (
//       <Box>
//         <Heading>RDP Token Wallet</Heading>
//         <Text>Click the button to fetch your token balance</Text>
//         <Button name="get_balance">Get Token Balance</Button>
//         <Button name="get_details">Get Details</Button>
//       </Box>
//     ),
//   };
// };

// // User input handler that responds to button clicks
// export const onUserInput: OnUserInputHandler = async ({ event, id }) => {
//   // Ensure the event is a button click event
//   assert(event.type === UserInputEventType.ButtonClickEvent);

//   if (event.name === "get_balance") {
//     // Show the popup with static data
//     await showStaticDataPopup(id);
//   } else if (event.name === "get_details") {
//     // Fetch the token balance and show all details
//     await fetchTokenBalanceAndDisplay(id);
//   } else if (event.name === "approve") {
//     // Show approval success message without connecting to wallet
//     await showApprovalSuccess(id);
//   } else if (event.name === "cancel") {
//     // Close the popup (return to home by calling onHomePage directly)
//     await returnToHomePage(id);
//   }
// };

// // Function to show a popup with static data
// const showStaticDataPopup = async (id: string) => {
//   await snap.request({
//     method: "snap_updateInterface",
//     params: {
//       id,
//       ui: (
//         <Box>
//           <Heading>Token Approval</Heading>
//           <Text>Name: {staticData.name}</Text>
//           <Text>Term: {staticData.term}</Text>
//           <Text>Vest: {staticData.vest}</Text>
//           <Text>Rate: {staticData.rate}</Text>
//           <Button name="approve">Approve</Button>
//           <Button name="cancel">Cancel</Button>
//         </Box>
//       ),
//     },
//   });
// };

// // Function to show approval success message
// const showApprovalSuccess = async (id: string) => {
//   // Update the UI with a success message
//   await snap.request({
//     method: "snap_updateInterface",
//     params: {
//       id,
//       ui: (
//         <Box>
//           <Heading>Approval Successful</Heading>
//           <Text>You have successfully approved the token transfer!</Text>
//           <Button name="get_details">Get Details</Button>
//           <Button name="cancel">Cancel</Button>
//         </Box>
//       ),
//     },
//   });
// };

// // Function to fetch the token balance and display it along with all details
// const fetchTokenBalanceAndDisplay = async (id: string) => {
//   try {
//     // Check if MetaMask is available
//     const provider = (window as any).ethereum;
//     if (!provider) {
//       throw new Error("Ethereum provider is not available");
//     }

//     // Request the user to connect their wallet
//     const accounts = await provider.request({ method: "eth_requestAccounts" });
//     const userAddress = accounts[0]; // Get the first account (connected user)

//     // Prepare the JSON-RPC payload for the `balanceOf` method
//     const data = `${balanceOfMethodId}${userAddress.slice(2).padStart(64, "0")}`;

//     // Send JSON-RPC call to fetch the token balance
//     const balanceResponse = await provider.request({
//       method: "eth_call",
//       params: [
//         {
//           to: contractAddress,
//           data: data,
//         },
//         "latest",
//       ],
//     });

//     // Convert the balance from hexadecimal to a readable format
//     const balance = parseInt(balanceResponse, 16) / 1e18;

//     // Update the Snap's UI with all details and token balance
//     await snap.request({
//       method: "snap_updateInterface",
//       params: {
//         id,
//         ui: (
//           <Box>
//             <Heading>All Details</Heading>
//             <Text>Name: {staticData.name}</Text>
//             <Text>Term: {staticData.term}</Text>
//             <Text>Vest: {staticData.vest}</Text>
//             <Text>Rate: {staticData.rate}</Text>
//             <Text>Wallet Address: {userAddress}</Text>
//             <Text>Token Balance: {balance.toString()} RDP</Text>
//           </Box>
//         ),
//       },
//     });
//   } catch (error) {
//     // Handle any errors during the contract interaction
//     console.error("Error fetching token balance:", error);

//     // Update the UI with an error message
//     await snap.request({
//       method: "snap_updateInterface",
//       params: {
//         id,
//         ui: (
//           <Box>
//             <Text>Error fetching token balance: {error.message}</Text>
//           </Box>
//         ),
//       },
//     });
//   }
// };

// // Function to return to home page (without awaiting)
// const returnToHomePage = async (id: string) => {
//   // Directly call the home page UI
//   const homePageContent = await onHomePage();
  
//   // Update the UI with the home page content
//   await snap.request({
//     method: "snap_updateInterface",
//     params: {
//       id,
//       ui: homePageContent.content,
//     },
//   });
// };

///----------------------------------------------------------------------------

import { assert, UserInputEventType, type OnHomePageHandler, type OnUserInputHandler } from "@metamask/snaps-sdk";
import { Box, Heading, Text, Button, FileInput, Form, Field } from "@metamask/snaps-sdk/jsx";

// Smart contract address and ABI
const contractAddress = "0x917c2d7B96bC2a9e4960F87922b7087c1ff92B20";
const balanceOfMethodId = "0x70a08231"; // Method ID for balanceOf(address)

// Static data for demonstration
const staticData = {
  name: "swapnil",
  term: "12 months",
  vest: "50K",
  rate: "0.5",
};

// Home page handler that renders the UI
export const onHomePage: OnHomePageHandler = async () => {
  const interfaceId = await snap.request({
    method: "snap_createInterface",
    params: {
      ui: (
        <Box>
          <Heading>QR Code upload</Heading>
          <Form name="file-upload-form">
            <Field>
              <FileInput name="file-input" />
            </Field>
          </Form>
          <Button name="get_balance">Get Token Balance</Button>
          <Button name="get_details">Get Details</Button>
        </Box>
      ),
    },
  });

  return {
    id: interfaceId,
  };
};

// User input handler that responds to button clicks and file uploads
export const onUserInput: OnUserInputHandler = async ({ event, id }) => {
  // Ensure the event is a button click event
  assert(event.type === UserInputEventType.ButtonClickEvent || event.type === UserInputEventType.FileUploadEvent);

  if (event.type === UserInputEventType.FileUploadEvent && event.file !== null) {
    console.log(event.file);
    // Handle the uploaded file (you might want to read or process it here)
  } else if (event.name === "get_balance") {
    // Show the popup with static data
    await showStaticDataPopup(id);
  } else if (event.name === "get_details") {
    // Fetch the token balance and show all details
    await fetchTokenBalanceAndDisplay(id);
  } else if (event.name === "approve") {
    // Show approval success message without connecting to wallet
    await showApprovalSuccess(id);
  } else if (event.name === "cancel") {
    // Close the popup (return to home by calling onHomePage directly)
    await returnToHomePage(id);
  }
};

// Function to show a popup with static data
const showStaticDataPopup = async (id: string) => {
  await snap.request({
    method: "snap_updateInterface",
    params: {
      id,
      ui: (
        <Box>
          <Heading>Token Approval</Heading>
          <Text>Name: {staticData.name}</Text>
          <Text>Term: {staticData.term}</Text>
          <Text>Vest: {staticData.vest}</Text>
          <Text>Rate: {staticData.rate}</Text>
          <Button name="approve">Approve</Button>
          <Button name="cancel">Cancel</Button>
        </Box>
      ),
    },
  });
};

// Function to show approval success message
const showApprovalSuccess = async (id: string) => {
  // Update the UI with a success message
  await snap.request({
    method: "snap_updateInterface",
    params: {
      id,
      ui: (
        <Box>
          <Heading>Approval Successful</Heading>
          <Text>You have successfully approved the token transfer!</Text>
          <Button name="get_details">Get Details</Button>
          <Button name="cancel">Cancel</Button>
        </Box>
      ),
    },
  });
};

// Function to fetch the token balance and display it along with all details
const fetchTokenBalanceAndDisplay = async (id: string) => {
  try {
    // Check if MetaMask is available
    const provider = (window as any).ethereum;
    if (!provider) {
      throw new Error("Ethereum provider is not available");
    }

    // Request the user to connect their wallet
    const accounts = await provider.request({ method: "eth_requestAccounts" });
    const userAddress = accounts[0]; // Get the first account (connected user)

    // Prepare the JSON-RPC payload for the `balanceOf` method
    const data = `${balanceOfMethodId}${userAddress.slice(2).padStart(64, "0")}`;

    // Send JSON-RPC call to fetch the token balance
    const balanceResponse = await provider.request({
      method: "eth_call",
      params: [
        {
          to: contractAddress,
          data: data,
        },
        "latest",
      ],
    });

    // Convert the balance from hexadecimal to a readable format
    const balance = parseInt(balanceResponse, 16) / 1e18;

    // Update the Snap's UI with all details and token balance
    await snap.request({
      method: "snap_updateInterface",
      params: {
        id,
        ui: (
          <Box>
            <Heading>All Details</Heading>
            <Text>Name: {staticData.name}</Text>
            <Text>Term: {staticData.term}</Text>
            <Text>Vest: {staticData.vest}</Text>
            <Text>Rate: {staticData.rate}</Text>
            <Text>Wallet Address: {userAddress}</Text>
            <Text>Token Balance: {balance.toString()} RDP</Text>
          </Box>
        ),
      },
    });
  } catch (error) {
    // Handle any errors during the contract interaction
    console.error("Error fetching token balance:", error);

    // Update the UI with an error message
    await snap.request({
      method: "snap_updateInterface",
      params: {
        id,
        ui: (
          <Box>
            <Text>Error fetching token balance: {error.message}</Text>
          </Box>
        ),
      },
    });
  }
};

// Function to return to home page (without awaiting)
const returnToHomePage = async (id: string) => {
  // Directly call the home page UI
  const homePageContent = await onHomePage();
  
  // Update the UI with the home page content
  await snap.request({
    method: "snap_updateInterface",
    params: {
      id,
      ui: homePageContent.content,
    },
  });
};
