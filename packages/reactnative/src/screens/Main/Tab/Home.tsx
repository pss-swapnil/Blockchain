import { HStack, ScrollView, Text, VStack, View, Button } from 'native-base';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { WINDOW_WIDTH } from '../../../utils/styles';
import { COLORS } from '../../../utils/constants';
import { useNavigation } from '@react-navigation/native';
import QRCodeScanner from '../../../components/modals/QRCodeScanner'; // Import QR scanner component

type Props = {};

function HighlightedText({ children }: { children: string }) {
    return (
        <View bgColor={COLORS.primaryLight} px={"1"}>
            <Text fontSize={"md"} textAlign={"center"}>{children}</Text>
        </View>
    );
}

export default function Example({ }: Props) {
    const navigation = useNavigation();
    const [isScannerOpen, setIsScannerOpen] = useState(false);
    const [scannedData, setScannedData] = useState<string | null>(null);

    const handleScanClose = () => {
        setIsScannerOpen(false);
    };

    const handleCodeRead = (value: string) => {
        setScannedData(value); // Store scanned QR code data
        setIsScannerOpen(false); // Close the scanner after scan
    };

    return (
        <ScrollView flex={"1"} bgColor={"white"}>
            <VStack px={"2"} py={"8"} alignItems={"center"}>
                <Text fontSize={"2xl"} fontWeight={"light"}>
                    Welcome to
                </Text>
                <Text fontSize={"4xl"} fontWeight={"bold"}>
                    Rainfall-Wallet
                </Text>
            </VStack>

            <View p={"4"} justifyContent={"center"} alignItems={"center"}>
                <VStack
                    px={"4"}
                    py={"8"}
                    w={"80%"}
                    borderWidth={"1"}
                    borderColor={"muted.200"}
                    rounded={"3xl"}
                    alignItems={"center"}
                    space={"6"}
                >
                    {/* <Ionicons
                        name="bug-outline"
                        color={"grey"}
                        size={WINDOW_WIDTH * 0.08}
                    /> */}

                    <Text textAlign={"center"} fontSize={"lg"}>
                        Scan a QR Code
                    </Text>

                    {/* QR Code Scanner Button */}
                    <Button onPress={() => setIsScannerOpen(true)} mt={4}>
                        Open QR Scanner
                    </Button>

                    {/* Display scanned QR code data as selectable Text */}
                    {scannedData && (
                        <Text
                            mt={"4"}
                            textAlign={'center'}
                            color={'primary.500'}
                            selectable
                        >
                            {scannedData}
                        </Text>
                    )}
                </VStack>
            </View>

            {/* QR Code Scanner Modal */}
            <QRCodeScanner
                isOpen={isScannerOpen}
                onClose={handleScanClose}
                onReadCode={handleCodeRead}
            />
        </ScrollView>
    );
}
