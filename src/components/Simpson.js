import "./Simpson.css";
const Simpson = ({simpson}) => {
    return (
        <div className='character'>
            <img src={simpson.photo} alt={simpson.photo}/>
            <h4 className='fullname'>{simpson.name} {simpson.surname}</h4>
            <p className='age'>age: {simpson.age}</p>
            <p className='information'>info: {simpson.info}</p>
        </div>
    );
};

export {Simpson};
