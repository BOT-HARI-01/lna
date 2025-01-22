"use client"

export const MainContent = ({children, isSidebarOpen}) =>{

    console.log("Side bar val at maincontent-comp",isSidebarOpen);
    return(
        <div style={{display:"flex"}}>
            <main style={
            {
            marginLeft : isSidebarOpen ? "240px" : "40px",
            marginRight :isSidebarOpen ? "10px" : "30px",
            transition : "margin-left 0.3s ease-in-out"
            }
        }>
            {children}
        </main>
        </div>
    );
};