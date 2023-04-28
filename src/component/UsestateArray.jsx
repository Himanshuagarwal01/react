import React from "react";

const UsestateArray=()=>{
    const biodata=[
        {
            id:0, myname:"himanshu"
						, age:19
        },
				{
					id:1, myname:"ajay"
					, age:20
			},
    ]

    return (
        <>
        {
					biodata.map(val=>{
						return <h1> Name:{val.myname} & Age:{val.age}</h1>
					})
				}
        </>
    );
}


export default UsestateArray;