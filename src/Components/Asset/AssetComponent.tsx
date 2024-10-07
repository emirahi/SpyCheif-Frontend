
import { FC } from "react";
import { Container } from "react-bootstrap";
import { AllAssetComponent } from "./AllAssetComponent";
import { SearchAssetComponent } from "./SearchAssetComponent";

// https://colorhunt.co/palette/001f3f3a6d8c6a9ab0ead8b1 
export const AssetComponent: FC = () => {
    
    return (
        // <div className="mt-6">
        <div>
            <Container fluid>
                <div className="flex sm:flex-col lg:flex-row justify-between gap-5">
                    <div className="pl-5 pt-5 min-w-[50%]">
                        <AllAssetComponent />
                    </div>
                    <div className="border-2 sm:min-h-0 lg:min-h-[calc(100vh-64px)]"></div>
                    <div className="pr-2 pt-5 min-w-[45%]">
                        <SearchAssetComponent />
                    </div>
                </div>
            </Container>

        </div>
    );
}
