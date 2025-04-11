"use client";

import {
    CrossmintProvider,
    CrossmintAuthProvider,
} from "@crossmint/client-sdk-react-ui";

const clientApiKey = process.env.NEXT_PUBLIC_CROSSMINT_API_KEY as string;

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CrossmintProvider apiKey={clientApiKey}>
            <CrossmintAuthProvider
                embeddedWallets={{
                    type: "evm-smart-wallet",
                    defaultChain: "polygon",
                    createOnLogin: "all-users",
                }}
            >
                {children}
            </CrossmintAuthProvider>
        </CrossmintProvider>
    );
} 