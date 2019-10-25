import React from 'react';
import Person from '../personinfoedit/Person.jsx';

export default function persons() {
    const personData=[
        {
            name:"imran",
            description:"master of mathmatics",
            isEditMode:true,
        },
        {
            name:"irfan",
            description:"super",
            isEditMode:false,
        },
        {
            name:"rizwan",
            description:"doctor",
            isEditMode:true,
        }
    ]
    return (
        <>
        <div>
            <h1>persons</h1>
            {
personData.map(person=><Person person={person}></Person>)

            }
        </div>
        </>
    )
}
