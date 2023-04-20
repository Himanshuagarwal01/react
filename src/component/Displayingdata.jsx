import React from "react";

function Displaydata(){
    const user={
        name:"German Shephard",
        iamgeurl:"https://www.google.com/url?sa=i&url=http%3A%2F%2Ft1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcQrTooq1lOx1KHsDfDTSPk3GMGIlz0hBjfcFZgNbcOTxjm1oVKUqjVK0O6rku6pXIPSNIn1zHYWWn7SiPs&psig=AOvVaw1oMY0OxUGDAuBDvfWCIzxm&ust=1682057462557000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJCs9PLmt_4CFQAAAAAdAAAAABAE",
        imageSize:500
    };

    
        return (
            <>
            <div id="container">
            <h1 className="texttt" >{user.name}</h1>
            <img
             className="germanshepard"
             src={user.iamgeurl}
             alt={'Photo of '+ user.name}
             style={{
                width:user.imageSize,
                height:user.imageSize
             }
             }
             
            />
            </div>
            </>
        );
    }


export default Displaydata;