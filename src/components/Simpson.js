import "./Simpson.css";

// 1. Описати всю сім'ю сімпсонів (5 персонажів)

const Simpson = ({name, surname, age, info, photo}) => {
    return (
        <div className='character'>
            <img src={photo} alt={photo}/>
            <h4 className='fullname'>{name} {surname}</h4>
            <p className='age'>age: {age}</p>
            <p className='information'>info: {info}</p>
        </div>
    );
};

// const Simpson = ({simpson}) => {
//     return (
//         <div className='character'>
//             <img src={simpson.photo} alt={simpson.photo}/>
//             <h4 className='fullname'>{simpson.name} {simpson.surname}</h4>
//             <p className='age'>age: {simpson.age}</p>
//             <p className='information'>info: {simpson.info}</p>
//         </div>
//     );
// };

export {Simpson};
