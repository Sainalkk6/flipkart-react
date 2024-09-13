
import { useEffect } from "react";
import NavButton from "../../../../assets/NavButton";
import Card from "./Card"

type Props = {
    currentPage: number;

    pages: number;
    handlePageChange: (pages: number) => void;
    real: [{}];
}

function Body({ currentPage, pages, handlePageChange, real }: Props) {

    useEffect(() => {
        // Check if the current page is out of bounds due to no items
        if (real.length === 0 && currentPage > 1) {
            handlePageChange(currentPage - 1); // Go to the previous page if the current page is empty
        }
    }, [real, currentPage, handlePageChange]);

    return (
        <div>
            {real && <div>
                {real.map((mobile: any, index: number) => (
                    <Card key={index} highlights={mobile.highlights} image={mobile.images} mrp={mobile.mrp} price={mobile.price} rating={mobile.rating} title={mobile.title} />
                ))}
            </div>}
            <div className="flex bg-white border-t-[#e0e0e0] justify-between items-center p-[10px] leading-[32px]">
                <div>
                    <span className="font-interReg text-[13.3px] leading-8 text-[#212121]">{`Page ${currentPage} of ${pages}`}</span>
                </div>
                <div className="flex py-1">
                    {currentPage > 1 ? <NavButton value="previous" padding="pr-5" callback={() => currentPage === 0 ? null : handlePageChange(currentPage - 1)} /> : null}
                    {Array.from({ length: pages }, (_, i) => (
                        <button key={i + 1} className={`inline-block px-2 cursor-pointer h-8 w-8 rounded-full font-interSemi text-[13.4px] leading-8 text-center ${currentPage === i + 1 ? "bg-[#2874f0] text-white" : "text-[#212121] bg-white"}`} onClick={() => handlePageChange(i + 1)} disabled={currentPage === i + 1}>{i + 1}</button>
                    ))}
                    {currentPage === pages ? null : <NavButton value="next" padding="pl-5" callback={() => currentPage === pages ? null : handlePageChange(currentPage + 1)} />}
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Body