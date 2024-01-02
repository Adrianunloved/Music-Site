"use client";

import AuthModal from "@/Components/AuthModal";
import UploadModal from "@/Components/UploadModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    // never render a modal when server side rendering
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null;
    }

    return ( 
        <>
            <AuthModal/>
            <UploadModal/>
        </>
     );
}
 
export default ModalProvider;