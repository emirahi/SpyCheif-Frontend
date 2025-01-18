
import { FC } from "react";
import spycheif from "../../Assets/images/SpyCheif.png";
import { Link } from "react-router-dom";

export const NavbarComponent: FC = () => {
    return (
        <div>
            <div className="bg-white border-b-2 border-[#001F3F] min-h-16 px-5
            flex justify-between items-center">
                <div>
                    <img src={spycheif} width="124px"></img>
                </div>
                <div className="flex gap-4 text-black">
                    <Link to={"/"} className="text-lg">Varlıklar</Link>
                    <Link to={"/apps"} className="text-lg">Uygulamalar</Link>
                    <Link to={"/file-import"} className="text-lg">Dosya Aktar</Link>
                </div>
            </div>
        </div>
    );
}
