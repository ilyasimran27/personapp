import React from 'react'
import PropType from 'prop-types';
import Personinfo from './Personinfo.jsx';
import Personedit from './Personedit.jsx';
export default function Person(props) {
    return (
        <div>
           {

               props.person.isEditMode?<Personinfo person={props.person} ></Personinfo> : <Personedit person={props.person}></Personedit>
           }
        </div>
    )
}
Person.propTypes={
    person:PropType.object,
}
