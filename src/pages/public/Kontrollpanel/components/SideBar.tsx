const SideBar = (): JSX.Element => {
    
    return (
        <div className="border-2 bg-red-500 basis-48 h-full flex flex-col items-center">
            <div className="h-20 w-20 bg-red-100 m-8">
                logo
            </div>
            <div className="flex flex-col items-center gap-8">
                <div className="h-14 w-14 bg-gray-200 border-0">
                    1
                </div>
            </div>
        </div>
    );
};

export default SideBar;