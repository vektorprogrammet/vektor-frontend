import React from 'react'


const AppHeader: React.FC = () => {
    
    return ( 
        <div>
            <nav>
                <div className="max-w-7xl mx-auto px-2 sm:px-8 lg:px-10 font-light min-h-20">
                    <h1>Vektorprogrammet</h1>
                </div>
            </nav>
            <div className="Banner bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
                    <h1 className="text-3xl font-bold leading-tight text-gray-900">
                        Velkommen
                    </h1>
                </div>
            </div>
        </div>

    )
}

export default AppHeader;